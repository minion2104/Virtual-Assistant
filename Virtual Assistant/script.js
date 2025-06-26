let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon");
  } else {
    speak("Good Evening");
  }
}
window.addEventListener(".load", () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  //console.log("Recognized:", transcript);
  content.innerText = transcript;
  takecommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takecommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  message = message.toLowerCase();
  //console.log("Command received:", message); // Debugging line
  if (message.includes("hello")) {
    speak("hello,how can i help you?");
  } else if (message.includes("who are you")) {
    speak("I am a virtual assistant created by anusha");
  } else if (message.includes("flirt with me")) {
    speak("if nothing lasts forever will you be my nothing");
  } else if (message.includes("i love you")) {
    speak("i love you too");
  } else if (message.includes("can i call you babe")) {
    speak("yeah sure baby");
  } else if (message.includes("are you a thief")) {
    speak("no why");
  } else if (message.includes("because you have stolen my heart")) {
    speak("oh i am glad that you stole my heart ha ha ha");
  } else if (
    message.includes("you can delete the dating app now because i am here")
  ) {
    speak("oh sure but somebody please call the cops");
  } else if (message.includes("oh but why")) {
    speak("its got to be illegal to look that good");
  } else if (message.includes("open youtube")) {
    speak("Opening youtube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("Opening google");
    window.open("https://www.google.com/", "_blank");
  } else if (message.includes("open calculator")) {
    speak("Opening calculator");
    window.open("Calculator://");
  } else if (message.includes("what is the time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(date);
  } else {
    speak(`this is what i found on internet regarding ${message}`);
    window.open(`https://www.google.com/search?q=${message}`);
  }
}
