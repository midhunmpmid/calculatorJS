const display = document.getElementById("display");

function appenddisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function calculate() {
        mystring = display.value.split(/([+\-*/])/);
        console.log(mystring)
        result = 0;
        number1 = parseFloat(mystring[0]);
        number2 = parseFloat(mystring[2]);
        switch (mystring[1]) {
            case '+':
                result = number1 + number2;
                break;
        
            case '-':
                result = number1 - number2;
                break;

            case '*':
                result = number1 * number2;
                break;    

            case '/':
                result = number1 / number2;
                break;
        }
      display.value = result;
}