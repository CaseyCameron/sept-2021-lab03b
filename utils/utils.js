const soundArr = ['assets/dog.wav', 'assets/cat.wav', 'assets/horse.wav']
const randomImg = document.getElementById('random-img');
const imgArr = [
  'https://thumbs.dreamstime.com/b/happy-pet-dog-puppy-running-grass-jack-russell-background-banner-copy-space-128456559.jpg',
  'http://placekitten.com/200/300',
  'https://craft-art.com/wp-content/uploads/2020/11/horse-coloring-sheets.jpg'
]

function animationHandler(img) {
  img.classList.add('selected');
  img.addEventListener('animationend', onAnimationEnd);
}

export function animal(img, sound) {
  sound.play();
  animationHandler(img);
};

export function random() {
  const sound = Math.floor(Math.random() * 3);
  randomSound.src = soundArr[sound];
  randomSound.play();
  randomImg.src = imgArr[sound];
  animationHandler(randomImg);
};

const onAnimationEnd = (ev) => {
  ev.target.classList.remove('selected');
  randomImg.src = 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png';
};