import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

renderGalleryItems(galleryItems);

galleryList.addEventListener("click", onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  instance.show();
}

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          />
          </a>
      </li>`
    )
    .join("");
}

function renderGalleryItems(galleryItems) {
  galleryList.innerHTML = createGalleryItemsMarkup(galleryItems);
}
