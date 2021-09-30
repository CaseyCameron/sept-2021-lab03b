import { dog, cat, horse, random, onAnimationEnd } from './utils/utils.js';

const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');
const horseImg = document.getElementById('horse-img');
const randomImg = document.getElementById('random-img');

document.addEventListener('keyup', (event) => {
  if (event.key === 'd') dog();
  if (event.key === 'c') cat();
  if (event.key === 'h') horse();
  if (event.key === 'r') random();
});

dogImg.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.id === 'dog-img') dog();
});

catImg.addEventListener('click', () => {
  cat();
});

horseImg.addEventListener('click', () => {
  horse();
});

randomImg.addEventListener('click', () => {
  random();
});

