import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const modalBox = document.querySelector(".basicLightbox");

// Створення розмітки галереї

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<div class="gallery__item"><a class = "gallery__link" href = "${original}" target = "_self"><img class = "gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}"></a></div>`
    )
    .join("");
galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

// Відкриття модалки

galleryBox.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show();

    // Початок прослуховування натискання клавіш

    window.addEventListener("keydown", escapePressCheck);

    // Перевірка натискання кнопки Escape та закриття модалки та закінчення прослуховування натискання клавіш при наявності Escape

    function escapePressCheck(event) {
        if (event.code !== "Escape") {
            return;
        }
        instance.close();
        window.removeEventListener("keydown", escapePressCheck);
    }
});
