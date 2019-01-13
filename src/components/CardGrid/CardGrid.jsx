import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import CardGridItem from './CardGridItem.jsx';


export default class CardGrid extends Component {
    constructor(props) {
        super(props);
        this.getCollections = this.getCollections.bind(this);
        this.state = {data: this.props.dbCollection ? [] : this.props.collection, shift: false};
        this.getCollections();
        // For instances that do not require data from a database,
        // make use of the default parameters. Otherwise, these
        // will be automatically updated by the getCollection function
        this.itemCount = 3;
        this.maxSeek = this.props.seekWidth;
        this.minSeek = -this.props.seekWidth;
        this.currSeek = 0;
        this.watchCarousel = React.createRef();
        this.container = this.props.enableCarouselMode ? 'carousel-container' : 'card-container';
        this.additionalClasses = this.props.enableCarouselMode ? 'overflow-hidden p-relative' : '';
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    }

    async getCollections() {
        if (this.props.dbCollection) {
            const collections = await fetch(`/get-${this.props.dbCollection}/${this.props.dbCollectionTarget}`,
                {method: 'GET'})
                .then(res => res.json());
            this.setState({data: collections, shift: collections.length % 2 === 0, itemLength: collections.length});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // This stuff is dependent on the number of items we are able to
        // retrieve from the DB update them once we get the data
        if ((prevState.data !== this.state.data)) {
            this.itemCount = this.state.data.length;
            this.maxSeek = this.itemCount % 2 === 0 ? this.props.seekWidth *
                (Math.floor(this.itemCount / 2) - 1) : this.props.seekWidth;
            this.minSeek = -this.props.seekWidth * (Math.floor(this.itemCount / 2));
        }
    }

    handleRightArrowClick() {
        if (this.currSeek - this.props.seekWidth >= this.minSeek) {
            this.currSeek -= this.props.seekWidth;
            this.watchCarousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
        }
    }

    handleLeftArrowClick() {
        if (this.currSeek + this.props.seekWidth <= this.maxSeek) {
            this.currSeek += this.props.seekWidth;
            this.watchCarousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
        }
    }

    render() {
        return (
            <div className={`${this.container} ${this.additionalClasses}`}>
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
                                          key={i}/>
                        ))
                    }
                </div>
                <div className={'arrow-container pos-right text-white'}>
                    <div className={'arrow'} onClick={this.handleRightArrowClick}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
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
    seekWidth: PropTypes.number
};

CardGrid.defaultProps = {
    cardImageSize: 'regular',
    cardContentOrder: 'normal',
    dbCollectionTarget: 'featured',
    showCardDesc: true,
    enableCarouselMode: false,
    seekWidth: 340
};

render(<CardGrid dbCollection={'collections'}/>, document.getElementById('featured-collections'));
render(<CardGrid dbCollection={'watches'} cardContentOrder={'reverse'} cardImageSize={'small'} showCardDesc={false}
                 enableCarouselMode={true}/>,
    document.getElementById('featured-watches'));