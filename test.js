

//find a way to get inputs
//handel if it is a number or operator for this to work we need a storage fo the initial number
//for number
//for operator
let value="0";
let previous_no = 0;
let previousopp=null;
let nooroperator="";

function init(){
    document.querySelector(".section-2").addEventListener("click", function(event){
       let temp = event.target.innerText;

       nooroperator = temp;
       handelvalue(temp);
       

    });

}

function display(final){
      val =  document.querySelector(".header");
      val.innerText = final;

}




function handelvalue(temp){

    if (isNaN(parseInt(temp))){

        handeloperator(temp);
    }
    else{
        handelnumber(temp);
    }

    display(value);

}


function handelnumber(temp){
    if (value === "0"){
        value = temp;
    }
    else{
        value += temp;
    }
}


function handeloperator(temp){
    switch (temp){

        case "=":
            if (previousopp===null || (isNaN(parseInt(nooroperator)))){
                return;
            }
            else{
                compute(parseInt(value))
                value= "" + previous_no;
                previous_no=0;
                previousopp=null;
            }

            break;

        case "C":
            value = "0";

        case "←":
            if (value.length === 1){
                value = "0";
            }
            else{
                value = value.substr(0, ( value.length -1));
            }

            break;
            case "+":
            case "-":
            case "÷":
            case "+":
            case "x":
                operation(temp);           
    }

}

function operation(opp){
    if (value === "0"){
        return;
    }

    intvalue = parseInt(value);

    if (previous_no === 0){
        previous_no = intvalue;
    }

    else{
        compute(intvalue);       
    }
    
    previousopp = opp;
    value = "0";
    
}

function compute(intvalue){

    switch (previousopp){
        case "+":
            previous_no += intvalue;
            break;
        case "-":
            previous_no -= intvalue;
            break;
        case "x":
            previous_no *= intvalue;
            break;
        case "÷":
            previous_no /= intvalue;
            break;

        default:
            value="ERROR";
        
    
    }
        
}




init();