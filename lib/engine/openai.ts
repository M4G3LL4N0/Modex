import OpenAI from "openai";

const openAIApiKey = process.env.OPENAI_API_KEY;
if (!openAIApiKey) {
  throw new Error(
    "OPENAI_API_KEY is required. Please add it to your environment variables."
  );
}

export const openai = new OpenAI({
  apiKey: openAIApiKey,
});
