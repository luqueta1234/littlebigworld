window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.remove('transparent');
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
      navbar.classList.add('transparent');
    }
  });
  