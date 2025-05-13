document.addEventListener("DOMContentLoaded", function () {

var footerBar = `

<footer>
        <div class="logo-footer">
            <img src="Images/Teacher Akhtar(1).png" alt="logo-image">
            <p class="logo-text">
                Som privatlærer tilbyr jeg skreddersydd undervisning tilpasset elevens individuelle behov og læringsstil. Målet mitt er å hjelpe eleven med å forstå vanskelige fagområder, forbedre faglige ferdigheter, og oppnå bedre resultater. 
            </p>
        </div>
        <div class="our-services">
            <h3>
                Mine tjenester
            </h3>

            <ul class="service-items">
                <li>
                    <a href="">
                        Matematikk
                    </a>
                </li>
                <li>
                    <a href="">
                        Rettslære
                    </a>
                </li>
                <li>
                    <a href="">
                        Økonomi

                    </a>
                </li>
                <li>
                    
                </li>
            </ul>
        </div>

        <div class="footer-button rounded hover:bg-blue-500">
                <a href="contact.html" class="footer-button">
                    Kontakt meg 
                </a>
           
        </div>

        <div class="copyright">
            <p>
                Copyright &copy; 2024
            </p>
        </div>
      
    </footer>`

    document.body.insertAdjacentHTML("beforeend", footerBar);
    // inserting footer in end of body

});