document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");
    const navLinks = document.querySelectorAll(".nav-btn");

    function loadPage(pageName) {
        contentDiv.innerHTML = '<div class="loader">Loading...</div>';
        
        fetch("pages/" + pageName + ".html")
            .then(function(response) {
                return response.text();
            })
            .then(function(htmlText) {
                contentDiv.innerHTML = htmlText;
            })
            .catch(function() {
                contentDiv.innerHTML = '<div class="error">Error loading data.</div>';
            });
    }

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            navLinks.forEach(function(btn) {
                btn.classList.remove("active");
            });
            link.classList.add("active");

            const page = link.getAttribute("href");
            loadPage(page);
        });
    });

    loadPage("rav4");
});