// =========================================
// GET PERSON FROM URL
// =========================================

const params = new URLSearchParams(window.location.search);

const person = params.get("person");


// =========================================
// CELEBRITY DATA
// =========================================

const people = {

    "Dua Lipa": {

        image: "images/dualipa.jpg",

        products: [

            {
                name: "Black Leather Jacket",
                price: "€890",
                image: "images/products/dualipa-jacket.jpg",
                link: "https://example.com"
            },

            {
                name: "Black Sunglasses",
                price: "€220",
                image: "images/products/dualipa-sunglasses.jpg",
                link: "https://example.com"
            },

            {
                name: "Leather Boots",
                price: "€650",
                image: "images/products/dualipa-boots.jpg",
                link: "https://example.com"
            },

            {
                name: "Silver Bag",
                price: "€490",
                image: "images/products/dualipa-bag.jpg",
                link: "https://example.com"
            }

        ]

    },


    "Kendall Jenner": {

        image: "images/kendalljenner.jpg",

        products: [

            {
                name: "Product One",
                price: "€000",
                image: "images/products/kendall-1.jpg",
                link: "https://example.com"
            },

            {
                name: "Product Two",
                price: "€000",
                image: "images/products/kendall-2.jpg",
                link: "https://example.com"
            },

            {
                name: "Product Three",
                price: "€000",
                image: "images/products/kendall-3.jpg",
                link: "https://example.com"
            },

            {
                name: "Product Four",
                price: "€000",
                image: "images/products/kendall-4.jpg",
                link: "https://example.com"
            }

        ]

    }

};


// =========================================
// LOAD PERSON
// =========================================

const personData = people[person];


if (!personData) {

    document.getElementById("personName").textContent =
        "PERSON NOT FOUND";

} else {

    // Person name

    document.getElementById("personName").textContent =
        person;


    // Main image

    const mainImage =
        document.getElementById("mainImage");

    mainImage.src = personData.image;

    mainImage.alt = person;


    // Products

    personData.products.forEach((product, index) => {

        const number = index + 1;

        const productElement =
            document.getElementById(`product${number}`);

        const image =
            document.getElementById(`productImage${number}`);

        const name =
            document.getElementById(`productName${number}`);

        const price =
            document.getElementById(`productPrice${number}`);


        productElement.href = product.link;

        image.src = product.image;

        image.alt = product.name;

        name.textContent = product.name;

        price.textContent = product.price;

    });

}