
const scrollToTopElement = document.getElementById('scroll-to-top');
scrollToTopElement.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
