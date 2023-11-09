// Why did I even create a JS Page again?
const registerButton = document.getElementById("register-button");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");

registerButton.addEventListener("click", function () {
    document.getElementById("scroll-3").scrollIntoView();
});

aboutButton.addEventListener("click", function () {
    document.getElementById("scroll-1").scrollIntoView();
});

contactButton.addEventListener("click", function () {
    document.getElementById("scroll-2").scrollIntoView();
});
