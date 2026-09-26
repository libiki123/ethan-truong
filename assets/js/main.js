document.documentElement.classList.add('js');

// Nav border once the page scrolls.
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade cards in as they enter the viewport; play card previews only while visible.
const observer = new IntersectionObserver((entries) => {
  for (const { target, isIntersecting } of entries) {
    if (target.tagName === 'VIDEO') {
      isIntersecting ? target.play().catch(() => {}) : target.pause();
    } else if (isIntersecting) {
      target.classList.add('is-visible');
      observer.unobserve(target);
    }
  }
}, { rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal, video[data-lazy]').forEach((el) => observer.observe(el));
