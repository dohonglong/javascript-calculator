let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn_2');
let clear = document.querySelector('.btn_red');
let clear_element = document.querySelector('.btn_red_2');

//Retrieve data from numbers clicked
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        display.value += value;
    })
});

//Evaluate
equal.addEventListener('click',function(e){
    let operators = display.value.charAt(display.value.length-1);
    if (display.value==="" || operators==="+" || operators==="-" || operators==="*" || operators==="/" || operators==="%" || operators===".") {
        display.value = 'Error';
    } else {
        let result = eval(display.value);
        display.value = result;                    
    }
});

//Clear the whole equation
clear.addEventListener('click',function(e){
    display.value = '';
});

//Clear one element
clear_element.addEventListener('click',function(e){
    let result = display.value.substr(0, display.value.length - 2);
    display.value = result;
});