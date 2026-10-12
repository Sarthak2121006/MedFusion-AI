export function initLandingInteractions() {
  const moduleCards = document.querySelectorAll('.module-card');
  const stepCards = document.querySelectorAll('.step-card');
  const fusionInputs = document.querySelectorAll('.fusion-input');
  const featureCards = document.querySelectorAll('.feature-card');

  moduleCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.08}s`;
    card.classList.add('animate-in');
    card.addEventListener('click', () => {
      card.style.transform = 'scale(1.03)';
      setTimeout(() => { card.style.transform = ''; }, 200);
    });
  });

  stepCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('animate-in');
    card.addEventListener('mouseenter', () => {
      card.querySelector('span').style.color = '#115e59';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('span').style.color = '';
    });
  });

  fusionInputs.forEach((chip, index) => {
    chip.style.animationDelay = `${index * 0.06}s`;
    chip.classList.add('animate-in');
    chip.addEventListener('click', () => {
      chip.style.transform = 'translateY(-2px)';
      chip.style.borderColor = '#0f766e';
      chip.style.background = '#ecfdf5';
      setTimeout(() => {
        chip.style.transform = '';
        chip.style.borderColor = '';
        chip.style.background = '';
      }, 600);
    });
  });

  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.08}s`;
    card.classList.add('animate-in');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ai-pulse');
        setTimeout(() => entry.target.classList.remove('ai-pulse'), 2000);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.step-card, .module-card').forEach(el => observer.observe(el));

  const heroHeading = document.querySelector('h1');
  if (heroHeading && !heroHeading.dataset.typed) {
    heroHeading.dataset.typed = 'true';
    const originalHTML = heroHeading.innerHTML;
    const textOnly = heroHeading.textContent;
    heroHeading.innerHTML = '';
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < textOnly.length) {
        heroHeading.textContent = textOnly.slice(0, i + 1);
        i++;
      } else {
        clearInterval(typeInterval);
        heroHeading.innerHTML = originalHTML;
        heroHeading.classList.add('typing-cursor');
        setTimeout(() => heroHeading.classList.remove('typing-cursor'), 1500);
      }
    }, 35);
  }
}
