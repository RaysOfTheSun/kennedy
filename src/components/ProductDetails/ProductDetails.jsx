import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.specLabels = ['movement', 'case', 'dimensions', 'strap'];
        this.GetData = this.GetData.bind(this);
        this.GetData();
        this.formatMoney = this.formatMoney.bind(this);
    }

    async GetData() {
        const currLoc = location.pathname.split('/');
        const productName = currLoc[currLoc.length - 1];
        let collection = await fetch(
            `/get-${this.props.dbCollectionTarget}/${this.props.targetType}?${this.props.searchField}=${productName}`,
            {method: 'GET'}
        ).then(res => res.json());

        const [finalData] = collection;

        this.setState({data: finalData});
    }

    formatMoney(n, c, d, t) {
        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d === undefined ? "." : d;
        t = t === undefined ? "," : t;
        let s = n < 0 ? "-" : "";
        let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        let j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    static handleHeaderClick(e) {
        const dataContainer = document.querySelector(`[data-set=${e.currentTarget.getAttribute('data-target-set')}]`);
        const expandedDataSets = document.getElementsByClassName('technical-data-set-expanded');
        for(let i = 0; i < expandedDataSets.length; i++) {
            if(expandedDataSets[i].getAttribute('data-set') !== e.currentTarget.getAttribute('data-target-set')) {
                expandedDataSets[i].classList.remove('technical-data-set-expanded');
            }
        }

        dataContainer.classList.toggle('technical-data-set-expanded');
    }

    render() {
        if (this.state.data.length !== 0) {
            return (
                <div className={'d-flex justify-content-center flex-column w-100'}>
                    <div className={'d-flex justify-content-center align-items-center bg-light-grey'}>
                        <div className={'product-kenny-container product-container flex-mobile-column-alt'}>
                            <div
                                className={'d-flex justify-content-center align-items-center product-image-container position-relative'}>
                                <div className="product-arrow-container product-arrow-left">
                                    <i className="fas fa-chevron-left"></i>
                                </div>
                                <div className={'product-images'}>
                                    {
                                        this.state.data.prevImage.map((imageName, i) => (
                                            <div className={'product-preview-image'}>
                                                <img src={`/images/${imageName}.png`} alt={this.state.data.name}
                                                     key={i}/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="product-arrow-container product-arrow-right">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                            <div className={'product-preview-desc d-flex flex-column wrap-20 flex-mobile-center'}>
                                <h1 className={'text-emphasize-medium text-uppercase d-flex flex-column justify-content-center font-weight-bold mb-0'}>
                                    {this.state.data.name}
                                </h1>
                                <h1 className={'text-muted text-uppercase text-regular-mobile'}>{this.state.data.type}</h1>
                                <p className={'section-desc transform-none w-80-100 display-mobile-none'}>
                                    {this.state.data.desc}
                                </p>
                                <h1 className={'d-flex flex-column justify-content-center mb-0 font-weight-bold text-regular-mobile'}>
                                    {`USD ${this.formatMoney(this.state.data.price)}`}
                                </h1>
                                <h6 className="text-muted">tax excluded</h6>
                                <div className="d-flex flex-column align-self-stretch">
                                    <input type="button"
                                           className="text-uppercase btn-black product-preview-input w-60-75-100"
                                           value="Add to Cart"/>
                                    <input type="button"
                                           className="text-uppercase btn-black btn-outline-black product-preview-input w-60-75-100"
                                           value="Call to Buy (+1) 123 456 7890"/>
                                    <input type="button"
                                           className="text-uppercase btn-black btn-outline-black product-preview-input w-60-75-100"
                                           value="Find a Store"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-center align-items-center border-bottom'}>
                        <div className="product-preview-guarantee">
                            <i className="fas fa-box guarantee-icon"></i>
                            <p>Free Shipping</p>
                        </div>
                        <div className="product-preview-guarantee">
                            <i className="fas fa-exchange-alt guarantee-icon"></i>
                            <p>Free Return</p>
                        </div>
                        <div className="product-preview-guarantee">
                            <i className="fas fa-gift guarantee-icon"></i>
                            <p>Gift Offered</p>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-center bg-black text-white technical-banner'}>
                        <div className={'product-kenny-container d-flex justify-content-center align-items-center'}>
                            <div className={'technical-data flex-column align-self-start'}>
                                <h1 className={'font-weight-normal text-uppercase technical-section-header color-logo'}>Technical
                                    Data</h1>
                                {
                                    this.specLabels.map((specTitle, i) => (
                                        <div className={`technical-data-item ${i === 0 ?' technical-data-set-expanded' : ''}`} data-set={`spec-${i + 1}`}>
                                            <div className={'technical-data-header-container'} data-target-set={`spec-${i + 1}`} onClick={ProductDetails.handleHeaderClick}>
                                                <h3 className={'text-uppercase font-weight-bold technical-data-set-header'}>{specTitle}</h3>
                                                <i className="fas fa-chevron-down spec-indicator color-logo"></i>
                                            </div>
                                            <div className={'technical-data-set'}>
                                                {
                                                    Object.keys(this.state.data[specTitle]).map((spec, i) => (
                                                        <div className={'d-flex align-items-center'}>
                                                            <div className={'technical-data-header'}>
                                                                <h4>{spec}</h4>
                                                            </div>
                                                            <div className={'technical-data-item'}>
                                                                <h4>{this.state.data[specTitle][spec]}</h4>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="technical-image display-mobile-none"
                             style={{backgroundImage: `url(${this.state.data.techImage})`}}/>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

ProductDetails.propTypes = {
    dbCollectionTarget: PropTypes.string,
    targetType: PropTypes.string,
    searchField: PropTypes.string
};

const container = document.getElementById('product-prev-container');
if (container) {
    render(<ProductDetails dbCollectionTarget={'watches'} searchField={'name'} targetType={'watch'}/>,
        container);
}