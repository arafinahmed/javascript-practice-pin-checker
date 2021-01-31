function generatePin(){
    var number = Math.random().toFixed(10);
    let pin = '';
    for (let i = 2; i < 6; i++) {
        pin += number[i];
    }
    const code = document.getElementById('pin-code');
    code.value = pin;
    const notify = document.getElementsByClassName('notify');
    notify[1].style.display = 'none';
    notify[0].style.display = 'none';

}

function buttonFunction(){
    const evtValue = event.target.innerText;
    const userInput = document.getElementById('user-input');
    if(evtValue.length == 1){
        if(evtValue == 'C'){
            userInput.value = "";
        }
        else if(evtValue == '<'){
            userInput.value = userInput.value.slice(0, userInput.value.length-1);
        }
        else{
            userInput.value = userInput.value + evtValue;
        }
    }
}

function calculate(){
    const userInput = document.getElementById('user-input').value;
    const code = document.getElementById('pin-code').value;
    const notify = document.getElementsByClassName('notify');
    if(code.length == 4 && code==userInput){
        notify[1].style.display = 'block';
        notify[0].style.display = 'none';
    }
    else{
        notify[0].style.display = 'block';
        notify[1].style.display = 'none';
    }   
}