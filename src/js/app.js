import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const image = document.querySelector('.image');
  image.addEventListener('click', () => {
    image.style.scale = 2;
  })
});
