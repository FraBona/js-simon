const btnDomElement = document.querySelector('.btn-number');
const countDownDomElement = document.querySelector('.count-down');
const number = [];
const counterDomElement = document.querySelector('.counter');
const numberDomElement = document.querySelector('.number-check');

for (let i = 0; i < 5; i++){
  const n = Math.floor(Math.random() * 100);

  number.push(n);
}
console.log(number);

btnDomElement.addEventListener('click', function(){
  alert(number);

  let counter = 30;

  let idInterval = setInterval(onInterval, 1000);

  function onInterval(){
    counter--;

    if(counter === 0){
       clearInterval(idInterval);
       searchNumber();
       countDownDomElement.innerHTML = 0;
    }
    else{
      countDownDomElement.innerHTML = counter;
    }
  }
})

function searchNumber(){
  const checkNumber = [];
  let cont = 0;

  for(let i = 0; i < 5; i++){
    const n = prompt('Inserisci il numero: ');

    checkNumber.push(n);
  }
  console.log(checkNumber);

  if(number.includes(checkNumber) === false){
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){
        if(number[i] == checkNumber[j]){
          cont++;
          numberDomElement.innerHTML += ' ' + number[i];
        }
      }
    }
    counterDomElement.innerHTML = 'Hai indovinato: ' + cont + ' volte';
  }
}

/*
const checkNumber = [];
  let cont = 0;

  for(let i = 0; i < 5; i++){
    const n = prompt('Inserisci il numero: ');

    checkNumber.push(n);
  }
  console.log(checkNumber);

  if(number.includes(checkNumber) === false){
    cont++;
    console.log(cont);
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){
        if(number[i] == checkNumber[j]){
          console.log(number[i]);
        }
      }
    }
  }
*/