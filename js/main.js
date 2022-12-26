//It will execute the javascript code only if the website has loaded at 100%.
window.onload= function(){
    console.log("It works!");


    //We collect the source data (numbers to calculate)
    //We have to parseInt the value because it is a text in the inputText
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);

    console.log(n1);
    // We create the events
    var btn_add=document.getElementById("addOperation");
    var btn_substract=document.getElementById("substractOperation");

    //We add the EventListeners
    btn_add.addEventListener("click", functionAdd);
    btn_substract.addEventListener("click", functionSubstract);

    //We add the functions that calculate and write the answer
    function functionAdd(){
        console.log("ADD");
        var result=document.getElementById("result").value=n1+n2;
        console.log(result);

    }

    function functionSubstract(){
        console.log("SUBSTRACT");
        var result=document.getElementById("result").value=n1-n2;
        console.log(result);
    }


}
