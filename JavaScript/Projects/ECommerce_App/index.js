import { products } from "./db/products.js";
  const productContainer = document.getElementById('products')
  for (let product of products) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
      "card",
      "card-vertical",
      "d-flex",
      "direction-column",
      "relative",
      "shadow"
    );
    }
    /** Image Container */
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-container");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src",products.image);
    image.setAttribute("alt", products.name);

    imageContainer.appendChild(image);

    /** Card Details Container */
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-details");

    const brandContainer = document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText = products.brand;
    cardDetailsContainer.appendChild(brandContainer);

    /** Card Description Container */
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card-description");

    /** Product Name */
    const name = document.createElement("p");
    name.classList.add("card-des");
    name.innerText = products.name;
    descriptionContainer.appendChild(name);

    /** Product Price */
    const price = document.createElement("p");
    price.classList.add("card-price", "d-flex", "align-end", "gap-sm");
    price.innerText = `Rs. ${products.newPrice}`;

    const oldPrice = document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText = `Rs. ${products.oldPrice}`;
    price.appendChild(oldPrice);

    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.innerText = `(${products.discount}% OFF)`;
    price.appendChild(discount);
    descriptionContainer.appendChild(price);

    /** Rating Container */
    const ratings = document.createElement("p");
    ratings.classList.add("d-flex", "align-center");

    const rating = document.createElement("span");
    rating.innerText = products.rating;
    ratings.appendChild(rating);

    const star = document.createElement("span");
    star.classList.add("material-icons-outlined", "star");
    star.innerText = "star";
    ratings.appendChild(star);
    descriptionContainer.appendChild(ratings);
    cardDetailsContainer.appendChild(descriptionContainer);

    /** CTA Button Container */
    const ctaButton = document.createElement("div");
    const cartButton = document.createElement("button");
    cartButton.classList.add(
      "button",
      "btn-primary",
      "btn-icon",
      "cart-btn",
      "d-flex",
      "align-center",
      "justify-center",
      "gap",
      "cursor",
      "btn-margin"
    );
    cartButton.setAttribute("data-id", products._id);
    const cart = document.createElement("span");
    cart.classList.add("material-icons-outlined");
    cart.innerText = "shopping_cart";
    cartButton.appendChild(cart);
