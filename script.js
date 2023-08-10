document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const responseMessage = document.getElementById("response-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);

    // Send form data to a server or perform desired actions here
    // For now, we'll just show a success message
    responseMessage.textContent = "Message sent successfully!";
    contactForm.reset();
  });
});
