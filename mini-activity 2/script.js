let items = document.querySelectorAll(".colorMe");

// console.log(items)

// const changeColor = () => {
//     alert('working')
// }

// you can either use "const" or "let" in the for of statement
for(let item of items){
    console.log(item)
    item.addEventListener("click", changeColor = () => {
        let userInput = prompt("Enter color")
        item.style.background = userInput;
        item.innerHTML = userInput;
    })
}