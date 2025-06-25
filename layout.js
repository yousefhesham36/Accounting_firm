// layout.js
window.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header");
    const footerContainer = document.getElementById("footer");

    if (headerContainer) {
        fetch("../header/header.html")
            .then((res) => res.text())
            .then((data) => {
                headerContainer.innerHTML = data;

                const currentPage = window.location.pathname.split("/").pop();
                const navlinks = document.querySelectorAll(".nav-link");

                navlinks.forEach(function (link) {
                    const linkPage = link.getAttribute("href");
                    if (linkPage === currentPage) {
                        link.classList.add("active")
                    } else {
                        link.classList.remove("active")
                    }
                })


            });
    }

    if (footerContainer) {
        fetch("../footer/footer.html")
            .then((res) => res.text())
            .then((data) => {
                footerContainer.innerHTML = data;
            });
    }
});
