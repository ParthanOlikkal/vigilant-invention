document.addEventListener("DOMContentLoaded", () => {

  const questions = [
    {
      text: "What is your love language?",
      media: "media/IMG_9130.mp4.mov",
      type: "video",
      options: [
        "Acts of service",
        "Physical Touch",
        "Words of affirmation",
        "Receiving gifts",
        "Quality time"
      ]
    },
    {
      text: "What makes you feel sexy?",
      media: "media/q2.jpg",
      type: "image",
      options: [
        "Confidence",
        "Self Care",
        "Fashion and Style",
        "Intimacy"
      ]
    },
    {
      text: "What is your go-to romantic scent?",
      media: "media/q2.jpg",
      type: "image",
      options: [
        "Vanilla or something sweet",
        "Rose or floral scents",
        "Something fresh and citrusy",
        "Woody or musky scents"
      ]
    },
    {
      text: "What did you first notice in me?",
      media: "media/q1.jpg",
      type: "image",
      options: ["Smile", "Eyes", "Face", "Hair"]
    },
    {
      text: "What do you like the most in me?",
      media: "media/q2.jpg",
      type: "image",
      options: ["Hands", "Character", "Smile", "Lips"]
    },
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

    const title = document.getElementById("question-title");
    const mediaDiv = document.getElementById("media-container");
    const optionsDiv = document.getElementById("options");

    if (!title || !mediaDiv || !optionsDiv) {
      console.error("Required DOM elements missing");
      return;
    }

    title.innerText = q.text;
    mediaDiv.innerHTML = "";
    optionsDiv.innerHTML = "";

    if (q.type === "image") {
      mediaDiv.innerHTML = `<img src="${q.media}" />`;
    }

    if (q.type === "video") {
      mediaDiv.innerHTML = `<video src="${q.media}" controls></video>`;
    }

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;

      if (q.final && option.startsWith("No")) {
        btn.onmouseover = () => {
          btn.style.position = "absolute";
          btn.style.left = Math.random() * 250 + "px";
          btn.style.top = Math.random() * 250 + "px";
        };
      } else {
        btn.onclick = () => handleAnswer(option, q.final);
      }

      optionsDiv.appendChild(btn);
    });
  }

  function handleAnswer(option, isFinal) {
    if (isFinal && option.startsWith("No")) {
      alert("❌ Sorry. System Identified that you are already his Valentine 💖");
      return;
    }

    if (isFinal && option.startsWith("Yes")) {
      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }

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
});
