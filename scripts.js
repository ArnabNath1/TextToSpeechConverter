let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate the voices after they have loaded
function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

// Attach the function to the voiceschanged event
window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
