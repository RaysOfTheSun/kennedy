import React from 'react';
import {render} from 'react-dom';
import CardGrid from '../CardGrid/CardGrid.jsx';

const DiscoveryGrid = ()=>{
    const collection = [
        {
            name: 'Built Like Muscle',
            image: 'https://images.unsplash.com/photo-1465584595337-acdbc73be957?ixlib=' +
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
            name: 'Dress to Impress',
            image: 'https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?ixlib=\n' +
                'rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Proin pretium leo urna.'
        }
    ];

    return <CardGrid collection={collection} enableCarouselMode={true}/>
};

render(<DiscoveryGrid/>, document.getElementById('discover-kenny'));