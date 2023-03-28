//wake up the server email on page load in case user wants to send an email
const wakeUp = () => {
    fetch("https://Emailer.coffeebeen.repl.co/wakeup", {
    method: "GET"
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}
wakeUp();


//---------------------------------------------------------------------------------------------------------------


const form = document.getElementById("modal-form");
const submitButton = document.getElementById("form-button");
const closePopUp = document.getElementById("popup-close-btn");
const popUpMessage = document.getElementById("popup-msg");
const background = document.querySelector(".form-message");
// require('dotenv').config()

const sendMail = async (email, message) => {
    // var link = "mailto:ijarenella@gmail.com"
    //          + "?cc=jamesa122333@gmail.com"
    //          + "&subject=" + encodeURIComponent("This is my subject")
    //          + "&body=" + encodeURIComponent(document.getElementById('message').value)
    // ;
    // window.location.href = link;
    fetch(`https://Emailer.coffeebeen.repl.co/send/QM!3nY{1]_&)mBI+`, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: `${email}`,
            message: `${message}`,
            receiverEmail: "ijarenella@gmail.com"
        })
    }).then((response) => response)
    .then((data) => {
        console.log(data.status)
        if (data.status != 200) {
            showMessage("err");
        } else {
            showMessage("success");
        }
    })
}

//function that triggers a small pop up telling a user the message API call's status
function showMessage(status) {
    if (document.getElementById("done-message").classList.contains("hidden")) {
        document.getElementById("done-message").classList.remove("hidden");
    }
    let backgroundColor = "";
    let message = "";
    let buttonColor = "";
    if (status == "err") {
        backgroundColor = "firebrick"
        message = "An error has occurred. If the error persists, please try again later."
    } else if (status == "success") {
        backgroundColor = "forestgreen"
        message = "Successfully sent!"
    } else if (status == "loading") {
        backgroundColor = "grey"
        message = "Loading. Please wait."
    }
    popUpMessage.textContent = message;
    background.style.background = backgroundColor;
}
function closeMessage() {
    if (!document.getElementById("done-message").classList.contains("hidden")) {
        document.getElementById("done-message").classList.add("hidden");
    }
}


//-----------------------------------------------------------------------------------------------


//onclick
submitButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(email);
    console.log(message);
    sendMail(email, message);
    showMessage("loading");
})

closePopUp.addEventListener("click", () => {
    closeMessage();
})