// menu section logic
const navOpen = document.querySelector('.navbar-toggler');
const navClose = document.querySelector('.close-btn-wrapper');
const menuElement = document.querySelector('.menu');
const linksAction = menuElement.querySelectorAll('a');

navOpen.addEventListener('click', () => {
  menuElement.classList.remove('hidden');
  document.querySelector('body').classList.add('overflow-hidden');
});

navClose.addEventListener('click', () => {
  menuElement.classList.add('hidden');
  document.querySelector('body').classList.remove('overflow-hidden');
});

linksAction.forEach((node) => {
  node.onclick = () => {
    menuElement.classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
  };
});

// speakers Section data and logic

const cardsData = [
  {
    name: 'Ghareeb Elshaikh',
    textOne: 'programer and content Creator ',
    textTwo: 'self-tough programmer and youtube content maker.',
    imageOne: 'imgs/squares-black-white.jpg',
    imageTwo: 'imgs/ghareeb-2.jpg',
  },
  {
    name: 'Osama Mohammed',
    textOne: ' Number #1 Arabic programer and content Creator at youtube',
    textTwo: `self-tough programmer and youtube content maker he create full
      courses by his self.`,
    imageOne: 'imgs/squares-black-white.jpg',
    imageTwo: 'imgs/elzero.jpg',
  },
  {
    name: 'Ali Shahin',
    textOne: 'programer and content Creator',
    textTwo: 'self-tough programmer and youtube content maker.',
    imageOne: 'imgs/squares-black-white.jpg',
    imageTwo: 'imgs/ali.jpg',
  },
  {
    name: 'Islam Hesham',
    textOne: 'programer and content Creator',
    textTwo: 'self-tough programmer and youtube content maker.',
    imageOne: 'imgs/squares-black-white.jpg',
    imageTwo: 'imgs/islam.jpg',
  },
  {
    name: 'Mohamed Abusrea',
    textOne: 'programer and content Creator',
    textTwo: 'self-tough programmer and youtube content maker.',
    imageOne: 'imgs/squares-black-white.jpg',
    imageTwo: 'imgs/mohamed.jpg',
  },
  {
    name: 'Ahmed Abouzaid',
    textOne: `content Creator in productivity , time management and
      self-development`,
    textTwo: `most famous arabic speaker in productivity and
      self-development with more then 6m subscriber on youtube.`,
    imageOne: 'imgs/squares-black-white.jpg',
    imageTwo: 'imgs/Ahmed.jpg',
  },
];

const featureSpeakers = `
  <div class="container">
    <h1 class="section-title">Feature Speakers</h1>
    <div class="card-section-speakers d-md-flex flex-md-row flex-wrap"></div>
 `;

const featureSpeakersCard = ` <div class="card">
<div
  class="card-body text-success d-flex justify-content-between align-items-center"
>
  <div class="card-imgs">
    <img class="img-one" alt="elzero" />
    <img class="img-Two" alt="elzero" />
  </div>

  <div class="card-text-cont">
    <h3></h3>
    <p class="card-text main"></p>
    <hr />
    <p class="card-text secondary">
    </p>
  </div>
</div>
</div>`;

window.addEventListener('load', () => {
  const section = document.createElement('section');
  section.setAttribute('id', 'feature-speakers');
  section.classList.add('feature-speakers');

  section.innerHTML = featureSpeakers;
  document.querySelector('.main-program').after(section);
  document.querySelector('.card-section-speakers').innerHTML = featureSpeakersCard.repeat(6);
  //
  cardsData.forEach((projectsData, index) => {
    const Card = document.querySelector('.card-section-speakers').children[index];
    Card.querySelector('.img-one').setAttribute('src', projectsData.imageOne);
    Card.querySelector('.img-Two').setAttribute('src', projectsData.imageTwo);
    Card.querySelector('h3').textContent = projectsData.name;
    Card.querySelector('.main').textContent = projectsData.textOne;
    Card.querySelector('.secondary').textContent = projectsData.textTwo;
  });
});