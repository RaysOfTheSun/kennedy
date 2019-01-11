import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import CardGridItem from './CardGridItem.jsx';

class CardGrid extends Component {
    constructor(props) {
        super(props);
        this.getCollections = this.getCollections.bind(this);
        this.state = {data: []};
        this.getCollections();
    }

    async getCollections() {
        const collections = await fetch(`/get-${this.props.dbCollection}/${this.props.dbCollectionTarget}`,
            {method: 'GET'})
            .then(res => res.json());
        this.setState({data: collections});
    }

    render() {
        return (
            <div className={'d-flex justify-content-center align-items-center card-container'}>
                {
                    this.state.data.map((collection, i) => (
                        <CardGridItem name={collection['name']}
                                      image={collection['image']}
                                      content={collection['desc']}
                                      imageSize={this.props.cardImageSize}
                                      contentOrder={this.props.cardContentOrder}
                                      showDesc={this.props.showCardDesc}
                                      key={i}/>
                    ))
                }
            </div>
        )
    }

}

CardGrid.propTypes = {
    cardImageSize: PropTypes.string,
    cardContentOrder: PropTypes.string,
    dbCollection: PropTypes.string,
    dbCollectionTarget: PropTypes.string,
    showCardDesc: PropTypes.bool
};

CardGrid.defaultProps = {
    cardImageSize: 'regular',
    cardContentOrder: 'normal',
    dbCollectionTarget: 'featured',
    showCardDesc: true
};

render(<CardGrid dbCollection={'collections'}/>, document.getElementById('featured-collections'));
render(<CardGrid dbCollection={'watches'} cardContentOrder={'reverse'} cardImageSize={'small'} showCardDesc={false}/>,
    document.getElementById('featured-watches'));