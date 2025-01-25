document.addEventListener('DOMContentLoaded', () => {
  // Redirect all links to Rick Roll
  const rickRollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = rickRollUrl;
    });
  });

  // GSAP Animations
  gsap.from('.hero h2', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power3.out'
  });

  gsap.from('.feature', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Interactive Background
  const background = document.querySelector('.background');
  background.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    background.style.background = `
      radial-gradient(
        circle at ${x * 100}% ${y * 100}%, 
        #E3F2FD, 
        #BBDEFB
      )
    `;
  });
});