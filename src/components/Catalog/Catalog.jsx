import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

export default class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.GetData = this.GetData.bind(this);
        this.formatMoney = this.formatMoney.bind(this);
        this.GetData();
    }

    async GetData() {
        const collection = await fetch('/get-watches/all', {method: 'GET'}).then(watches => watches.json());
        this.setState({data: collection}, () => {
            this.PartitionCollection(this.state.data);
        });
    }

    PartitionCollection(collection) {
        let dataHandler = [];
        let divisionIndexes = collection.length - 1;

        if (collection.length >= 4) {
            // we have four items per row. We'll be needing an estimate on how many divisions
            // we would need to do if we were to divide the collection into such
            const rowCount = Math.floor(collection.length / 4);
            const leftOverCount = collection.length % 4;
            divisionIndexes = [0];

            for (let i = 0; i < rowCount; i++) {
                // grab the last number in the array then add 4 to it until we get the number of divisions we want
                divisionIndexes.push(divisionIndexes[i] + 4);
            }

            for (let i = 0; i < divisionIndexes.length; i++) {
                if (divisionIndexes[i] + 3 >= this.state.data.length && leftOverCount <= 1) {
                    dataHandler.push(this.state.data.slice(divisionIndexes[i], divisionIndexes[i] + 1));
                } else if (divisionIndexes[i] + 3 >= this.state.data.length && leftOverCount > 1) {
                    dataHandler.push(this.state.data.slice(divisionIndexes[i], divisionIndexes[i] + leftOverCount - 1));
                } else {
                    dataHandler.push(this.state.data.slice(divisionIndexes[i], divisionIndexes[i] + 4));
                }
            }

            this.setState({data: dataHandler});

        }
    }

    formatMoney(n, c, d, t) {
        // S.O. code
        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d === undefined ? "." : d;
        t = t === undefined ? "," : t;
        let s = n < 0 ? "-" : "";
        let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        let j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    render() {

        if (this.state.data.length > 0) {

            return (
                this.state.data.map(collection => (
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
                                                                {`USD ${this.formatMoney(collection[i].price || 10000)}`}
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
                                                                        {`USD ${this.formatMoney(collection[i + 1].price || 10000)}`}
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
        } else {
            return (
                <div></div>
            )
        }
    }
}

// render(<Catalog/>, document.getElementById('catalog-container'));