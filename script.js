// Smooth interactive glow following the mouse over cards
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    card.style.setProperty('--mx', `${mouseX}px`);
    card.style.setProperty('--my', `${mouseY}px`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
});

// Ensure image links open in a new tab with rel security
document.querySelectorAll('.card-image-link').forEach((link) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});


