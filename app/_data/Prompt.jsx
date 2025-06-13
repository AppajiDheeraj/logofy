export default {
  DESIGN_IDEA_PROMPT: `
    Based on the logo type "{logoType}", generate a JSON response with 5 concise logo design ideas (each idea should be a short phrase of 4–5 words maximum) for a brand named "{logoTitle}" described as: "{logoDesc}". Refer to the existing logo design prompt: "{logoPrompt}".
    Return only raw JSON in the following format:
    {
    "ideas": ["Idea 1", "Idea 2", "Idea 3", "Idea 4", "Idea 5"]
    }
    Do not include any extra text, comments, or explanation.
    `,
  LOGO_PROMPT:
    "Generate a text prompt to create Logo for Logo Title/Brand name : {logoTitle},with description: {logoDesc}, with Color combination of {logoColor}, also include the {logoIdea} and include {logoDesign} design idea and Referring to this Logo Prompt:{logoPrompt}  Give me result in JSON portal with prompt field only",
};
