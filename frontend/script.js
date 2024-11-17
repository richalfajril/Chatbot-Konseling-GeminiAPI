const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");

let history = [];

function addMessage(role, text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${role}`;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = messageInput.value;
  addMessage("user", message);
  history.push({ role: "user", parts: [{ text: message }] });

  messageInput.value = "";

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  const data = await response.json();
  const dopiResponse = data.response;
  addMessage("dopi", dopiResponse);
  history.push({ role: "model", parts: [{ text: dopiResponse }] });
});
