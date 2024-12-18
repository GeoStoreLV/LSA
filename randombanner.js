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
