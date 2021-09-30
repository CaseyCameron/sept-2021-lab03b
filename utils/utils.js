//refactor this...

const dogSound = new Audio('assets/dog.wav');
const dogImg = document.getElementById('dog-img');

const catSound = new Audio('assets/cat.wav');
const catImg = document.getElementById('cat-img');

const horseSound = new Audio('assets/horse.wav');
const horseImg = document.getElementById('horse-img');

const soundArr = ['assets/dog.wav', 'assets/cat.wav', 'assets/horse.wav']
const randomImg = document.getElementById('random-img');
const imgArr = [
  'https://thumbs.dreamstime.com/b/happy-pet-dog-puppy-running-grass-jack-russell-background-banner-copy-space-128456559.jpg',
  'http://placekitten.com/200/300',
  'https://craft-art.com/wp-content/uploads/2020/11/horse-coloring-sheets.jpg'
]

export function dog() {
  dogSound.play();
  dogImg.style.transform = 'rotate(360deg)';
  dogImg.style.transition = '1s ease';
  setInterval(() => {
    dogImg.style.transform = '';
    dogImg.style.transition = '';
  }, 1000);
};

export function cat() {
  catSound.play();
  catImg.style.transform = 'rotate(360deg)';
  catImg.style.transition = '1s ease';
  setInterval(() => {
    catImg.style.transform = '';
    catImg.style.transition = '';
  }, 1000);
};

export function horse() {
  horseSound.play();
  horseImg.style.transform = 'rotate(360deg)';
  horseImg.style.transition = '1s ease';
  setInterval(() => {
    horseImg.style.transform = '';
    horseImg.style.transition = '';
  }, 1000);
};

export function random() {
  const sound = Math.floor(Math.random() * 3);
  randomSound.src = soundArr[sound];
  randomSound.play();
  randomImg.src = imgArr[sound];

  randomImg.style.transform = 'rotate(360deg)';
  randomImg.style.transition = '1s ease';

  setInterval(() => {
    randomImg.style.transform = '';
    randomImg.style.transition = '';
    randomImg.src = 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png';
  }, 1500);
};
