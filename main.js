const doc = document;

const input = doc.querySelectorAll('input');
const li = doc.querySelectorAll('li');


const divTextEnd = doc.querySelector('.div__text--end');
const selectedRating = doc.createElement('div');


selectedRating.classList.add('selected__rating');

function selecionOpcion (){
  for(let i = 0; i < li.length; i++){
    let valor = i + 1;
    li[i].addEventListener('click', () => {
      selectedRating.innerHTML = `You selected ${valor} out of 5`;
    })

    li[i].addEventListener('click', () => {
        li[i].classList.toggle('selected__input')
      
    })
 
 
    divTextEnd.insertAdjacentElement('afterbegin', selectedRating)
}

}

selecionOpcion();

const btn = doc.querySelector('.btn');

const divRatingStateStart = doc.querySelector('.rating__state--start')
const divRatingStateEnd = doc.querySelector('.rating__state--end')
btn.addEventListener('click', () => {
  if(!divRatingStateStart.classList.contains('active')){
    divRatingStateStart.classList.add('active')
    divRatingStateEnd.classList.remove('active')
  }
})