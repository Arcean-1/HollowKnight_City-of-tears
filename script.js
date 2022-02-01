'use strict';

const info_images = {
    'city-of-tears': {
        '01': 'City_of_Tears_Map_Clean.webp',
        '02': 'City_of_Tears_Map.webp',
    },

    'sanctuary-of-souls': {
        '01': 'Soul_Sanctum_Map_Clean.webp',
        '02': 'Soul_Sanctum_Map.webp',
    },

    'tower-of-love': {
        '01': 'Tower_of_Love_Map_Clean.webp',
        '02': 'Tower_of_Love_Map.webp',
    },

    'house-of-pleasure': {
        '01': 'Pleasure_House_Map_Clean.webp',
        '02': 'Pleasure_House_Map.webp',
    },

    'spire-of-keeper': {
        '01': 'Watchers_Spire_Map_Clean.webp',
        '02': 'Watchers_Spire_Map.webp',
    },
}

const buttons = document.querySelectorAll('.map-buttons__button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        if (this.classList.contains('map-buttons__button_active')) return;
        
        let containerOfButtons = button.closest('aside.map');

        let buttonsOfThisContainer = containerOfButtons.querySelectorAll('.map-buttons__button');
        buttonsOfThisContainer.forEach(i => i.classList.remove('map-buttons__button_active'));

        this.classList.add('map-buttons__button_active');

        let blockId = containerOfButtons.getAttribute('data-image');
        let buttonId = this.getAttribute('data-image');
        let image = containerOfButtons.querySelector('.map__image');


        let urlImage = info_images[blockId][buttonId];
        let url = './images/' + urlImage;
        
        image.src = url;
    });
}

function pick() {
    console.log('hello');
}