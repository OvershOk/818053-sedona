var button = document.querySelector(".hotel-search-open-button");
var popup = document.querySelector(".hotel-search-popup");

popup.classList.add("hotel-search-popup-hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("show");
});
