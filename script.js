document.addEventListener('DOMContentLoaded', function() {

  /* ---------------- COVER SCREEN LOGIC ---------------- */

  const cover = document.getElementById('cover');
  const enterBtn = document.getElementById('enterBtn');
  const mainContent = document.getElementById('mainContent');

  enterBtn.addEventListener('click', () => {
    cover.style.display = "none";
    mainContent.classList.remove('blurred');
  });

  /* ---------------- REST OF YOUR ORIGINAL CODE ---------------- */

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');
  const confettiContainer = document.getElementById('confettiContainer');
  const heartsContainer = document.getElementById('heartsContainer');

  yesBtn.addEventListener('click', function() {
    yesBtn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.15)' },
      { transform: 'scale(1)' }
    ], { duration: 400, easing: 'ease-out' });

    createConfetti();
    createFloatingHearts();

    setTimeout(function() {
      popup.classList.add('active');
    }, 800);

    setTimeout(function() {
      confettiContainer.innerHTML = '';
      heartsContainer.innerHTML = '';
    }, 4000);
  });

  noBtn.addEventListener('click', function() {
    const offsetX = (Math.random() - 0.5) * 120;
    const offsetY = (Math.random() - 0.5) * 40;
    
    noBtn.animate([
      { transform: 'translate(0px, 0px)' },
      { transform: `translate(${offsetX}px, ${offsetY}px)` },
      { transform: 'translate(0px, 0px)' }
    ], { duration: 450, easing: 'ease-out' });
  });

  closePopup.addEventListener('click', function() {
    popup.classList.remove('active');
  });

  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });

  function createConfetti() {
    const colors = ['#60a5fa', '#3b82f6', '#93c5fd', '#bfdbfe', '#2563eb', '#f472b6', '#fb7185'];
    
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      
      const size = 6 + Math.random() * 8;
      const left = Math.random() * 100;
      const delay = Math.random() * 0.5;
      const duration = 2 + Math.random() * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const isCircle = Math.random() > 0.5;
      
      piece.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: ${isCircle ? '50%' : '2px'};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      
      confettiContainer.appendChild(piece);
    }
  }

  function createFloatingHearts() {
    for (let i = 0; i < 12; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      
      const size = 16 + Math.random() * 20;
      const left = 10 + Math.random() * 80;
      const delay = Math.random() * 1;
      const duration = 2 + Math.random() * 1.5;
      
      heart.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: ${size}px; height: ${size}px;">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>`;
      
      heart.style.cssText = `
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      
      heartsContainer.appendChild(heart);
    }
  }
});
