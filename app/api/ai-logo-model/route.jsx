import { AILogoPrompt } from "@/configs/AiModel";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import axios from "axios";

async function convertImageToBase64(imageUrl) {
  const res = await fetch(imageUrl);
  const buffer = await res.arrayBuffer();
  const contentType = res.headers.get("content-type") || "image/png";
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:${contentType};base64,${base64}`;
}

export async function POST(req) {
  const { prompt, email, title, desc, type, userCredits } = await req.json();
  let base64Image = "";

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const AIPromptResult = await AILogoPrompt.sendMessage(prompt);
  const AIPrompt = JSON.parse(AIPromptResult.response.text())[0].prompt;

  try {
    if (type === "Free") {
      const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(
        AIPrompt
      )}?width=1024&height=1024&model=flux&nologo=true`;

      base64Image = await convertImageToBase64(imageUrl);
    } else {
      const output = await replicate.run(
        "bytedance/hyper-flux-16step:382cf8959fb0f0d665b26e7e80b8d6dc3faaef1510f14ce017e8c732bb3d1eb7",
        {
          input: {
            prompt: AIPrompt,
            num_outputs: 1,
            aspect_ratio: "1:1",
            output_format: "png",
            guidance_scale: 3.5,
            output_quality: 80,
            num_inference_steps: 16,
          },
        }
      );

      base64Image = await convertImageToBase64(output[0]);
      await updateDoc(doc(db, "users", email), {
        credits: Number(userCredits) - 1,
      });
    }

    await setDoc(doc(db, "users", email, "logos", Date.now().toString()), {
      title,
      desc,
      image: base64Image,
    });

    return NextResponse.json({ image: base64Image });

  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
