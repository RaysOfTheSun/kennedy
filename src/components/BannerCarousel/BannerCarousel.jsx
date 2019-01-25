import React, {Component} from 'react';
import {render} from 'react-dom';
import BannerCarouselItem from './BannerCarouselItem.jsx';

export default class BannerCarousel extends Component {
    constructor(props) {
        super(props);
        this.GetCollections = this.GetCollections.bind(this);
        this.GetCollections();
        this.state = {data: [], itemCount: 0};
        this.seekWidth = 160;
        this.currSeek = 0;
        this.carousel = React.createRef();
        this.rightArrow = React.createRef();
        this.leftArrow = React.createRef();
        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        this.toggleArrows = this.toggleArrows.bind(this);
    }

    // make the arrow that will drag the container to its direction inactive
    // once currSeek hits a specific value that signifies that the container
    // has been fully dragged towards said direction
    toggleArrows(arrowLeft, arrowRight) {
        if (this.currSeek === -this.seekWidth) {
            arrowRight.classList.add('arrow-inactive');
        } else if (this.currSeek === this.seekWidth) {
            arrowLeft.classList.add('arrow-inactive');
        } else {
            arrowRight.classList.remove('arrow-inactive');
            arrowLeft.classList.remove('arrow-inactive');
        }
    }

    async GetCollections() {
        const collections = await fetch(`/get-${this.props.dbCollection}/${this.props.dbCollectionTarget}`,
            {method: 'GET'}).then(res => res.json());
        this.setState({data: collections, itemCount: collections.length});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.itemCount !== this.state.itemCount) {
            this.seekWidth = this.state.itemCount % 2 !== 0 ? 300 : 160;
        }
    }

    handleLeftArrowClick() {
        this.currSeek = this.currSeek + this.seekWidth <= this.seekWidth ?
            this.currSeek + this.seekWidth : this.currSeek;
        this.carousel.current.style.transform = `translate3d(${this.currSeek}px, 0, 0)`;
        this.toggleArrows(this.leftArrow.current, this.rightArrow.current);
    }

    handleRightArrowClick() {
        this.currSeek = this.currSeek - this.seekWidth >=
        -this.seekWidth ? this.currSeek -= this.seekWidth : this.currSeek;
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
if (mensContainer) {
    render(<BannerCarousel dbCollection={'watches'} dbCollectionTarget={'new'} title={'new arrivals'}/>,
        mensContainer);
}