const questions = [
  {
    text: "What’s his cutest habit?",
    media: "media/q1.jpg",
    type: "image",
    options: ["Smile", "Laugh", "Talk", "Exist"]
  },
  {
    text: "What reminds you of him?",
    media: "media/q2.mp4",
    type: "video",
    options: ["Music", "Food", "Memes", "Everything"]
  },
  // ADD MORE QUESTIONS HERE (up to 9)
  {
    text: "Will you be my Valentine? 💘",
    media: null,
    type: null,
    options: ["Yes 💖", "No 😐"],
    final: true
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question-title").innerText = q.text;

  const mediaDiv = document.getElementById("media-container");
  mediaDiv.innerHTML = "";

  if (q.type === "image") {
    mediaDiv.innerHTML = `<img src="${q.media}">`;
  }

  if (q.type === "video") {
    mediaDiv.innerHTML = `<video src="${q.media}" controls></video>`;
  }

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => handleAnswer(option, q.final);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(option, isFinal) {
  if (isFinal && option.startsWith("No")) {
    alert("❌ Sorry. System Identified that you are already his Valentine 💖");
    return;
  }

  if (isFinal && option.startsWith("Yes")) {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      alert("💘 YAYYY! Valentine locked in forever 💖");
    }, 500);
    return;
  }

  current++;
  if (current < questions.length) {
    loadQuestion();
  }
}
loadQuestion();
