import React from 'react';
import {render} from 'react-dom';
import BannerCarousel from '../BannerCarousel/BannerCarousel.jsx';

const ShirtsBannerCarousel = () => {
    return <BannerCarousel dbCollection={'apparel'}
                           dbCollectionTarget={'featured'}
                           searchField={'category'}
                           searchFieldValue={'shirts'}
                           title={'Sweatshirts & Tees'}/>
};

const container = document.getElementById('shirts-tees-banner');
if (container) {
    render(<ShirtsBannerCarousel/>, container);
}
