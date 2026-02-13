<meta name='viewport' content='width=device-width, initial-scale=1'/><script>async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  try {
    const response = await fetch("https://your-backend-url/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: message })
    });

    const data = await response.json();
    addMessage(data.reply, "bot");

  } catch (error) {
    addMessage("Error connecting to server.", "bot");
    console.error(error);
  }
}

function addMessage(text, sender) {
  const messages = document.getElementById("messages");
  const div = document.createElement("div");

  div.classList.add("message", sender);
  div.innerText = text;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}</script>
