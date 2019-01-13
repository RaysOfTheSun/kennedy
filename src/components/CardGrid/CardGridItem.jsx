import React from 'react';

const CardGridItem = ({name, image, content, imageSize, contentOrder, showDesc, shift}) => {
    const imageSizeClass = imageSize === 'small' ? 'image-200-75p' :
        'image-350-100p';
    const headerPosition = contentOrder === 'reverse' ? 'order-1' : 'order-0';
    const contentPosition = contentOrder === 'reverse' ? 'order-0' : 'order-1';
    const headerClass = contentOrder === 'reverse' ? 'card-content-text font-weight-bold font-small text-kenny-black'
        : 'card-content-header';
    const contentClass = contentOrder === 'reverse' ? 'card-content-header' : 'card-content-text';
    const shiftClass = shift ? ' kennedy-card-shift ' : ' ';
    return (
        <div className={`kennedy-card${shiftClass}link-plain`}>
            <a className={''} href={'#'}>
                <div className={'card-image'}>
                    <img src={image} alt={name} className={imageSizeClass}/>
                </div>
                <div className={'card-content'}>
                    <h5 className={`${headerClass} ${headerPosition}`}>
                        {name}
                    </h5>
                    {
                        showDesc ? <p className={`${contentClass} ${contentPosition}`}>{content}</p> : undefined
                    }
                </div>
            </a>
        </div>
    )
};

export default CardGridItem;