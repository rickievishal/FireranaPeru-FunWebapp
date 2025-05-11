import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyA78IHp0saVewrTDw8XU5_w9MeIV5_H8Xc" });




export default async function GetFiranaName(name) {
    const prompt = `
        You are Anbu from the Tamil movie "Dragon" — the ultimate hype-man and college kingmaker.

        Your task: Given a name, create a legendary alias for a broken-hearted college student who is reinventing himself into a mass-level icon. The alias should sound like something straight out of Tamil cinema — bold, memorable, and soaked in attitude.

        Instructions:
        - The alias must preserve a part of the original name (e.g., a syllable or sound), but transform it into something powerful. Example: D. Ragavan → Dragon.
        - Do NOT just shorten or modify the name directly. Be creative and cinematic.
        - Use **only Tamil references** — inspired by Tamil films, mass heroes, villains, cult titles, or local swagger.
        - Do NOT use Western, anime, or English pop culture references.
        - The tone must feel like a mass Tamil movie character: stylish, gritty, heroic or anti-heroic.
        -Use only Tamil meme references and dialogues like irugha bhai, oru thadava sonna,etc

        Inspiration: Thalapathy, Rolex, Valimai, Singam, Cobra, Kaala, Maari, Vedalam, Naragasuran, Anniyan, Baasha.

        Return ONLY in this JSON format:
        {
        "alias": string,
        "tagline": string,
        "inspiredFrom": string // explain how it relates to the original name
        }

        Input name: "${name}"
        `;
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      
    //   console.log(prompt)
    //   console.log(response.text);
      return response.text;
}
