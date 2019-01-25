import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import CardGridItem from './CardGridItem.jsx';


export default class CardGrid extends Component {
    constructor(props) {
        super(props);
        this.getCollections = this.getCollections.bind(this);
        this.state = {data: this.props.dbCollection ? [] : this.props.collection, shift: this.props.collection
                ? this.props.collection.length % 2 === 0 : false, indicatorCount: 0};
        this.getCollections();
        // For instances that do not require data from a database,
        // make use of the default parameters. Otherwise, these
        // will be automatically updated after the call to the getCollection function
        this.itemCount = this.props.collection.length || 3;
        this.maxSeek = this.itemCount % 2 === 0 ? this.props.seekWidth *
            (Math.floor(this.itemCount / 2) - 1) : this.props.seekWidth * (Math.floor(this.itemCount / 2));
        this.minSeek = -this.props.seekWidth * (Math.floor(this.itemCount / 2));
        this.currSeek = 0;
        this.currIndicator = 1;
        this.watchCarousel = React.createRef();
        this.container = this.props.enableCarouselMode ? 'carousel-container' : 'card-container';
        this.additionalClasses = this.props.enableCarouselMode ? 'overflow-hidden-mobile p-relative' : '';
        this.carouselIndicators = [];
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
        this.makeIndicators = this.makeIndicators.bind(this);
        this.toggleIndicator = this.toggleIndicator.bind(this);
        this.makeIndicators(0);
    }

    makeIndicators(count) {
        const indicatorCount = this.props.dbCollection ? count : this.props.collection.length;
        const setActive = indicatorCount % 2 === 0 ? (Math.floor(indicatorCount / 2)) - 1 :
            Math.floor(indicatorCount / 2);
        if (this.props.enableCarouselMode) {
            for (let i = 0; i < indicatorCount; i++) {
                this.carouselIndicators.push(
                    <div className={`${this.props.indicatorName}-indicator indicator
                        ${i == setActive ? 'bg-dark' : ''}`}>
                    </div>
                );
            }

        }
    }

    async getCollections() {
        if (this.props.dbCollection) {
            const collections = await fetch(`/get-${this.props.dbCollection}/${this.props.dbCollectionTarget}`,
                {method: 'GET'})
                .then(res => res.json());
            this.makeIndicators(collections.length);
            this.setState({data: collections, shift: collections.length % 2 === 0});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // This stuff is dependent on the number of items we are able to
        // retrieve from the DB update them once we get the data
        if ((prevState.data !== this.state.data)) {
            this.itemCount = this.state.data.length;
            this.maxSeek = this.itemCount % 2 === 0 ? this.props.seekWidth *
                (Math.floor(this.itemCount / 2) - 1) : this.props.seekWidth * (Math.floor(this.itemCount / 2));
            this.minSeek = -this.props.seekWidth * (Math.floor(this.itemCount / 2));
            this.currIndicator = Math.floor(this.itemCount / 2) - 1;
        }
    }

    handleRightArrowClick() {
        if (this.currSeek - this.props.seekWidth >= this.minSeek) {
            this.currSeek -= this.props.seekWidth;
            this.watchCarousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
            this.toggleIndicator();
            this.currIndicator += 1;
            this.toggleIndicator();
        }
    }

    handleLeftArrowClick() {
        if (this.currSeek + this.props.seekWidth <= this.maxSeek) {
            this.currSeek += this.props.seekWidth;
            this.watchCarousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
            this.toggleIndicator();
            this.currIndicator -= 1;
            this.toggleIndicator();
        }
    }

    toggleIndicator() {
        this.indicators =
            document.getElementsByClassName(`${this.props.indicatorName}-indicator`);
        this.indicators[this.currIndicator].classList.toggle('bg-dark');
    }

    render() {
        return (
            <div className={`flex-column ${this.container} ${this.additionalClasses}`}>
                <div className={'arrow-container pos-left text-white'}>
                    <div className={'arrow'} onClick={this.handleLeftArrowClick}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                </div>
                <div className={`${this.container}`} id={'watch-carousel'} ref={this.watchCarousel}>
                    {
                        this.state.data.map((collection, i) => (
                            <CardGridItem name={collection['name']}
                                          image={collection['image']}
                                          content={collection['desc']}
                                          imageSize={this.props.cardImageSize}
                                          contentOrder={this.props.cardContentOrder}
                                          showDesc={this.props.showCardDesc}
                                          shift={this.state.shift}
                                          hoverEffect={this.props.cardHoverEffect}
                                          headerTransform={this.props.cardHeaderTransform}
                                          descTransform={this.props.cardContentTransform}
                                          key={i}/>
                        ))
                    }
                </div>
                <div className={'arrow-container pos-right text-white'}>
                    <div className={'arrow'} onClick={this.handleRightArrowClick}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className={'d-flex justify-content-center align-items-center my-2'}>
                    {
                        this.carouselIndicators.map(el => (
                            el
                        ))
                    }
                </div>
            </div>
        )
    }

}

CardGrid.propTypes = {
    cardImageSize: PropTypes.string,
    cardContentOrder: PropTypes.string,
    dbCollection: PropTypes.string,
    dbCollectionTarget: PropTypes.string,
    showCardDesc: PropTypes.bool,
    enableCarouselMode: PropTypes.bool,
    collection: PropTypes.array,
    seekWidth: PropTypes.number,
    cardHoverEffect: PropTypes.string,
    indicatorName: PropTypes.string,
    cardContentTransform: PropTypes.string,
    cardHeaderTransform: PropTypes.string
};

CardGrid.defaultProps = {
    cardImageSize: 'regular',
    cardContentOrder: 'normal',
    dbCollectionTarget: 'featured',
    showCardDesc: true,
    enableCarouselMode: false,
    seekWidth: 340,
    cardHoverEffect: 'zoom',
    collection: []
};

const collections = document.getElementById('featured-collections');
const watches = document.getElementById('featured-watches');
if (collections && watches) {
    render(<CardGrid dbCollection={'collections'}/>, collections);
    render(<CardGrid dbCollection={'watches'} cardContentOrder={'reverse'} cardImageSize={'small'} showCardDesc={false}
                     enableCarouselMode={true} indicatorName={'watch'}/>, watches);
}