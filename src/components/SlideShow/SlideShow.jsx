import React, {Component} from 'react';
import {render} from 'react-dom';

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.images = [this.firstSlideRef = React.createRef(),
            this.secondSlideRef = React.createRef(),
            this.thirdSlideRef = React.createRef()];
    }

    componentDidMount() {
        const perImageTime = 5000;
        let maxSwitchTime = (this.images.length * 2) * perImageTime;
        for (let i = 0; i < this.images.length; i++) {
            let initialize = setInterval(() => {
                this.images[i].current.classList.add('landing-show-image-shown');
            }, perImageTime * (i + 1));

            let removal = setInterval(() => {
                this.images[i].current.classList.remove('landing-show-image-shown');
            }, maxSwitchTime);

            maxSwitchTime -= perImageTime;
        }
    }

    render() {
        return (
            <div className={'landing-show'}>
                <div className={'landing-show-image'} style={{backgroundImage: 'url(./images/slide-01.jpg)'}}
                     ref={this.firstSlideRef}/>
                <div className={'landing-show-image'} style={{backgroundImage: 'url(./images/slide-02.jpg)'}}
                     ref={this.secondSlideRef}/>
                <div className={'landing-show-image'} style={{backgroundImage: 'url(./images/slide-03.jpg)'}}
                     ref={this.thirdSlideRef}/>
            </div>
        )
    }
}

render(<SlideShow/>, document.getElementById('slide-show-container'));