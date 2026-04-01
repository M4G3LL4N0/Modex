import OpenAI from "openai";

async function testOpenRouter() {
  // Verify env var is loaded
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY not found in environment");
    return;
  }
  console.log("OPENAI_API_KEY found in environment");

  // Test with a non-DeepSeek model first
  const testModel = "openrouter/auto"; // Will route to any available model
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://openrouter.ai/api/v1"
  });

  try {
    console.log(`Testing with model: ${testModel}`);
    const response = await openai.chat.completions.create({
      model: testModel,
      messages: [{ role: "user", content: "Just say 'test successful'" }],
      max_tokens: 10
    });
    console.log("Test successful:", response.choices[0]?.message?.content);
  } catch (error) {
    console.error("Test failed:");
    if (error instanceof Error) {
      if (error.message.includes("Authentication")) {
        console.error("- Likely invalid OpenRouter API key");
      } else if (error.message.includes("model")) {
        console.error("- Model string format issue");
      } else if (error.message.includes("governor") || error.message.includes("privacy")) {
        console.error("- Provider restriction (try different model)");
      } else if (error.message.includes("quota") || error.message.includes("limit")) {
        console.error("- Free tier limit reached");
      } else {
        console.error("- Unknown error:", error.message);
      }
    }
  }
}

testOpenRouter();
