function initMap() {
      var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 17,
        center: {
          lat: 59.939099,
          lng: 30.319856
        }
      });

      setMarkers(map);
    }

    function setMarkers(map) {
      var image = {
        url: 'img/pointer.png',
        size: new google.maps.Size(231, 190),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(48, 190)
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