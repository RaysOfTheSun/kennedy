import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.GetData = this.GetData.bind(this);
        this.MakeItem = this.MakeItem.bind(this);
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

            console.log(dataHandler);
            // dataHandler = dataHandler.map((collection) => {
            //     return this.MakeItem(collection);
            // });

            console.log(dataHandler);
            this.setState({data: dataHandler});

        }
    }

    MakeItem(collection) {
        let catalogItems = [];

        if (collection.length > 0) {
            let x;
            let y;

            for (let i = 0; i < collection.length; i += 2) {
                x = <div className={'d-flex justify-content-center align-items-center flex-column'}>
                    {<img src={collection[i].image} alt={collection[i].name}/>}
                    <div className={'d-flex justify-content-center align-items-center flex-column'}>
                        <p className={'section-header text-uppercase'}>{collection[i].name}</p>
                        <p className={'section-desc transform-none text-muted'}>{collection[i].type}</p>
                        <p className={'section-desc transform-none text-muted'}>
                            {`USD ${this.formatMoney(collection[i].price)}`}
                        </p>
                    </div>
                </div>

                y = collection[i + 1] ?
                    <div className={'d-flex justify-content-center align-items-center flex-column'}>
                        {<img src={collection[i + 1].image} alt={collection[i + 1].name}/>}
                        <div className={'d-flex justify-content-center align-items-center flex-column'}>
                            <p className={'section-header text-uppercase'}>{collection[i + 1].name}</p>
                            <p className={'section-desc transform-none text-muted'}>{collection[i + 1].type}</p>
                            <p className={'section-desc transform-none text-muted'}>
                                {`USD ${this.formatMoney(collection[i + 1].price)}`}
                            </p>
                        </div>
                    </div> : null;

                catalogItems.push(
                    <div className={'d-flex justify-content-center align-items-center flex-mobile-column'}>

                    </div>
                )
            }
        }

        return catalogItems;
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
                <div className={'d-flex justify-content-center align-items-center flex-mobile-column'}>
                    {
                        this.state.data.map(collection => (
                            <div className={'d-flex justify-content-center align-items-center'}>
                                {
                                    (
                                        () => {
                                            let itemDiv;
                                            for (let i = 0; i < collection.length; i += 2) {
                                                itemDiv =
                                                    <div className={'d-flex justify-content-center align-items-center flex-mobile-column'}>
                                                        <div
                                                            className={'d-flex justify-content-center align-items-center flex-column'}>
                                                            {<img src={collection[i].image}
                                                                  alt={collection[i].name}/>}
                                                            <div
                                                                className={'d-flex justify-content-center align-items-center flex-column'}>
                                                                <p className={'section-header text-uppercase'}>{collection[i].name}</p>
                                                                <p className={'section-desc transform-none text-muted'}>{collection[i].type}</p>
                                                                <p className={'section-desc transform-none text-muted'}>
                                                                    {`USD ${this.formatMoney(collection[i].price)}`}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {
                                                            collection[i + 1] ?
                                                                <div
                                                                    className={'d-flex justify-content-center align-items-center flex-column'}>
                                                                    {<img src={collection[i + 1].image}
                                                                          alt={collection[i + 1].name}/>}
                                                                    <div
                                                                        className={'d-flex justify-content-center align-items-center flex-column'}>
                                                                        <p className={'section-header text-uppercase'}>{collection[i + 1].name}</p>
                                                                        <p className={'section-desc transform-none text-muted'}>{collection[i + 1].type}</p>
                                                                        <p className={'section-desc transform-none text-muted'}>
                                                                            {`USD ${this.formatMoney(collection[i + 1].price)}`}
                                                                        </p>
                                                                    </div>
                                                                </div> : ''
                                                        }
                                                    </div>
                                            }
                                            return itemDiv;
                                        }
                                    )()
                                }
                            </div>
                        ))
                    }
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

render(<Catalog/>, document.getElementById('test'));