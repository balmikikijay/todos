 const valueEl = document.getElementById('value')
 const btnDecrease = document.getElementById('decrese')
 const btnReset = document.getElementById('reset')
 const btnIncrease = document.getElementById('increase')

 let count = 0;


 function updateDisplay(){
    valueEl.textContent = count;
    if(count > 0) valueEl.style.color = 'green';
  else if(count < 0) valueEl.style.color = 'red';
    else valueEl.style.color = 'black';

 }
  btnIncrease.addEventListener('click',()=>{
    count = count +1;
    updateDisplay()
 })

 btnDecrease.addEventListener('click',()=>{
    count = count -1;
    updateDisplay()
 })
  btnReset.addEventListener('click',()=>{
    count = 0;
    updateDisplay()
 })