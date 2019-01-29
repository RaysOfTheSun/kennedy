import React from 'react';
import {render} from 'react-dom';
import BannerCarousel from '../BannerCarousel/BannerCarousel.jsx';

const BagsNewArrivalBannerCarousel = () => {
  return <BannerCarousel title={'new arrivals'}
                         dbCollection={'bags'}
                         dbCollectionTarget={'new'}/>
};

render(<BagsNewArrivalBannerCarousel/>, document.getElementById('bags-new-arrival'));