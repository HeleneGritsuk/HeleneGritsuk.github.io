
    var link = document.querySelector(".link-feedback");

    var popup = document.querySelector(".modal-content");
    var overlay = document.querySelector(".modal-overlay");
    var close = popup.querySelector(".modal-content-close");
    var login = popup.querySelector("[name=login]");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      overlay.classList.add("modal-overlay-show");
      login.focus();
    });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    });

    overlay.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    });
    
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-overlay-show");
          }
        }
      });
