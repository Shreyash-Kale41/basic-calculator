const addition = document.querySelector("#addition");
addition.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#input1").value;
    const inputTwo = +document.querySelector("#input2").value;
    const result = inputOne+inputTwo;
    const output = document.querySelector("#output");
    output.value = result;
})

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#input1").value;
    const inputTwo = +document.querySelector("#input2").value;

    const output = document.querySelector("#output");
    output.value = inputOne - inputTwo;
})

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#input1").value;
    const inputTwo = +document.querySelector("#input2").value;
    const result = inputOne * inputTwo;
    const output = document.querySelector("#output");
    output.value = result;
})

const division = document.querySelector("#division");
division.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#input1").value;
    const inputTwo = +document.querySelector("#input2").value;

    const output = document.querySelector("#output");
    output.value = inputOne / inputTwo;
})