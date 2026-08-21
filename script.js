// =========================================
// NOTABLE WALKS
// Simple image interaction
// =========================================

const photos = document.querySelectorAll(".photo");

photos.forEach((photo) => {

    photo.addEventListener("click", () => {

        photos.forEach((item) => {
            item.classList.remove("selected");
        });

        photo.classList.add("selected");

    });

});