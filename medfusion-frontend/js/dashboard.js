export function initDashboardInteractions() {
  const summaryCards = document.querySelectorAll('.grid > .card-shadow');
  const actionButtons = document.querySelectorAll('[href^="new-analysis"], [href^="history"], [href^="results"], [href^="profile"]');
  const insightButton = document.querySelector('button:contains("Schedule Reminder")');
  
  summaryCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.08}s`;
    card.classList.add('animate-in');
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = '0px 8px 30px rgba(30, 41, 59, 0.08)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });

  document.querySelectorAll('.group').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.06}s`;
    el.classList.add('animate-in');
  });

  document.querySelectorAll('.timeline-item, [class*="bg-surface-container-low"]').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.classList.add('animate-in');
  });
}
