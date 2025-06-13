import { db } from "@/configs/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {userEmail, userName} = await req.json();

    try {
        //If user already exists
        const docRef = doc(db, "users", userEmail);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return NextResponse.json(docSnap.data())
        }
        else {
            // Insert new User
            const data = {
                userName : userName,
                userEmail : userEmail,
                credits : 5
            }
            await setDoc(doc(db,"users",userEmail),{
                ...data
            })
            return NextResponse.json(data)
        }
        
    } catch (e) {
        console.error(e);
        return NextResponse.json({error: "Something went wrong"}, {status: 500});        
    }
}