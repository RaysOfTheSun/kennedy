import React from 'react';
import {render} from 'react-dom';
import BannerCarousel from '../BannerCarousel/BannerCarousel.jsx';

const BagsFeaturedBannerCarousel = () => {
    return <BannerCarousel title={'Best Sellers'}
                           dbCollection={'bags'}
                           dbCollectionTarget={'featured'}
    />
};

render(<BagsFeaturedBannerCarousel/>, document.getElementById('bags-featured'));