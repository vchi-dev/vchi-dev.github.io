// When scrolling, bring the navbar in and out of view.
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 25) {
            $('.navbar').addClass("sticky");
            $('.navbar').addClass("blur");
        }
        else {
            $('.navbar').removeClass("sticky");
            $('.navbar').removeClass("blur");
        }
    })
    // Typing animation
    var typed = new Typed(".type", {
        strings: ["Developer", "Software Engineer", "Designer", "Student", "Programmer", "Hacker", "Gamer"],
        typeSpeed: 100,
        backSpeed: 75,
        loop: true,
        shuffle: true
    });
    // Dark and Light theme
    var dark_light = document.getElementById("dark_light").onclick = function() {
        document.body.classList.toggle("dark-theme");
        $('#dark_light').toggleClass("invert-color");
        $('.dark-icons').toggleClass("invert-color");
        $('.dark-icons-body').toggleClass("invert-color");
    }
});