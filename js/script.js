let navItems = document.querySelectorAll('li a');

navItems.forEach(navItem => {
  navItem.addEventListener('click', e => {
    document.querySelector('li a.active').classList.remove('active');
    e.target.classList.add('active');
  });
});