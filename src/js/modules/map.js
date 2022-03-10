// MAP
;(function(){
    if (typeof ymaps === 'undefined'){
        return;
    }

    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
            center: [55.732200, 37.620878],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г. Москва, ул. Большая Полянка 51А/9'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts/point.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-10, -38]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });

})();