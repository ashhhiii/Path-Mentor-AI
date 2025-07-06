import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Path-Mentor-AI", // Unique app ID
  name: "Path-Mentor-AI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});