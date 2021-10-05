let heading = document.getElementById("mainHeading");

// heading.style.color = "Red";

// heading.style.background = "Yellow";

heading.addEventListener("click", () => {
    console.log("You clicked me");
    heading.style.color = "Green";
});
