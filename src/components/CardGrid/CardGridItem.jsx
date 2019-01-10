import React from 'react';

const CardGridItem = ({name, image, content}) => {
    return (
        <div className={'kennedy-card'}>
            <div className={'card-image'}>
                <img src={image} alt={name} className={'image-350-100p'}/>
            </div>
            <div className={'card-content'}>
                <h5 className={'card-content-header'}>
                    <a href={'#'} className={'link-plain'}>{name}</a>
                </h5>
                <p className={'card-content-text'}>{content}</p>
            </div>
        </div>
    )
};

export default CardGridItem;