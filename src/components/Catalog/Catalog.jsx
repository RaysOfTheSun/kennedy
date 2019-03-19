import React from 'react';

const Catalog = ({data}) => {
    const formatMoney = (n, c, d, t) => {
        // S.O. code
        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d === undefined ? "." : d;
        t = t === undefined ? "," : t;
        let s = n < 0 ? "-" : "";
        let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        let j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g,
            "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    return (
        data.map(collection => (
            <div className={'d-flex justify-content-center align-items-center'}>
                {
                    (
                        (collection) => {
                            let itemDiv = [];
                            for (let i = 0; i < collection.length; i += 2) {
                                console.log(collection[i].price, collection[i + 1].price);
                                itemDiv.push(
                                    <div
                                        className={'d-flex justify-content-center align-items-center flex-mobile-column-alt link-plain'}>
                                        <a href={collection[i].price ? `/products/watches/${collection[i].name}` : '#'}>
                                            <div
                                                className={'d-flex justify-content-center align-items-center flex-column catalog-item'}>
                                                {<img src={collection[i].image}
                                                      alt={collection[i].name}
                                                      className={'image-350-200'}/>}
                                                <div
                                                    className={'d-flex justify-content-center align-items-center flex-column'}>
                                                    <p className={'catalog-item-header text-uppercase'}>{collection[i].name}</p>
                                                    <p className={'catalog-item-desc text-muted'}>{collection[i].type || 'watch type'}</p>
                                                    <p className={'catalog-item-desc text-muted m-0'}>
                                                        {`USD ${formatMoney(collection[i].price || 10000)}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {
                                            collection[i + 1] !== null ?
                                                <a href={collection[i + 1].price ? `/products/watches/${collection[i + 1].name}` : '#'}>
                                                    <div
                                                        className={'d-flex justify-content-center align-items-center flex-column catalog-item'}>
                                                        {<img src={collection[i + 1].image}
                                                              alt={collection[i + 1].name}
                                                              className={'image-350-200'}/>}
                                                        <div
                                                            className={'d-flex justify-content-center align-items-center flex-column'}>
                                                            <p className={'catalog-item-header text-uppercase'}>{collection[i + 1].name}</p>
                                                            <p className={'catalog-item-desc text-muted'}>{collection[i + 1].type || 'watch type'}</p>
                                                            <p className={'catalog-item-desc text-muted m-0'}>
                                                                {`USD ${formatMoney(collection[i + 1].price || 10000)}`}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a> : ''
                                        }
                                    </div>
                                )
                            }
                            return itemDiv;
                        }
                    )(collection)
                }
            </div>
        ))
    )
};

export default Catalog;
