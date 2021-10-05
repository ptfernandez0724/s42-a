getInput = () => {
    let input1 = document.querySelector("#input1").value;
    console.log(input1)
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", getInput)