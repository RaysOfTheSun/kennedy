import React from 'react';

const CardGridItem = ({name, image, content, imageSize, contentOrder, showDesc, shift, hoverEffect,
                          headerTransform, descTransform}) => {
    let imageSizeClass = '';
    if (imageSize === 'small') {
        imageSizeClass = 'image-200-75p';
    } else if (imageSize === 'auto') {
        imageSizeClass = 'w-auto'
    } else {
        imageSizeClass = 'image-350-100p'
    }
    const headerTransformClass = headerTransform === 'none' ? 'transform-none' : '';
    const descTransformClass = descTransform === 'none' ? 'transform-none' : '';
    const headerPosition = contentOrder === 'reverse' ? 'order-1' : 'order-0';
    const contentPosition = contentOrder === 'reverse' ? 'order-0' : 'order-1';
    const headerClass = contentOrder === 'reverse' ? 'card-content-text font-weight-bold font-small text-kenny-black'
        : 'card-content-header';
    const contentClass = contentOrder === 'reverse' ? 'card-content-header' : 'card-content-text';
    const shiftClass = shift ? ' kennedy-card-shift ' : ' ';
    const hoverEffectClass = hoverEffect === 'lights' ? ' kennedy-card-dark-to-light ' : '';
    return (
        <div className={`kennedy-card${shiftClass}${hoverEffectClass}link-plain`}>
            <a className={''} href={'#'}>
                <div className={'card-image'}>
                    <img src={image} alt={name} className={imageSizeClass}/>
                </div>
                <div className={'card-content'}>
                    <h5 className={`${headerClass} ${headerTransformClass} ${headerPosition}`}>
                        {name}
                    </h5>
                    {
                        showDesc ? <p className={`${contentClass} ${descTransformClass} ${contentPosition}`}>{content}</p> : undefined
                    }
                </div>
            </a>
        </div>
    )
};

export default CardGridItem;