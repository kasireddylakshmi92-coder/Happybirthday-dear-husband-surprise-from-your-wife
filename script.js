/* =========================================================
   CINEMATIC BIRTHDAY WEBSITE - SCRIPT.JS (PART 3)
========================================================= */

/* =========================
   TYPEWRITER INTRO
========================= */

const typewriterText =
"A journey written with love, memories, and forever promises ❤️";

const typewriterEl = document.getElementById("typewriter");

let i = 0;

function typeWriter() {
    if (!typewriterEl) return;

    if (i < typewriterText.length) {
        typewriterEl.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.addEventListener("load", () => {
    if (typewriterEl) {
        typewriterEl.innerHTML = "";
        typeWriter();
    }
});


/* =========================
   MUSIC CONTROL
========================= */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener("click", () => {
        if (!playing) {
            bgMusic.play();
            musicBtn.innerHTML = "⏸ Pause Music";
        } else {
            bgMusic.pause();
            musicBtn.innerHTML = "🎵 Play Music";
        }
        playing = !playing;
    });
}


/* =========================
   REASON BUTTONS
========================= */

const reasonBtns = document.querySelectorAll(".reason-btn");
const reasonOutput = document.getElementById("reasonOutput");

reasonBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        reasonOutput.innerHTML = "❤️ " + btn.dataset.message;
    });
});


/* =========================
   SECRET MESSAGE
========================= */

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

if (secretBtn) {
    secretBtn.addEventListener("click", () => {
        secretMessage.style.display = "block";
        secretBtn.style.display = "none";
    });
}


/* =========================
   OPEN WHEN LETTERS
========================= */

const letterBtns = document.querySelectorAll(".letter-btn");
const letterOutput = document.getElementById("letterOutput");

letterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        letterOutput.innerHTML = btn.dataset.letter;
    });
});


/* =========================
   WHY I CHOOSE YOU
========================= */

const chooseBtns = document.querySelectorAll(".choose-btn");
const chooseOutput = document.getElementById("chooseOutput");

chooseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        chooseOutput.innerHTML = "❤️ " + btn.dataset.text;
    });
});


/* =========================
   RELATIONSHIP WHEEL
========================= */

const spinBtn = document.getElementById("spinBtn");
const wheel = document.getElementById("wheelCircle");
const wheelResult = document.getElementById("wheelResult");

const wheelItems = [
    "Love ❤️",
    "Trust 🤝",
    "Care 🌹",
    "Support 🌟",
    "Memories 📸",
    "Future 💍"
];

if (spinBtn) {
    spinBtn.addEventListener("click", () => {

        const randomIndex = Math.floor(Math.random() * wheelItems.length);

        const rotation = 360 * 5 + (randomIndex * 60);

        wheel.style.transform = `rotate(${rotation}deg)`;

        setTimeout(() => {
            wheelResult.innerHTML = "✨ " + wheelItems[randomIndex];
        }, 3000);

    });
}


/* =========================
   BIRTHDAY CAKE EFFECT
========================= */

const candleBtn = document.getElementById("candleBtn");
const cakeImage = document.getElementById("cakeImage");
const birthdayMessage = document.getElementById("birthdayMessage");

if (candleBtn) {
    candleBtn.addEventListener("click", () => {

        cakeImage.src = "images/cake-blown.png";

        birthdayMessage.innerHTML =
            "🎉 Happy Birthday My Love ❤️";

        createConfetti();
        createHearts();
    });
}


/* =========================
   CONFETTI EFFECT
========================= */

function createConfetti() {
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = randomColor();

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function randomColor() {
    const colors = ["#ff4d88", "#ffcc00", "#00e6e6", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


/* =========================
   FINAL SURPRISE SCREEN
========================= */

const finalBtn = document.getElementById("finalBtn");
const finalScreen = document.getElementById("finalScreen");
const typingMessage = document.getElementById("typingMessage");
const loveBtn = document.getElementById("loveBtn");
const loveExplosion = document.getElementById("loveExplosion");

const finalText =
`Dear Charan...

You changed my life in ways I never expected.

Thank you for every smile,
every memory,
every moment.

Happy Birthday ❤️`;

let j = 0;

function typeFinal() {
    if (j < finalText.length) {
        typingMessage.innerHTML += finalText.charAt(j);
        j++;
        setTimeout(typeFinal, 50);
    }
}

if (finalBtn) {
    finalBtn.addEventListener("click", () => {
        finalScreen.style.display = "flex";
        typingMessage.innerHTML = "";
        j = 0;
        typeFinal();
    });
}


/* =========================
   FINAL LOVE EXPLOSION
========================= */

if (loveBtn) {
    loveBtn.addEventListener("click", () => {

        loveExplosion.style.opacity = "1";
        loveExplosion.style.transform = "scale(1)";

        for (let i = 0; i < 120; i++) {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            heart.style.fontSize = Math.random() * 30 + 15 + "px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    });
}


/* =========================
   AUTO SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".section");

function revealOnScroll() {
    reveals.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            sec.classList.add("reveal");
            sec.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================
   CONSOLE SECRET MESSAGE
========================= */

console.log(`
❤️ Happy Birthday Charan ❤️

This website was made with endless love.

— A small surprise from your wife ❤️
`);
