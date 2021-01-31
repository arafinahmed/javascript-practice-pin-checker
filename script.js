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