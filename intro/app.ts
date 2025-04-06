import dotenv from "dotenv";
dotenv.config();

import OpenAi from "openai";

const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages: [
      {
        role: "user",
        content: "Hey, my name is Ariel, greet me.",
      }
    ]
  });
  
  console.log(response.choices);

