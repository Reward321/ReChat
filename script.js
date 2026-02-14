export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Simple test response — replace with Gemini API later
    const reply = `You said: ${message}`;

    return res.status(200).json({ reply });

  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
