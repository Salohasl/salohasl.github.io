//Слайдер на главной странице 
var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
  
//ВЫВОД НАВЫКОВ
function dispKnow(){
  const myСapabilities = document.getElementById('myСapabilities-click');
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 1220){
      myСapabilities.style.display = 'block';
    };
  });
  myСapabilities.addEventListener('click', event =>{
    let ev = event.target.id;
    if(ev == 'basisBtn'){
      document.getElementById('myСapabilities-skills').style.display = 'block';
    }else if(ev == 'otherBtn'){
      document.getElementById('myСapabilities-otherSkills').style.display = 'block';
    };
  })
}dispKnow();