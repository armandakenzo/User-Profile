const Heart = document.getElementById('hati');
Heart.addEventListener('click', () => {
  Heart.classList.toggle('bi-heart');
  if (Heart.classList == 'bi-heart-fill') {
    Heart.style.color = 'red';
  } else {
    Heart.style.color = 'red';
  }
});
