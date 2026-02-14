async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, "user"); // Show user message immediately
  input.value = "";

  try {
    const response = await fetch("/api/chat", {  // CALL BACKEND
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message }) // Send the message key
    });

    const data = await response.json();
    addMessage(data.reply, "bot"); // Show bot reply

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
}
