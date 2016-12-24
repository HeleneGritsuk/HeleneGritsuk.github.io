var catalog = document.querySelector(".catalog__wrapper");
var popup = document.querySelector(".modal-form");
var overlay = document.querySelector(".modal-overlay");

catalog.addEventListener("click", function(event) {
  var target = event.target;
    if (target.tagName === 'svg') {
    target = target.parentNode;
  }
  while (target != catalog) {
    if (target.classList.contains("catalog-item__order-btn")) {
      modal_form_show(event)
      return;
    }
    target = target.parentNode;
  }
});
function modal_form_show(event) {
  event.preventDefault();
  popup.classList.add("modal-form-show");
  overlay.classList.add("modal-overlay-show");
};

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-form-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-form-show")) {
        popup.classList.remove("modal-form-show");
        overlay.classList.remove("modal-overlay-show");
      }
    }
  });
