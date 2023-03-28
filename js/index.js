//function for closing modal by hiding it
function closeModal() {
    modalBackground.classList.add("hidden");
    modal.classList.add("hidden");
    //if these have the hidden class, we remove them (modals that need them set them to hidden, for modals that dont need them, everytime one modal is closed, they are unhidden)
    if (modalRepoSpan.classList.contains("hidden")) {
        modalRepoSpan.classList.remove("hidden");
    }
    if (modalDeploySpan.classList.contains("hidden")) {
        modalDeploySpan.classList.remove("hidden");
    }
    if (!modalForm.classList.contains("hidden")) {
        modalForm.classList.add("hidden");
    }
    if (!formSubmitBttn.classList.contains("hidden")) {
        formSubmitBttn.classList.add("hidden");
    }
    //.modal changed to text align center if it isn't already
    if (document.querySelector(".modal-desc").parentElement.parentElement.parentElement.classList.contains("modal-left")) {
        document.querySelector(".modal-desc").parentElement.parentElement.parentElement.classList.remove("modal-left")
    }
}
//function for opening a modal by un-hiding it
function openModal() {
    modalBackground.classList.remove("hidden");
    modal.classList.remove("hidden");
}
//function to change the repo link to the link input
function setRepoLink(link, linkElement) {
    //repo link redirects to this repo
    linkElement.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href=link;
    })
}
//function to change the deployment link to the link input
function setDeployLink(link, linkElement) {
    //deploy link links to this deployment
    linkElement.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href=link;
    })
}
//these are the parts of the modal description mentioning a repo or a deployed app
//we set their class to hidden when a modal not relating to a project is opened
const modalRepoSpan = document.getElementById("modal-desc-repo");
const modalDeploySpan = document.getElementById("modal-desc-deploy");
//form version of the above
const modalForm = document.getElementById("modal-form");
const formSubmitBttn = document.getElementById("form-button");



//when the icon on the navbar is clicked, it behaves as a home button
document.getElementById("navbar-icon").addEventListener("click", () => {
    document.location.replace("");
})


//when the modal exit button is clicked, the modal is exited by being hidden
const modal = document.querySelector(".modal")
const modalBackground = document.querySelector(".modal-background");
const modalButton = document.querySelector(".modal-button");
modalButton.addEventListener("click", () => {
    closeModal();
});
//when the modal background is clicked (someone clicks outside of the modal), the modal is also closed
modalBackground.addEventListener("click", () => {
    closeModal();
})


//when the main card is clicked, the user is sent to the link
const heroCard = document.querySelector(".hero-card");
heroCard.addEventListener("click", () => {
    window.location.href = 'https://www.linkedin.com/in/james-arenella-113bab172/';
})


//when any project card is clicked, its modal is opened
const allProjectButtons = document.getElementById("other-cards");
allProjectButtons.addEventListener("click", (element) => {
    const targetElement = element.target;
    //if any part of the card is clicked, whether the card or any of its children elements,
    //the card's id is saved
    let cardClicked;
    if (targetElement.getAttribute('id') == "card1" || targetElement.getAttribute('id') == "card2" || targetElement.getAttribute('id') == "card3" || targetElement.getAttribute('id') == "card4") {
        cardClicked = targetElement.getAttribute('id');
    }
    else if (targetElement.parentElement.getAttribute('id') == "card1" || targetElement.parentElement.getAttribute('id') == "card2" || targetElement.parentElement.getAttribute('id') == "card3" || targetElement.parentElement.getAttribute('id') == "card4") {
        cardClicked = targetElement.parentElement.getAttribute('id')
    }
    else if (targetElement.parentElement.parentElement.getAttribute('id') == "card1" || targetElement.parentElement.parentElement.getAttribute('id') == "card2" || targetElement.parentElement.parentElement.getAttribute('id') == "card3" || targetElement.parentElement.parentElement.getAttribute('id') == "card4") {
        cardClicked = targetElement.parentElement.parentElement.getAttribute('id');
    }

    const modalTitle = document.querySelector(".modal-title");
    const modalDesc = document.querySelector(".modal-desc");
    const modalImage = document.querySelector(".modal-img");
    const repoLink = document.querySelector(".repo-link");
    const deployLink = document.querySelector(".deploy-link");

    if (cardClicked) {
        if (cardClicked == "card1") {
            modalTitle.innerHTML = "GitHelpNOW"
            modalDesc.innerHTML = "A joint effort project made with the under-utilization of NPO APIs in mind. We successfully designed a frontend application for  users to find local shelters, and more, based on their location, while also providing various non-profits' info for others to donate to.\nBuilt with HTML, Bulma, and JavaScript, as well as Every.Org and Google Maps APIs."
            modalImage.src = "https://raw.githubusercontent.com/Renatatims/GitHelpNOW/main/assets/logo/GitHelpNOW!LOGO.ico"
            setRepoLink("https://github.com/Renatatims/GitHelpNOW", repoLink);
            setDeployLink("https://renatatims.github.io/GitHelpNOW/", deployLink);
        }
        else if (cardClicked == "card2") {
            modalTitle.innerHTML = "Philanthro-Me"
            modalDesc.innerHTML = "An in-progress fullstack jointly developed application. This project aims to help users find NPOs, seamlessly add them to a cart, set the amount they'd like to donate to each one, and then conveniently checkout all at once. No hastle of putting your information in multiple times for more than one organization.\nBuilt with MERN Stack, TailwindCSS, and Graphql."
            modalImage.src = "https://github.com/jarenella/philanthro-me/raw/main/client/src/assets/Capture1.PNG"
            setRepoLink("https://github.com/jarenella/philanthro-me", repoLink);
            setDeployLink("https://philanthro-me.herokuapp.com/", deployLink);
        }
        else if (cardClicked == "card3") {
            modalTitle.innerHTML = "Weather Tracker"
            modalDesc.innerHTML = "A frontend application to add and save cities to your list which you'd like to be able to see the most recent weather updates from, all styled conveniently alongside one another.\nBuilt with HTML, CSS, JavaScript, and the OpenWeatherMap API."
            modalImage.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
            setRepoLink("https://github.com/jarenella/weather-tracker", repoLink);
            setDeployLink("https://jarenella.github.io/weather-tracker/", deployLink);
        }
        else if (cardClicked == "card4") {
            modalTitle.innerHTML = "Readme Gen"
            modalDesc.innerHTML = "A backend application allowing users to generate a readme file for any projects. No more painstakingly writing markdown yourself! This application gives you a series of prompts and makes the readme for you.\nBuilt with JavaScript, NodeJS, the Node File System library, & Inquirer package."
            modalImage.src = "https://super-monitoring.com/blog/wp-content/uploads/2022/01/readme.png.webp"
            setRepoLink("https://github.com/jarenella/readme-generator", repoLink);
            if (!modalDeploySpan.classList.contains("hidden")) { //this one doesn't have a deployment so we just hide that span
                modalDeploySpan.classList.add("hidden");
            }
        }
        openModal();
    }
})


