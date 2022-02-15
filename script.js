function generateRandomNumber(){
 const random = Math.round(Math.random()*10000);
 const randomNumberText = random+'';
 if(randomNumberText.length==4){
    return random;
 }
 else{
     return generateRandomNumber();
 }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const randomNumber= generateRandomNumber();
    document.getElementById('form-pin').value=randomNumber;   
})

document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;

   const calcField = document.getElementById('typed-numbers');
   if(isNaN(number)){
        if(number=='C'){
            calcField.value='';
        }
   }
   else{
    const previousNumber = calcField.value;
    const newNumber = previousNumber+number;
    calcField.value = newNumber;
   }
})


document.getElementById('submit-button').addEventListener('click', function(){
    const calcField=document.getElementById('typed-numbers').value;
    const pin = document.getElementById('form-pin').value;
    const pinMatch=document.getElementById('pin-match');
    const pinDenied= document.getElementById('pin-denied');
    if(calcField == pin){
        pinMatch.style.display = 'block';
        pinDenied.style.display = 'none';
    }
    else{
        pinDenied.style.display = 'block';
        pinMatch.style.display = 'none';  
    }
})
