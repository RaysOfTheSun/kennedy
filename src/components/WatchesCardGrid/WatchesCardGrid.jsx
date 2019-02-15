import React from 'react';
import {render} from 'react-dom';
import CardGrid from '../CardGrid/CardGrid.jsx';


const WatchesCardGrid = () => {
  return <CardGrid dbCollection={'watches'} cardContentOrder={'reverse'} cardImageSize={'small'} showCardDesc={false}
                   enableCarouselMode={true} indicatorName={'watch'} enableCardLink={true}/>;
};

const container = document.getElementById('featured-watches');
if (container) {
    render(<WatchesCardGrid/>, container);
}