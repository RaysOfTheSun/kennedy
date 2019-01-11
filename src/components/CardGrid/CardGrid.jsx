import React, {Component} from 'react';
import {render} from 'react-dom';
import CardGridItem from './CardGridItem.jsx';

class CardGrid extends Component {
    constructor(props) {
        super(props);
        this.getCollections = this.getCollections.bind(this);
        this.state = {data: []};
        this.getCollections();
    }

    async getCollections() {
        const collections = await fetch('/get-collections/featured', {method: 'GET'})
            .then(res => res.json());
        this.setState({data: collections});
    }

    render() {
        return (
            <div className={'d-flex justify-content-center align-items-center flex-mobile-column'}>
                {
                    this.state.data.map((collection, i) => (
                        <CardGridItem name={collection['name']} image={collection['image']}
                                      content={collection['desc']} imageSize={this.props.imageSize} key={i}/>
                    ))
                }
            </div>
        )
    }

}

render(<CardGrid/>, document.getElementById('featured-collections'));