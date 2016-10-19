
    function initMap() {
      var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 16,
        center: {
          lat: 59.939380,
          lng: 30.328021
        }
      });

      setMarkers(map);
    }

    function setMarkers(map) {
      var image = {
        url: 'img/pointer.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(218, 142),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(40, 142)
      };

      var marker = new google.maps.Marker({
        position: {
          lat: 59.938579,
          lng: 30.322954
        },
        map: map,
        icon: image
      });
    }
