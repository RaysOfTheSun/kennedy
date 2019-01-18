import React, {Component} from 'react';
import {render} from 'react-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleCollapse() {
        this.navRef.current.classList.toggle('kenny-nav-expanded');
        console.log('click');
    }

    render() {
        return (
            <div className={'kenny-nav kenny-nav-landed'}>
                <div className="nav-header text-white wrap-20">
                    <div
                        className="justify-content-center align-items-center flex-column display-mobile-flex nav-toggle"
                        onClick={this.handleCollapse}>
                        <div className="hamburger-item"/>
                        <div className="hamburger-item"/>
                        <div className="hamburger-item"/>
                        <div className={'text-uppercase font-small'}>
                            Menu
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-righteous link-plain">
                        <h1 className="mr-3"><a href="#" className="text-white">KENNEDY</a></h1>
                        <h2>
                            <i className="far fa-gem"/>
                        </h2>
                    </div>
                </div>
                <div className={'kenny-nav-body flex-mobile-column'} ref={this.navRef}>
                    <div className={'kenny-nav-item link-plain'}>
                        <a href="#" className="navigation-primary-link">Men's Watches</a>
                        <div
                            className="navigation-mega-container flex-mobile-column d-flex">
                            <div className={'nav-item-container flex-mobile-column flex-mobile-column'}>
                                <div className="navigation-mega-menu d-flex flex-column"/>
                                <div className="navigation-mega-menu flex-column border-left-1-desk pl-lg-5">
                                    <span className="navigation-mega-menu-header">Men's Collections</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Ut</a></li>
                                        <li><a href="#">viverra</a></li>
                                        <li><a href="#">lectus</a></li>
                                        <li><a href="#">non</a></li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Ut</a></li>
                                        <li><a href="#">viverra</a></li>
                                        <li><a href="#">lectus</a></li>
                                        <li><a href="#">non</a></li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column border-right-1-desk pr-5 mr-lg-3">
                                    <span className="navigation-mega-menu-header">Use</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0">
                                    <a href="#" className="navigation-mega-menu-header transform-none">
                                        All Men's Watches
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'kenny-nav-item link-plain'}>
                        <a href="#" className="navigation-primary-link">Women's Watches</a>
                        <div
                            className="navigation-mega-container flex-mobile-column">
                            <div className={'nav-item-container flex-mobile-column'}>
                                <div className="navigation-mega-menu d-flex flex-column">
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column border-left-1-desk pl-lg-5">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Ut</a></li>
                                        <li><a href="#">viverra</a></li>
                                        <li><a href="#">lectus</a></li>
                                        <li><a href="#">non</a></li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Ut</a></li>
                                        <li><a href="#">viverra</a></li>
                                        <li><a href="#">lectus</a></li>
                                        <li><a href="#">non</a></li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column border-right-1-desk pr-5 mr-lg-3">
                                    <span className="navigation-mega-menu-header">Use</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <a href="#" className="navigation-mega-menu-header transform-none">
                                        All Women's Watches
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'kenny-nav-item link-plain'}>
                        <a href="#" className="navigation-primary-link">Bags</a>
                        <div
                            className="navigation-mega-container flex-mobile-column">
                            <div className={'nav-item-container flex-mobile-column'}>
                                <div className="navigation-mega-menu d-flex flex-column pr-lg-5 mr-lg-3">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">Gear Guide</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0 pl-lg-5 border-left-1-desk">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="bullet-less pt-2">
                                        <li>
                                            <a>Travel Bags</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="bullet-less pt-2">
                                        <li>
                                            <a>Travel Bags</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column pr-5 border-right-1-desk mr-lg-3">
                                    <span className="navigation-mega-menu-header">Specials</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">
                                        All Bags
                                        <i className="fas fa-arrow-right"></i>
                                      </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'kenny-nav-item link-plain'}>
                        <a href="#" className="navigation-primary-link">Clothing & Accessories</a>
                        <div
                            className="navigation-mega-container flex-mobile-column">
                            <div className={'nav-item-container flex-mobile-column'}>
                                <div className="navigation-mega-menu d-flex pr-lg-5 mr-lg-3">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">Best Sellers</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0 pl-lg-5 border-left-1-desk">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li>
                                            <a href="#">Integer</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-fex flex-column pr-5 border-right-1-desk mr-lg-3">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="pt-2 bullet-less">
                                        <li>
                                            <a href="#">Vestibulum</a>
                                        </li>
                                        <li>
                                            <a href="#">pulvinar</a>
                                        </li>
                                        <li>
                                            <a href="#">nulla</a>
                                        </li>
                                        <li>
                                            <a href="#">Etiam</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">
                                        All Clothing & Accessories
                                        <i className="fas fa-arrow-right"></i>
                                      </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<Navbar/>, document.getElementById('nav-container'));