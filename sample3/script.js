let btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", () => {
    let userInput = prompt("Enter Email");

    document.getElementById("output").innerHTML = userInput;
})