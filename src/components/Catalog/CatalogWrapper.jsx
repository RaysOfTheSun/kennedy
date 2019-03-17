import React, {Component} from 'react';
import {render} from 'react-dom';
import Catalog from './Catalog.jsx';

class CatalogWrapper extends Component{
    constructor(props) {
        super(props);
        this.state = {currFilter: 'all'};
    }

    render() {
        return (
            <div className={'d-flex flex-column align-items-center'}>
                <div className="d-flex bg-black catalog-filter-container pb-5">

                </div>
                <Catalog/>
            </div>
        )
    }
}

render(<CatalogWrapper/>, document.getElementById('catalog-container'));