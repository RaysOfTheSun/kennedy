import React from 'react';
import {render} from 'react-dom';
import CardGrid from '../CardGrid/CardGrid.jsx';

const MensDiscoveryGrid = () => {
    const data = [
        {
            name: 'Back to Black',
            desc: 'Proin tincidunt ex id tincidunt euismod. Vestibulum posuere vestibulum neque.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dwc51acc3f/mens-black-tile.jpg'
        },
        {
            name: 'Go for Gold',
            desc: 'Praesent vulputate quis sapien eget iaculis. Etiam quis lorem congue, ' +
                'scelerisque arcu.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dwc5261116/mens-gold-tile.jpg'
        },
        {
            name: 'Leather Looks',
            desc: 'Cras aliquet semper ipsum, at semper tortor. Curabitur ultricies condimentum ' +
                'lorem.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw09560b82/mens-leather-tile.jpg'
        },
        {
            name: 'Stories',
            desc: 'Phasellus hendrerit diam ac leo molestie vulputate. Nulla id nunc a nisl ' +
                'ultrices.',
            image: 'https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dwa5616a3c/mens-blog-tile.jpg'
        }
    ];

    return <CardGrid collection={data} enableCarouselMode={true}
                     indicatorName={'mens-discovery-container-ind'}
                     cardImageSize={'auto'}
                     seekWidth={338}
                     cardContentTransform={'none'}/>
};

render(<MensDiscoveryGrid/>, document.getElementById('mens-discovery'));