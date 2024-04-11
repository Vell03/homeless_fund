const input = document.querySelector(".summa"),
      btns = document.querySelectorAll(".button__sum");
      check = document.querySelectorAll(".check")

let a = 0,
    b = 0;

input.value = 0;

btns.forEach(element => {
    element.addEventListener(("click"), event => {
        b = parseInt(event.target.textContent);
        input.value = "";

        input.value = `${b}`;
        console.log(input.value);
    });
});


document.getElementById("donateButton").addEventListener("click", function() {
    window.location.href = "donate.js";
});
