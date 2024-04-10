document.addEventListener('DOMContentLoaded', function() {
    const sec1 = document.querySelector(".first"),
          sec2 = document.querySelector(".second"),
          navBar = document.querySelector(".navi-open"),
          btn = document.querySelector(".navi");

    if (btn) {
    btn.addEventListener("click", event => {
        if (getComputedStyle(navBar).display === "none") {
            navBar.style.display = "flex";
            navBar.animate([
                { opacity: "0" },
                { top: "1" }
            ], 100);
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            btn.style.opacity = "1"
        } 
        else if (getComputedStyle(navBar).display === "flex") {
            navBar.style.display = "none";
            navBar.animate([
                { opacity: "1" },
                { top: "0" }
            ], 100);
            document.body.style.position = '';
            document.body.style.top = '';
            btn.style.opacity = ".5"
        }

        console.log(navBar.style.display);
    });
}

    if (sec1) {
        sec1.addEventListener("click", event => {
            navBar.style.display = "none";
            console.log('2')
        });
    }

    if (sec2) {
        sec2.addEventListener("click", event => {
            navBar.style.display = "none";
            console.log("3")
        });
    }
});


