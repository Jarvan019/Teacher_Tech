const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    const announcement = button.closest('.announcement');
    announcement.classList.toggle('expanded');
  });
});
