const navSlide = () => {
  const navBar = document.querySelector(".toggle-button");
  const hideNav = document.querySelector(".nav-links");

  navBar.addEventListener("click", () => {
    hideNav.classList.toggle("show");
  });
};

navSlide();

function sendEmail() {
  Email.send({
    Host: "smtp.yourisp.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

sendEmail();
