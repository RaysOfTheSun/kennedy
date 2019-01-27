import React from 'react';
import {render} from 'react-dom';
import CardGrid from '../CardGrid/CardGrid.jsx';

const MensDiscoveryGrid = () => {
    const data = [
        {
            name: 'Coming Up Rose Gold',
            desc: 'Proin tincidunt ex id tincidunt euismod. Vestibulum posuere vestibulum neque.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw86a5a3ee/womens-rose-gold-tile.jpg'
        },
        {
            name: 'Go for Gold',
            desc: 'Praesent vulputate quis sapien eget iaculis. Etiam quis lorem congue, ' +
                'scelerisque arcu.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dwb7b12d1e/womens-gold-tile.jpg'
        },
        {
            name: 'Leather Looks',
            desc: 'Cras aliquet semper ipsum, at semper tortor. Curabitur ultricies condimentum ' +
                'lorem.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw537f01ac/womens-leather-tile.jpg'
        },
        {
            name: 'Stories',
            desc: 'Phasellus hendrerit diam ac leo molestie vulputate. Nulla id nunc a nisl ' +
                'ultrices.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dwd9ec9f29/womens-blog-tile.jpg'
        }
    ];

    return <CardGrid collection={data} enableCarouselMode={true}
                     indicatorName={'mens-discovery-container-ind'}
                     cardImageSize={'auto'}
                     seekWidth={338}
                     cardContentTransform={'none'}/>
};

const womenContainer = document.getElementById('womens-discovery');

if (womenContainer) {
    render(<MensDiscoveryGrid/>, womenContainer);
}
