const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

// async function invoke(){
//     const response = await ai.models.generateContent({
//         model: "models/gemini-2.5-flash",
//         contents:"Hello gemeni!, explain me the concept of AI in simple terms"
//     })

//     console.log(response.text);
// }

