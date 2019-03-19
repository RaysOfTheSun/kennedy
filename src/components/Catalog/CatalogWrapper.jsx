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
                <Catalog/>
            </div>
        )
    }
}

render(<CatalogWrapper/>, document.getElementById('catalog-container'));