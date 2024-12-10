const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");

let history = [];

// Fungsi untuk menambahkan pesan ke UI
function addMessage(role, text, isHTML = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${role}`;

  if (isHTML) {
    messageDiv.innerHTML = `<div class="formatted"></div>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    typeEffect(messageDiv.querySelector(".formatted"), text, 20); // Tambahkan efek mengetik
  } else {
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Fungsi untuk memformat teks menjadi HTML
function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold
    .replace(/\*(.*?)\*/g, "<i>$1</i>") // Italic
    .replace(/(?:^|\n)- (.*?)(?:\n|$)/g, "<li>$1</li>") // Bullet point
    .replace(/(?:<li>.*?<\/li>)+/g, "<ul>$&</ul>") // Wrap bullets in <ul>
    .replace(/\n/g, "<br>"); // Line breaks
}

// Fungsi efek mengetik
function typeEffect(element, text, speed) {
  let i = 0;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = text; // Render HTML di elemen sementara
  const content = tempDiv.childNodes;

  function typing() {
    if (i < content.length) {
      const currentNode = content[i].cloneNode(true);
      element.appendChild(currentNode); // Tambahkan elemen HTML
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Event untuk form submit
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = messageInput.value;
  addMessage("user", message); // Tampilkan pesan pengguna
  history.push({ role: "user", parts: [{ text: message }] });
  messageInput.value = ""; // Kosongkan input

  // Kirim permintaan ke server
  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  const data = await response.json();
  const dopiResponse = data.response; // Ekstrak teks dari objek JSON
  const formattedText = formatText(dopiResponse); // Format respons
  addMessage("dopi", formattedText, true); // Tampilkan dengan isHTML=true

  history.push({ role: "model", parts: [{ text: dopiResponse }] }); // Perbarui history
});
