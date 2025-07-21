particlesJS("particles-js", {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ff477e",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff477e",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const titleContainer = document.querySelector('.title-container');
const heart = document.querySelector('.heart');
const body = document.body;
const particlesContainer = document.getElementById('particles-js');

let isTextElevated = false;

const texts = [
    "Hola ShuraHiwa",
    "Un pantcookie misterioso te dejo esta cartita.",
    "Ojalá y te guste este pequeño presente;",
    "Feliz Día de San Valentín ShuraHiwa. 💕💐"
];

let currentTextIndex = 0;
let writingInProgress = false;

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');

        if (e.target.matches(".heart") && !isTextElevated) {
            titleContainer.classList.add('elevate');
            isTextElevated = true;
        }
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");
            titleContainer.classList.add("elevate");
            body.classList.add("darken-background");
            heart.classList.add("fade-heart");
            particlesContainer.classList.add("hide-particles");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
                
            }, 500);
            envelope.classList.add("disable-envelope");
        } else {
            letter.classList.add('closing-letter');
            titleContainer.classList.remove("elevate"); // Baja el texto
            body.classList.remove("darken-background");
            heart.classList.remove("fade-heart");
            particlesContainer.classList.remove("hide-particles");

            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
                isTextElevated = false;
            }, 500);
            envelope.classList.remove("disable-envelope");
        }
    }
});

const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

let index = 0;

function typeWriter() {
    if (currentTextIndex < texts.length) {
        const text = texts[currentTextIndex];
        typedText.textContent = "";
        writeText(text);
    }
}

function writeText(text) {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(() => writeText(text), 40);
    } else {
        if (currentTextIndex < texts.length - 1) {
            setTimeout(() => {
                eraseText(text);
            }, 1000);
        }
    }
}

function eraseText(text) {
    if (index > 0) {
        typedText.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(() => eraseText(text), 40);
    } else {
        currentTextIndex++;
        typeWriter();
    }
}

window.onload = () => {
    typeWriter();
};

const infoBtn = document.getElementById("info-btn");
const infoModal = document.getElementById("info-modal");
const closeBtn = document.querySelector(".close-btn");

infoBtn.addEventListener("click", () => {
    infoModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    infoModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === infoModal) {
        infoModal.style.display = "none";
    }
});