document.addEventListener('DOMContentLoaded', (event) => {
    let projectsButton = document.getElementById("projectsButton");
    projectsButton.addEventListener("click", () => {
        window.location.href = "projectsPage.html";
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let aboutButton = document.getElementById("homePage");
    aboutButton.addEventListener("click", () => {
        window.location.href = "mainPage.html";
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let contactButton = document.getElementById("contactButton");
    contactButton.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
});