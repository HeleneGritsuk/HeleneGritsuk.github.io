
    function initMap() {
      var map = new google.maps.Map(document.querySelector('.contacts__map'), {
        zoom: 16,
        center: {
          lat: 59.938562,
          lng: 30.322950
        }
      });

      setMarkers(map);
    }

    function setMarkers(map) {
      var image = {
        url: 'img/icon-map-pin.svg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(66, 101),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(10, 101)
      };

      var marker = new google.maps.Marker({
        position: {
          lat: 59.938562,
          lng: 30.322950
        },
        map: map,
        icon: image
      });
    }
