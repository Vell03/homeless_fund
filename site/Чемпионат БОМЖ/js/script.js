const input = document.querySelector(".summa"),
      btns = document.querySelectorAll(".button__sum");
      check = document.querySelectorAll(".check")

let a = 0,
    b = 0;

input.value = 0;

btns.forEach(element => {
    element.addEventListener(("click"), event => {
        a = parseInt(input.value),
        b = parseInt(event.target.textContent);
        input.value = "";

        input.value = `${a + b}₽`;
        console.log(input.value);
    });
});


document.getElementById("donateButton").addEventListener("click", function() {
    window.location.href = "donate.js";
});
