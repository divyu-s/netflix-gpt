import { GoogleGenerativeAI } from "@google/generative-ai";
import { GeminiApiKey } from "../utils/constant";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GeminiApiKey);

const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });

export default geminiModel;
