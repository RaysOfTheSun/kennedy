import React from 'react';

const CardGridItem = ({name, image, content, imageSize}) => {
    const imageSizeClass = imageSize === 'small' ? 'image-200-75p' :
        'image-350-100p';
    return (
        <div className={'kennedy-card'}>
            <div className={'card-image'}>
                <img src={image} alt={name} className={imageSizeClass}/>
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