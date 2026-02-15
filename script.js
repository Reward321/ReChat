async function sendMessage() {
const input = document.getElementById("userInput");
const message = input.value.trim();

if (!message) return;

addMessage(message, "user");
input.value = "";

try {
const response = await fetch("/api/chat", {   // FIXED HERE
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ message: message })  // FIXED HERE
});

const data = await response.json();  
addMessage(data.reply, "bot");

} catch (error) {
addMessage("Error connecting to server.", "bot");
console.error(error);
}
  }
