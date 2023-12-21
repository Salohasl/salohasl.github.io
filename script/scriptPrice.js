/* ФУНКЦИЯ ДЛЯ ПОКАЗА БЛОКА ПРАЙС */

function priceFunc(){
    const blockOpen = document.querySelector('#block-oneOpen');
    const blocktwoOpen = document.querySelector('#block-twoOpen');
    const blockthreeOpen = document.querySelector('#block-threeOpen');
    const showBlockLeft = document.querySelector('.show-block_left');
    const showBlockCenter = document.querySelector('.show-block_center');
    const showBlockRight = document.querySelector('.show-block_right');
    
    blockOpen.addEventListener('click', ()=>{
        showBlockLeft.classList.toggle('active');
        if(!(showBlockLeft.style.display == 'none')){
            showBlockCenter.classList.remove('active');
            showBlockRight.classList.remove('active');
        }
    });
    blocktwoOpen.addEventListener('click', ()=>{
        showBlockCenter.classList.toggle('active');
        if(!(showBlockCenter.style.display == 'none')){
            showBlockLeft.classList.remove('active');
            showBlockRight.classList.remove('active');
        }
    });
    blockthreeOpen.addEventListener('click', ()=>{
        showBlockRight.classList.toggle('active');
        if(!(showBlockRight.style.display == 'none')){
            showBlockLeft.classList.remove('active');
            showBlockCenter.classList.remove('active');
        }
    });
}priceFunc();