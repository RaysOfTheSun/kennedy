import React from 'react';
import {render} from 'react-dom';
import BannerCarousel from '../BannerCarousel/BannerCarousel.jsx';

const HatsAndAccessoriesBannerCarousel = () => {
    return <BannerCarousel dbCollection={'apparel'}
                           dbCollectionTarget={'featured'}
                           searchField={'category'}
                           searchFieldValue={'hatacc'}
                           title={'Hats & Accessories'}
    />
};

const container = document.getElementById('hats-accessories-banner');
if (container) {
    render(<HatsAndAccessoriesBannerCarousel/>, container);
}