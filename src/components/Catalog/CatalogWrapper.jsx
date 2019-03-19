import React, {Component} from 'react';
import {render} from 'react-dom';
import Catalog from './Catalog.jsx';

class CatalogWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {currFilter: 'all', data: []};
        this.GetData = this.GetData.bind(this);
        this.PartitionCollection = this.PartitionCollection.bind(this);
        this.GetData();
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
                if (divisionIndexes[i] + 3 >= collection.length && leftOverCount <= 1) {
                    dataHandler.push(collection.slice(divisionIndexes[i], divisionIndexes[i] + 1));
                } else if (divisionIndexes[i] + 3 >= collection.length && leftOverCount > 1) {
                    dataHandler.push(collection.slice(divisionIndexes[i], divisionIndexes[i] + leftOverCount - 1));
                } else {
                    dataHandler.push(collection.slice(divisionIndexes[i], divisionIndexes[i] + 4));
                }
            }

            return dataHandler;
        }
    }

    async GetData() {
        await fetch('/get-watches/all', {method: 'GET'})
            .then(watches => watches.json())
            .then(collection => {
                this.setState({data: this.PartitionCollection(collection)});
            });
    }

    render() {
        console.log(this.state.data.length);
        if (this.state.data.length > 0) {
            return (
                <div className={'d-flex flex-column align-items-center pb-5'}>
                    <div className="d-flex justify-content-around align-items-center bg-black catalog-filter-container">
                        <div className={'d-flex kenny-container justify-content-around align-items-center'}>
                            <div className={'d-flex justify-content-center align-items-center catalog-filter-item'}>
                                <div className={'justify-content-center align-items-center catalog-filter-menu'}>
                                </div>
                                <h5 className={'catalog-filter-header'}>Category</h5>
                            </div>
                            <div className={'d-flex justify-content-center align-items-center catalog-filter-item'}>
                                <div className={'justify-content-center align-items-center catalog-filter-menu'}>
                                </div>
                                <h5 className={'catalog-filter-header'}>Collection</h5>
                            </div>
                            <div className={'d-flex justify-content-center align-items-center catalog-filter-item'}>
                                <div className={'justify-content-center align-items-center catalog-filter-menu'}>
                                </div>
                                <h5 className={'catalog-filter-header'}>Sort by</h5>
                            </div>
                            <div className={'d-flex justify-content-center align-items-center catalog-filter-item'}>
                                <div className={'justify-content-center align-items-center catalog-filter-menu'}>
                                </div>
                                <h5 className={'catalog-filter-header'}>Price</h5>
                            </div>
                            <div className={'d-flex justify-content-center align-items-center catalog-filter-item'}>
                                <div className={'justify-content-center align-items-center catalog-filter-menu'}>
                                </div>
                                <h5 className={'catalog-filter-header'}>Collection</h5>
                            </div>
                        </div>
                    </div>
                    <Catalog data={this.state.data}/>
                </div>
            )
        } else {
            return <div/>
        }
    }
}

render(<CatalogWrapper/>, document.getElementById('catalog-container'));