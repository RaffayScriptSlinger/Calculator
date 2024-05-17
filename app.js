const display=document.getElementById("resultBox");
const display1=document.getElementById("display1");
function  calcutaorFunction(input){
    display.value += input;
}
function clear(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        
    }
    catch(error){
        display.value= "error"
    }
    display1.value=display.value;



}

// single Delete Function

function deleteFunctionSingle(){
    display.value = display.value.slice(0 , display.value.length - 1);
}

// Delete All Function 

function deleteAllValues(){
    display.value = ""
}


    
