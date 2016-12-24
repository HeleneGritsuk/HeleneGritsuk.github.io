    var link = document.querySelector(".best-product__order");
    var popup = document.querySelector(".modal-form");
    var overlay = document.querySelector(".modal-overlay");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-form-show");
      overlay.classList.add("modal-overlay-show");
    });

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
