document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Terima kasih! Pesan Anda telah terkirim (simulasi).");
            form.reset();
        });
    }
});
