const dogSound = document.getElementById('dogSound');
const catSound = document.getElementById('catSound');
const horseSound = document.getElementById('horseSound');

dogButton.addEventListener('click', () => {
  dogSound.play();
});

catButton.addEventListener('click', () => {
  catSound.play();
});

horseButton.addEventListener('click', () => {
  horseSound.play();
});
