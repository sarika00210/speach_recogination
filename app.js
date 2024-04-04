
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const userInput = document.getElementById('user-input');
const assistantOutput = document.getElementById('assistant-output');

let recognition;

function startConversation() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    userInput.textContent = transcript;

    // Process the user input here

    const response = 'I heard you say: ' + transcript;
    assistantOutput.textContent = response;
  };

  recognition.start();

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopConversation() {
  recognition.stop();

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startConversation);
stopBtn.addEventListener('click', stopConversation);

// Initialize the conversation
stopBtn.disabled = true;