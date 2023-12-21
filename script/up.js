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