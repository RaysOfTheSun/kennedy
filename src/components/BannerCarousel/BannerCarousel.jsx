import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import BannerCarouselItem from './BannerCarouselItem.jsx';

export default class BannerCarousel extends Component {
    constructor(props) {
        super(props);
        this.GetCollections = this.GetCollections.bind(this);
        this.GetCollections();
        this.state = {data: [], itemCount: 0};
        this.seekWidth = 160;
        this.currSeek = 0;
        this.isWatchBanner = this.props.dbCollection === 'watches';
        this.carousel = React.createRef();
        this.rightArrow = React.createRef();
        this.leftArrow = React.createRef();
        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        this.toggleArrows = this.toggleArrows.bind(this);
        this.maxSeek = this.seekWidth;
    }

    // make the arrow that will drag the container to its direction inactive
    // once currSeek hits a specific value that signifies that the container
    // has been fully dragged towards said direction
    toggleArrows(arrowLeft, arrowRight) {
        if (this.currSeek === -this.maxSeek) {
            arrowRight.classList.add('arrow-inactive');
        } else if (this.currSeek === this.maxSeek) {
            arrowLeft.classList.add('arrow-inactive');
        } else {
            arrowRight.classList.remove('arrow-inactive');
            arrowLeft.classList.remove('arrow-inactive');
        }
    }

    async GetCollections() {
        let collections;
        if (this.props.searchField && this.props.searchFieldValue) {
            collections = await fetch(`/get-${this.props.dbCollection}/${this.props.dbCollectionTarget}?${this.props.searchField}=${this.props.searchFieldValue}`,
                {method: 'GET'}).then(res => res.json());
        } else {
            collections = await fetch(`/get-${this.props.dbCollection}/${this.props.dbCollectionTarget}`,
                {method: 'GET'}).then(res => res.json());
        }

        this.setState({data: collections, itemCount: collections.length});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let seekMultiplier = 1;
        if (prevState.itemCount !== this.state.itemCount) {
            this.seekWidth = this.state.itemCount % 2 !== 0 ? 300 : 160;
            this.seekWidth = this.state.itemCount > 5 ? this.seekWidth + 50 : this.seekWidth;
            seekMultiplier = this.state.itemCount % 2 !== 0 ? Math.floor(this.state.itemCount / 2) :
                (Math.floor(this.state.itemCount / 2)) - 1;
            this.maxSeek = this.seekWidth * seekMultiplier;
        }
    }

    handleLeftArrowClick() {
        this.currSeek = this.currSeek + this.seekWidth <= this.maxSeek ?
            this.currSeek + this.seekWidth : this.currSeek;
        this.carousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
        this.toggleArrows(this.leftArrow.current, this.rightArrow.current);
    }

    handleRightArrowClick() {
        this.currSeek = this.currSeek - this.seekWidth >=
        -this.maxSeek ? this.currSeek -= this.seekWidth : this.currSeek;
        this.carousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
        this.toggleArrows(this.leftArrow.current, this.rightArrow.current);
    }

    render() {
        return (
            <div className={'kenny-container d-flex flex-mobile-column-alt'}>
                <div className={'d-flex justify-content-center align-items-center flex-grow-desk-30 flex-column'}>
                    <div className={'d-flex justify-content-center align-items-center flex-column'}>
                        <h1 className={'banner-carousel-header my-4'}>{this.props.title}</h1>
                        <h5 className={'align-self-start font-weight-bold'}>Shop all&nbsp;
                            <i className="fas fa-arrow-right"/></h5>
                    </div>
                </div>
                <div className={'banner-carousel-container'}>
                    <div className="carousel-arrow-container arrow-left" onClick={this.handleLeftArrowClick}
                         ref={this.leftArrow}>
                        <i className="fas fa-arrow-left"/>
                    </div>
                    <div className={'banner-carousel-container-inner'} ref={this.carousel}>
                        {
                            this.state.data.map((item, ind) => (
                                <BannerCarouselItem image={item['image']}
                                                    desc={item['size']}
                                                    name={item['name']}
                                                    showWatchUnit={this.isWatchBanner}
                                                    key={ind}/>
                            ))
                        }
                    </div>
                    <div className="carousel-arrow-container arrow-right" onClick={this.handleRightArrowClick}
                         ref={this.rightArrow}>
                        <i className="fas fa-arrow-right"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mensContainer = document.getElementById('mens-new-arrival');
const womensContainer = document.getElementById('womens-new-arrival');
if (mensContainer) {
    render(<BannerCarousel dbCollection={'watches'} dbCollectionTarget={'new'} searchField={'category'}
                           searchFieldValue={'men'} title={'new arrivals'}/>,
        mensContainer);
} else if (womensContainer) {
    render(<BannerCarousel dbCollection={'watches'} dbCollectionTarget={'new'} searchField={'category'}
                           searchFieldValue={'women'} title={'new arrivals'}/>,
        womensContainer);
}

BannerCarousel.prototypes = {
    dbCollection: PropTypes.string,
    dbCollectionTarget: PropTypes.string,
    searchField: PropTypes.string,
    searchFieldValue: PropTypes.string,
    title: PropTypes.string
};

