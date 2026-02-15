export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    return res.status(200).json({
      reply: "You said: " + message
    });

  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
      }
