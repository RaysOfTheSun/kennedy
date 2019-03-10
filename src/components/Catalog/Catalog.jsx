import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.GetData = this.GetData.bind(this);
        this.MakeItem = this.MakeItem.bind(this);
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

            dataHandler = dataHandler.map((collection) => {
                return this.MakeItem(collection);
            });

            console.log(dataHandler);
            this.setState({data: dataHandler});

        }
    }

    MakeItem(collection) {
        let catalogItems = [];

        if (collection.length > 0) {
            for (let i = 0; i < collection.length; i += 2) {
                catalogItems.push(
                    <div>
                        <div>{collection[i]}</div>
                        {collection[i + 1] ? <div>{collection[i + 1]}</div> : ''}
                    </div>
                )
            }
        }

        return catalogItems;
    }

    render() {

        if (this.state.data.length > 0) {
            return (
                <div className={'d-flex justify-content-center align-items-center flex-column'}>

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