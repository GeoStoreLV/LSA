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
        coords: [57.816109, 25.615255],
        title: '<a href="https://www.worldcubeassociation.org/competitions/KarkiOpen2025">Kārķi Open 2025</a>',
        description: "August 28-31, 2025 - Kārķi"
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
