document.addEventListener("DOMContentLoaded", function () {

var navBar = ` 
<nav class="md:grid-cols-2 bg-blue-950 text-white">

            <div class="logo">
                    <img src="Images/Teacher Akhtar(1).png" width="200px" height="250px">
            </div>

            <div class="nav-items">
                <a href="index.html">Hjem</a>
                <a href="How.html">Hvordan fungerer det?</a>
                <a href="contact.html">Kontakt</a>
            </div>
        </nav>`;

document.body.insertAdjacentHTML("afterbegin", navBar);

});

window.addEventListener('DOMContentLoaded', function () {
    // Wait for nav.js to inject the navbar
    setTimeout(function () {
        const navbar = document.querySelector('nav');
        const spacer = document.getElementById('navbar-spacer');
        if (navbar && spacer) {
            spacer.style.height = navbar.offsetHeight + 'px';
        }
    }, 100); // Adjust delay if needed for nav.js
});