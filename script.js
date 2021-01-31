const generate = document.getElementsByClassName('generate-btn')[0];
generate.addEventListener('click', generatePin);
function generatePin(){
    var number = Math.random().toFixed(10);
    let pin = '';
    for (let i = 2; i < 6; i++) {
        pin += number[i];
    }
    const code = document.getElementById('pin-code');
    code.value = pin;    
}

const numberContainer = document.getElementsByClassName('cal-buttons')[0];
numberContainer.addEventListener('click', buttonFunction);
function buttonFunction(){
    const evtValue = event.target.innerText;
    const userInput = document.getElementById('user-input');

    if(evtValue.length == 1){
        if(evtValue == 'C'){
            userInput.value = "";
        }
        else{
            userInput.value = userInput.value + event.target.innerText;
        }

    }
}