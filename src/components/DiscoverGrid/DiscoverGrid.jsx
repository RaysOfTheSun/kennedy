import React from 'react';
import {render} from 'react-dom';
import CardGrid from '../CardGrid/CardGrid.jsx';

const DiscoveryGrid = () => {
    const collection = [
        {

            //https://images.unsplash.com/photo-1465584595337-acdbc73be957?ixlib=' +
            //rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
            name: 'Built to Last',
            image: 'https://images.unsplash.com/photo-1518639845127-064c4bd0c574?ixlib=' +
                'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            desc: 'Ut convallis nec odio euismod hendrerit.'
        },
        {
            name: 'Everybody Tells A Story',
            image: 'https://images.unsplash.com/photo-1542838077-57653741795a?ixlib=' +
                'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
            desc: 'Nam cursus dignissim finibus.'
        },
        {
            name: 'A Timeless Classic',
            image: 'https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?ixlib=\n' +
                'rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Proin pretium leo urna.'
        }
    ];

    return <CardGrid collection={collection} enableCarouselMode={true} cardHoverEffect={'lights'}
                     indicatorName={'discover'}/>
};

render(<DiscoveryGrid/>, document.getElementById('discover-kenny'));