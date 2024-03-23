const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=  input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    } 
    catch(error){
        display.value = "Not available";
    }
}

function appendToDisplay(input){
    let displayValue =  dispaly.value;
    let lastChar = displayValue[displayValue.length - 1]
    if(isNaN(lastChar)){
        if(input === "+"){
            display.value += input;
        } else {
            display.value += input;
        } 
    } else {
        display.value += input;
    }
}