(function() {
    emailjs.init("4f-J8yPZkm1aH2Dvw"); // Replace with your EmailJS User ID
})();

// Kontaktformas loģika
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const message = e.target.message.value;

    if (email && message) {
        emailjs.send("service_upvy75a", "template_6ln7h5t", {
            user_email: email,
            user_message: message
        }).then(response => {
            alert("Ziņa veiksmīgi nosūtīta! Paldies par saziņu.");
            contactForm.reset();
        }).catch(error => {
            alert("Radās kļūda. Lūdzu, mēģiniet vēlreiz.");
            console.error("EmailJS kļūda:", error);
        });
    } else {
        alert("Lūdzu, aizpildiet visus laukus.");
    }
});
