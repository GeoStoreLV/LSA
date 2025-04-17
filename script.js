// Inicializēt karti
const map = L.map('map').setView([56.9496, 24.1052], 7);

// Pievieno OpenStreetMap slāni
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Pievieno paraugus iezīmēm
const markers = [
     {
       coords: [56.960069, 24.032195],
       title: '<a href="https://www.worldcubeassociation.org/competitions/PapildusDisciplinasRiga2025">Papildus Disciplīnas Rīgā 2025</a>',
       description: "May 17, 2025 - Rīga"
    },
];

// Pievieno iezīmes kartē
markers.forEach(marker => {
    if (marker.coords && Array.isArray(marker.coords) && marker.coords.length === 2) {
        L.marker(marker.coords)
            .addTo(map)
            .bindPopup(`<b>${marker.title}</b><br>${marker.description}`);
    } else {
        console.error("Kļūda: Nepareizas koordinātas iezīmei", marker);
    }
});

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
        emailjs.send("service_2pf4207", "template_6ln7h5t", {
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


// Smooth Scroll for Menu Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Saraksts ar pieejamajām banner bildēm
    const banners = [
        "Banner.JPG",
        "Banner2.JPG",
        "Banner3.JPG",
        "Banner4.JPG",
        "Banner5.JPG"
    ];

    // Funkcija, kas izvēlas nejaušu banner attēlu
    function setRandomBanner() {
        const randomIndex = Math.floor(Math.random() * banners.length);
        const bannerElements = document.querySelectorAll('.banner');

        if (bannerElements.length > 0) {
            bannerElements[0].src = banners[randomIndex];
        }
    }

    // Izsauc funkciju, lai nomainītu banner attēlu
    setRandomBanner();
});
