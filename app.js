import { animal, random } from './utils/utils.js';

const randomImg = document.getElementById('random-img');
const animalArr = [
  {
    img: document.getElementById('dog-img'),
    sound: new Audio('assets/dog.wav'),
    keypress: 'd'
  },
  {
    img: document.getElementById('cat-img'),
    sound: new Audio('assets/cat.wav'),
    keypress: 'c'
  },
  {
    img: document.getElementById('horse-img'),
    sound: new Audio('assets/horse.wav'),
    keypress: 'h'
  }];

animalArr.forEach(ele => {
  ele.img.addEventListener('click', () => {
    animal(ele.img, ele.sound)
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === ele.keypress) animal(ele.img, ele.sound);
  });
});

randomImg.addEventListener('click', () => {
  random();
});
