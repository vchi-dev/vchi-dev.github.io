$(document).ready(function() {
    // When scrolling, bring the navbar in and out of view.
    // Add blur to navbar.
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
    var darktheme = document.getElementById("dark-mode").onclick = function() {
        // Makes all the colors change.
        document.body.classList.toggle("dark-theme");

        // Change all icons from light to dark, vice versa.
        $('.material-icons').toggleClass("md-dark");
        $('.material-icons').toggleClass("md-light");

        // Changes the moon to the sun.
        var darkicon = document.getElementById("dark-mode");
        if (darkicon.innerHTML === "dark_mode") {
            darkicon.innerHTML = "light_mode";
        }
        else {
            darkicon.innerHTML = "dark_mode";
        }

        // Changes the color of the rest of the icons.
        $('.dark-icons').toggleClass("invert-color");
        $('.dark-icons-body').toggleClass("invert-color");
    }
});