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
            color: {
                value: ["#f8c8dc", "#d9c2f0", "#cce5ff"]
            },

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
    "やっほー、可愛い子ちゃん (´▽`ʃ♡ƪ)",
    "今日はとっても特別な日で、",
    "だからこれプレゼントしたくて。もっと素敵なものを作りたかったけど…",
    "あなたが私を笑顔にするみたいに、これもあなたを笑顔にできたらいいな。",
    "3周年記念日おめでとう、めるんちゃん🎉🎉",
];

let currentTextIndex = 0;
let writingInProgress = false;

document.addEventListener('click', (e) => {
    // Evita que clics en el botón de traducir afecten la carta
    if (e.target.closest('.translate-btn')) return;

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
            titleContainer.classList.remove("elevate");
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

const btnTraducir = document.getElementById('btn-traducir');
const mensaje = document.getElementById('mensaje');

const textoOriginal = mensaje.innerHTML;

const textoTraducido = `
    <p id="mensaje">
   
    Ya son 3 años !!!!
    Parece mucho, pero aún se siente como el primer día que te encontré.  
    Desde entonces, cada minuto contigo se ha vuelto más valioso que el oro…  
    sin darme cuenta, te convertiste en algo tan esencial como el aire.  

    Gracias por cada momento que compartes,  
    por tus palabras, tus sonrisas, tu voz que nos acompaña incluso en los días difíciles.  
    Gracias por existir, por ser tú.  

    No importa si estás cantando, jugando o simplemente hablando,  
    logras iluminar espacios que ni yo sabía que estaban oscuros.  
    Tu presencia calma, tu energía sincera, y esa luz que brilla incluso cuando tú misma dudas… todo eso hace que seguirte sea tan especial.

    A veces no sé cómo explicarlo,  
    pero verte ser tú misma nos da fuerza.  
    Nos inspiras a seguir, a mejorar, a creer un poco más.  

    Quizá no te des cuenta…  
    pero para mí, tú eres única, especial, y siempre lo serás.  
    Realmente me siento afortunado de haberte encontrado.  
    Como si entre millones de estrellas, una pequeña luz me hubiera guiñado.  
    Elegí quedarme cerca de esa luz, para verla brillar, pase lo que pase.

    El cariño por ti no necesita explicarse con palabras,  
    pero quiero que sepas lo inmenso que es mi aprecio.  

    <br><strong>Feliz 3er. Aniversario</strong>, mi Dulce Corazon de Melon. ❤🍈  
    <strong>No importa qué día sea, siempre serás mi razón para sonreír.</strong><br>  
    Con mucho <strong>cariño</strong>,  
    <br>＊*♡( ⁎ᵕᴗᵕ⁎ ） Atte. David_PiCln</br>  
    </br>  
    <code>"Eres lo mejor que me ha pasado."</code><br>  
    <strong>これからもずっと応援するよ。🌸💫</strong>
</p>

`;

let traducido = false;

btnTraducir.addEventListener('click', () => {
    if (!traducido) {
        mensaje.innerHTML = textoTraducido;
        btnTraducir.textContent = 'Traducir al japonés';
        traducido = true;
    } else {
        mensaje.innerHTML = textoOriginal;
        btnTraducir.textContent = 'スペイン語に翻訳する';
        traducido = false;
    }
});