//when any about card is clicked, its modal is opened
const allAboutButtons = document.getElementById("about-cards");
allAboutButtons.addEventListener("click", (element) => {
    const targetElement = element.target;
    let cardClicked;
    if (targetElement.getAttribute('id') == "bio-card" || targetElement.getAttribute('id') == "info-card") {
        cardClicked = targetElement.getAttribute('id');
    }
    else if (targetElement.parentElement.getAttribute('id') == "bio-card" || targetElement.parentElement.getAttribute('id') == "info-card") {
        cardClicked = targetElement.parentElement.getAttribute('id')
    }
    else if (targetElement.parentElement.parentElement.getAttribute('id') == "bio-card" || targetElement.parentElement.parentElement.getAttribute('id') == "info-card") {
        cardClicked = targetElement.parentElement.parentElement.getAttribute('id');
    }

    const modalTitle = document.querySelector(".modal-title");
    const modalDesc = document.querySelector(".modal-desc");
    const modalImage = document.querySelector(".modal-img");

    //if these dont have the hidden class already, we add them
    if (!modalRepoSpan.classList.contains("hidden") && !modalDeploySpan.classList.contains("hidden")) {
        modalRepoSpan.classList.add("hidden");
        modalDeploySpan.classList.add("hidden");
    }

    if (cardClicked) {
        if (cardClicked == "bio-card") {
            modalTitle.innerHTML = "Bio"
            modalDesc.innerHTML = "Full Stack Web Developer with a background in Communications and a long history of team-building. Always eager to learn more. Using problem solving skills to express creative passions. Clear focus on attention to detail and solving problems. I'm always looking for new projects and new ways to challenge myself, so please don't hesitate to reach out!"
            modalImage.src = "https://cdn-icons-png.flaticon.com/512/3986/3986035.png"
        }
        else if (cardClicked == "info-card") {
            modalTitle.innerHTML = "Proficiencies:"
            //.modal changed to text align left if it isn't already
            if (!modalDesc.parentElement.parentElement.parentElement.classList.contains("modal-left")) {
                modalDesc.parentElement.parentElement.parentElement.classList.add("modal-left")
            }
            modalDesc.innerHTML = '<ul> <li>HTML</li> <li>CSS</li> <li>JavaScript (front + backend)</li> <li>NodeJS</li> <li>LUA</li> <li>TailwindCSS + Bootstrap</li> <li>React</li> <li>MySQL</li> <li>MongoDB</li> <li>Rest APIs + MERN Stack</li> </ul>'
            modalImage.src = "https://cdn-icons-png.flaticon.com/512/3000/3000777.png"
        }
        openModal();
    }
})


//when any contact card is clicked, its modal is opened
const allContactButtons = document.getElementById("contact-cards"); //right now there is only one, but more cards may be added
allContactButtons.addEventListener("click", (element) => {
    const targetElement = element.target;
    let cardClicked;
    if (targetElement.getAttribute('id') == "contact-card") {
        cardClicked = targetElement.getAttribute('id');
    }
    else if (targetElement.parentElement.getAttribute('id') == "contact-card") {
        cardClicked = targetElement.parentElement.getAttribute('id')
    }
    else if (targetElement.parentElement.parentElement.getAttribute('id') == "contact-card") {
        cardClicked = targetElement.parentElement.parentElement.getAttribute('id');
    }

    const modalTitle = document.querySelector(".modal-title");
    const modalDesc = document.querySelector(".modal-desc");
    const modalImage = document.querySelector(".modal-img");

    //if these dont have the hidden class already, we add them
    if (!modalRepoSpan.classList.contains("hidden") && !modalDeploySpan.classList.contains("hidden")) {
        modalRepoSpan.classList.add("hidden");
        modalDeploySpan.classList.add("hidden");
    }

    if (cardClicked) {
        if (cardClicked == "contact-card") {
            modalTitle.innerHTML = "Inquiries:"
            modalDesc.innerHTML = "ijarenella@gmail.com"
            modalImage.src = "https://cdn-icons-png.flaticon.com/512/552/552486.png"
            if (modalForm.classList.contains("hidden")) {
                modalForm.classList.remove("hidden");
            }
            if (formSubmitBttn.classList.contains("hidden")) {
                formSubmitBttn.classList.remove("hidden");
            }
        }
        openModal();
    }
})