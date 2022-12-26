//It will execute the javascript code only if the website has loaded at 100%.
window.onload = function () {
  console.log("It works!");

  //We collect the source data (numbers to calculate)
  //We have to parseInt the value because it is a text in the inputText

  let n1 = document.getElementById("n1");
  let n2 = document.getElementById("n2");
  let result = document.getElementById("result");

  // We create the events
  let btn_add = document.getElementById("addOperation");
  let btn_substract = document.getElementById("substractOperation");

  //We add the EventListeners
  btn_add.addEventListener("click", functionAdd);
  btn_substract.addEventListener("click", functionSubstract);

  //We add the functions that calculate and write the answer
  function functionAdd() {
    result.value = Number(n1.value) + Number(n2.value);
    console.log(result.value);
  }

  function functionSubstract() {
    result.value = Number(n1.value) - Number(n2.value);
    console.log(result.value);
  }
};
