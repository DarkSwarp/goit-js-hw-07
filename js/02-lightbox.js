import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector(".gallery");

// Створення розмітки галереї

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<a class = "gallery__item" href = "${original}" target = "_self"><img class = "gallery__image" src = "${preview}" alt = "${description}"></a>`
    )
    .join("");

galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);
const lightbox = new SimpleLightbox(".gallery a", { captionType: "attr", captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });
