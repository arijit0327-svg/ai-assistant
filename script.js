function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = input.value;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerText = "আমি এখন basic AI assistant 😊";
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
