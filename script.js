// =========================================
// NOTABLE WALKS
// Search + image interaction
// =========================================


// =========================================
// GET ELEMENTS
// =========================================

const photos = document.querySelectorAll(".photo");

const searchInput = document.getElementById("searchInput");

const clearSearch = document.getElementById("clearSearch");

const searchMessage = document.getElementById("searchMessage");


// =========================================
// IMAGE CLICK INTERACTION
// =========================================

photos.forEach((photo) => {

    photo.addEventListener("click", () => {

        const person = photo.dataset.person;

        window.location.href =
            `detail.html?person=${encodeURIComponent(person)}`;

    });

});


// =========================================
// SEARCH
// =========================================

searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();


    // Show / hide clear button

    if (searchTerm.length > 0) {
        clearSearch.classList.add("visible");
    } else {
        clearSearch.classList.remove("visible");
    }


    // If search is empty, show everything

    if (searchTerm === "") {

        photos.forEach((photo) => {
            photo.classList.remove("hidden");
        });

        searchMessage.textContent = "";

        return;
    }


    // Keep track of results

    let resultCount = 0;


    // Search every photo

    photos.forEach((photo) => {

        const person = photo.dataset.person
            .toLowerCase();

        const category = photo.dataset.category
            .toLowerCase();


        // Search person OR category

        const matches =
            person.includes(searchTerm) ||
            category.includes(searchTerm);


        if (matches) {

            photo.classList.remove("hidden");

            resultCount++;

        } else {

            photo.classList.add("hidden");

        }

    });


    // Search message

    if (resultCount === 0) {

        searchMessage.textContent =
            `NO RESULTS FOR "${searchInput.value}"`;

    } else {

        searchMessage.textContent =
            `${resultCount} RESULT${resultCount === 1 ? "" : "S"}`;

    }

});


// =========================================
// CLEAR SEARCH
// =========================================

clearSearch.addEventListener("click", () => {

    searchInput.value = "";

    searchInput.dispatchEvent(new Event("input"));

    searchInput.focus();

});