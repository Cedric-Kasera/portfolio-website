/*========== Navbar Toggle ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
};

/*========== Scroll Sections Header Active Link ==========*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
    /*========== Sticky Navigation Bar ==========*/
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    /*========== Remove Toggle Icon and navbar when You Click NavLink or Scroll ==========*/
    menuIcon.classList.remove("fa-x");
    navbar.classList.remove("active");
};

/*========== Sticky Navigation Bar ==========*/
const typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Blogger", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/*========== Working Contact Form ==========*/
const form = document.querySelector("form");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        SecurityToken: " db030164-1b05-4201-a914-4a30572687f5",
        Host: "smtp.elasticemail.com",
        Username: "omarkasera50@gmail.com",
        Password: "F9B4AC93E6A134466B78C2BD6D468520E09D",
        To: "omarkasera50@gmail.com",
        From: "omarkasera50@gmail.com",
        Subject: subject.value,
        Body: bodyMessage,
    }).then(
        (message) => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});