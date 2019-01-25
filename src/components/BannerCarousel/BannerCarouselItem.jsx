import React from 'react';

const BannerCarouselItem = ({name, image, desc}) => {
    return (
        <div className={'banner-carousel-item'}>
            <div className="quick-link flex-center">
                <h6 className={'text-uppercase'}><i className="fas fa-cart-plus"/>&nbsp;Quick Shop</h6>
            </div>
            <img src={image} alt={name}/>
            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                <h5>{name}</h5>
                <h6 className={'text-muted'}>{desc}
                <span className={'font-small text-uppercase'}> mm</span></h6>
            </div>
        </div>
    )
};

export default BannerCarouselItem;