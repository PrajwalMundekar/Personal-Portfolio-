// main.js - small interactive behaviors for the hero

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
  // Typing / rotating words
  const typedEl = document.getElementById('typed');
  const phrases = [
    'UI-focused components.',
    'Angular + TypeScript.',
    'clean, maintainable code.',
    'responsive and accessible UI.'
  ];
  let i = 0, j = 0, typing = true, current = '', pause = 900;

  function typeLoop() {
    const phrase = phrases[i];
    if (typing) {
      current = phrase.slice(0, j + 1);
      typedEl.textContent = current;
      j++;
      if (j === phrase.length) {
        typing = false;
        setTimeout(typeLoop, pause);
        return;
      }
      setTimeout(typeLoop, 60);
    } else {
      current = phrase.slice(0, j - 1);
      typedEl.textContent = current;
      j--;
      if (j === 0) {
        typing = true;
        i = (i + 1) % phrases.length;
        setTimeout(typeLoop, 140);
        return;
      }
      setTimeout(typeLoop, 40);
    }
  }
  if (typedEl) typeLoop();

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});



// Profile image popup functionality
document.addEventListener('DOMContentLoaded', function () {
  const profilePhoto = document.querySelector('.profile-photo');
  const popup = document.getElementById('profile-popup');

  if (profilePhoto && popup) {
    profilePhoto.addEventListener('click', () => {
      popup.classList.add('active');
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) popup.classList.remove('active');
    });
  }
});



//smooth scroll
// Adjust scroll position so section isn't hidden behind navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: 'smooth'
    });

    // Close mobile menu after click
    document.getElementById('navLinks').classList.remove('active');
  });
});


// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 0; // adjust as needed
    
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}


//about section
function openProject(url) {
  window.open(url, '_blank');
}



document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});







//email js mail send
// function sendMail(){
//   let params = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value
//   }

//   emailjs.send('service_8f7an4d','__ejs-test-mail-service__', params)
// }











