 // Small animation on scroll (optional)
    const cards = document.querySelectorAll(".certificate-card");
    window.addEventListener("scroll", () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }
      });
    });