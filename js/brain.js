const typingAnimationElement = document.getElementById("typing-animation");

const typingTexts = [
  "Full Stack Java Developer",
  "Problem Solver",
  "Tech Enthusiast"
];

let currentTextIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < typingTexts[currentTextIndex].length) {
    typingAnimationElement.textContent += typingTexts[currentTextIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingAnimationElement.textContent = typingTexts[currentTextIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
