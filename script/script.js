//Кнопка всплытия
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то  кнопка видна, иначе скрыть
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();

/* Для всплывающего окна */ 
let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('nav');
menuBtn.addEventListener('click', () =>{
menuBtn.classList.toggle('active');
menu.classList.toggle('popUp');
});



function displayBasis(){
  const blockSkills = document.querySelector('.myСapabilities-skills');
  const blockOther = document.querySelector('.myСapabilities-otherSkills');
  const clickSkills = document.querySelector('.myСapabilities-basis');
  const clickOther = document.querySelector('.myСapabilities-other');

  clickSkills.classList.add('active');
  blockSkills.classList.add('skillsActive');
  clickOther.classList.remove('active');
  blockOther.classList.remove('otherActive');
};
function displayOther(){
const blockSkills = document.querySelector('.myСapabilities-skills');
const blockOther = document.querySelector('.myСapabilities-otherSkills');
const clickSkills = document.querySelector('.myСapabilities-basis');
const clickOther = document.querySelector('.myСapabilities-other');

  clickOther.classList.toggle('active');
  blockOther.classList.toggle('otherActive');
  clickSkills.classList.remove('active');
  blockSkills.classList.remove('skillsActive');
};


/* ФУНКЦИЯ ДЛЯ ПОКАЗА БЛОКА ПРАЙС */

function priceFunc(){

/*Ссылки на элементы*/
const blockOpens = document.querySelectorAll('#block-oneOpen');
const blockCloses = document.querySelectorAll('#block-oneClose');
const showBlock = document.querySelectorAll('.show-block');

//Показ элементов
let clickOpen = (event) =>{
  if(event.target === blockOpens[0]){
    showBlock[0].classList.add('active');
    blockOpens[0].style.display = 'none';
    blockCloses[0].style.display = 'block';

    showBlock[2].classList.remove('active');
    blockOpens[2].style.display = 'block';
    blockCloses[2].style.display = 'none';

    showBlock[1].classList.remove('active');
    blockOpens[1].style.display = 'block';
    blockCloses[1].style.display = 'none';
  };
  if(event.target === blockOpens[1]){
    showBlock[0].classList.remove('active');
    blockOpens[0].style.display = 'block';
    blockCloses[0].style.display = 'none';

    showBlock[2].classList.remove('active');
    blockOpens[2].style.display = 'block';
    blockCloses[2].style.display = 'none';

    showBlock[1].classList.add('active');
    blockOpens[1].style.display = 'none';
    blockCloses[1].style.display = 'block';
  };

  if(event.target === blockOpens[2]){
    showBlock[0].classList.remove('active');
    blockOpens[0].style.display = 'block';
    blockCloses[0].style.display = 'none';

    showBlock[1].classList.remove('active');
    blockOpens[1].style.display = 'block';
    blockCloses[1].style.display = 'none';

    showBlock[2].classList.add('active');
    blockOpens[2].style.display = 'none';
    blockCloses[2].style.display = 'block';
  };
}



//Скрытие элементов
let clickClose = (event) =>{
  if(event.target === blockCloses[0]){
    showBlock[0].classList.remove('active');
    blockOpens[0].style.display = 'block';
    blockCloses[0].style.display = 'none';
  };
  if(event.target === blockCloses[1]){
    showBlock[1].classList.remove('active');
    blockOpens[1].style.display = 'block';
    blockCloses[1].style.display = 'none';
  };
  if(event.target === blockCloses[2]){
    showBlock[2].classList.remove('active');
    blockOpens[2].style.display = 'block';
    blockCloses[2].style.display = 'none';
  };
};


document.addEventListener('click', clickOpen);
document.addEventListener('click', clickClose);
}priceFunc();



//Слайдер на главной странице 
var swiper = new Swiper(".mySwiper", {
rewind: true,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});