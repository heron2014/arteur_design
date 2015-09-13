
(function () {

    'use strict';

    $( document ).ready(function () {

        // initialize with defaults
        $("#input-id").rating();

// with plugin options
        $("#input-id").rating({'size':'lg'});


        $("#input-21f").rating({
            starCaptions: function(val) {
                if (val < 3) {
                    return val;
                } else {
                    return 'high';
                }
            },
            starCaptionClasses: function(val) {
                if (val < 3) {
                    return 'label label-danger';
                } else {
                    return 'label label-success';
                }
            },
            hoverOnClear: false
        });

        $('#rating-input').rating({
            min: 0,
            max: 5,
            step: 1,
            size: 'lg',
            showClear: false
        });

        $('#btn-rating-input').on('click', function() {
            $('#rating-input').rating('refresh', {
                showClear:true,
                disabled:true
            });
        });



    });
    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(51.515514, -0.096721),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);

        $(window).resize(function() {
            // (the 'map' here is the result of the created 'var map = ...' above)
            google.maps.event.trigger(map, "resize");
        });
        var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: "16 St Martin's Le Grand"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

})();

