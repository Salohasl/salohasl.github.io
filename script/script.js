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


const blockSkills = document.querySelector('.myСapabilities-skills');
const blockOther = document.querySelector('.myСapabilities-otherSkills');
const clickSkills = document.querySelector('.myСapabilities-basis');
const clickOther = document.querySelector('.myСapabilities-other');

clickSkills.addEventListener('click', ()=>{
  clickSkills.classList.add('active');
  blockSkills.classList.add('skillsActive');
  clickOther.classList.remove('active');
  blockOther.classList.remove('otherActive');
})
clickOther.addEventListener('click', ()=>{
  clickOther.classList.toggle('active');
  blockOther.classList.toggle('otherActive');
  clickSkills.classList.remove('active');
  blockSkills.classList.remove('skillsActive');
})