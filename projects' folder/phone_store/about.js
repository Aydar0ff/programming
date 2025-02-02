document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload on form submission
    document.querySelector(".feedback-form").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once in case elements are already visible
});

window.addEventListener("scroll", function () {
    let hed = document.querySelector("header");
    // if (window.scrollY > 50) {
    //     header.classList.add("shrink");
    // } else {
    //     header.classList.remove("shrink");
    // }
    let y = window.scrollY
    let hh1 = document.querySelector('.abouth');
    let pp = document.querySelector('.aboutp');
    let x = y
    let u = 100-x
    if(u<10){
        u = 10
    }
    let r = 20-x
    if(r<-70){
        r = -70
    }
    hh1.style = `
        bottom: ${u}px;
    `
    pp.style = `
        bottom: ${r}px;
    `
    if(y>80){
        y = 80
    }
    hed.style = `
        top: ${-y}px;
    `
    

});

