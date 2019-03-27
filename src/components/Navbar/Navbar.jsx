import React, {Component} from 'react';
import {render} from 'react-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.apparelMenu = React.createRef();
        this.mensMenu = React.createRef();
        this.womensMenu = React.createRef();
        this.bagsMenu = React.createRef();
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleMenuHide = this.handleMenuHide.bind(this);
    }

    handleMenuToggle(menuRef) {
        return () => {
            menuRef.current.classList.add('navigation-mega-menu-expanded');
        };
    }

    handleMenuHide(menuRef) {
        return () => {
            menuRef.current.classList.remove('navigation-mega-menu-expanded');
        };
    }

    handleCollapse() {
        this.navRef.current.classList.toggle('kenny-nav-expanded');
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
                        <a href={'/'} className={'d-flex justify-content-center align-items-center'}>
                            <h1 className="mr-3">KENNEDY</h1>
                            <h2 className={'color-logo'}>
                                <i className="far fa-gem"/>
                            </h2>
                        </a>
                    </div>
                </div>
                <div className={'kenny-nav-body flex-mobile-column'} ref={this.navRef}>
                    <div className={'kenny-nav-item link-plain'}>
                        <div ref={this.mensMenu}
                             className="navigation-mega-container flex-mobile-column d-flex">
                            <div className={'nav-item-container flex-mobile-column flex-mobile-column'}>
                                <div className="navigation-mega-menu display-mobile-flex mega-menu-return-link
                                    pr-lg-5 mr-lg-3 ml-lg-auto" onClick={this.handleMenuHide(this.mensMenu)}>
                                    <span className="navigation-mega-menu-header">
                                      <i className="fas fa-arrow-left pr-3"/>
                                      <a href="#" className="transform-none">Back</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column"/>
                                <div className="navigation-mega-menu flex-column border-left-1-desk pl-lg-5">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Fringilla Ex</a></li>
                                        <li><a href="#">Ut Suscipit</a></li>
                                        <li><a href="#">Fermentum</a></li>
                                        <li><a href="#">Curabitur</a></li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Mauris Ultrices</a></li>
                                        <li><a href="#">Praesent Ultrices</a></li>
                                        <li><a href="#">Maximus</a></li>
                                        <li><a href="#">Sed Enim Lacus</a></li>
                                    </ul>
                                </div>
                                <div
                                    className="navigation-mega-menu d-flex flex-column border-right-1-desk pr-5 mr-lg-3">
                                    <span className="navigation-mega-menu-header">Use</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0 order-first-mobile">
                                    <a href="/mens-watches" className="navigation-mega-menu-header transform-none">
                                        All Men's Watches
                                        <i className="fas fa-arrow-right pl-3"></i>
                                    </a>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0 order-first-mobile display-mobile-flex">
                                    <a href="/mens-watches" className="navigation-mega-menu-header transform-none">
                                        Men's Watches Home
                                        <i className="fas fa-arrow-right pl-3"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span onClick={this.handleMenuToggle(this.mensMenu)}>
                            <p className={'display-mobile-flex navigation-primary-link'}>Men's Watches</p>
                            <a href="/mens-watches" className="display-mobile-none-b navigation-primary-link">Men's Watches</a>
                        </span>

                    </div>
                    <div className={'kenny-nav-item link-plain'}>
                        <div ref={this.womensMenu}
                             className="navigation-mega-container flex-mobile-column">
                            <div className={'nav-item-container flex-mobile-column'}>
                                <div className="navigation-mega-menu display-mobile-flex mega-menu-return-link
                                    pr-lg-5 mr-lg-3 ml-lg-auto" onClick={this.handleMenuHide(this.womensMenu)}>
                                    <span className="navigation-mega-menu-header">
                                      <i className="fas fa-arrow-left pr-3"/>
                                      <a href="#" className="transform-none">Back</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column border-left-1-desk pl-lg-5">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Pellentesque Habitant</a></li>
                                        <li><a href="#">Finibus Porttitor</a></li>
                                        <li><a href="#">Fusce</a></li>
                                        <li><a href="#">Elit A Viverra</a></li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Pellentesque Volutpat</a></li>
                                        <li><a href="#">Et Netus</a></li>
                                        <li><a href="#">Vestibulum Porttitor</a></li>
                                        <li><a href="#">Eleifend</a></li>
                                    </ul>
                                </div>
                                <div
                                    className="navigation-mega-menu d-flex flex-column border-right-1-desk pr-5 mr-lg-3">
                                    <span className="navigation-mega-menu-header">Use</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column order-first-mobile">
                                    <a href="/womens-watches" className="navigation-mega-menu-header transform-none">
                                        All Women's Watches
                                        <i className="fas fa-arrow-right pl-3"></i>
                                    </a>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column order-first-mobile display-mobile-flex">
                                    <a href="/womens-watches" className="navigation-mega-menu-header transform-none">
                                        Women's Watches Home
                                        <i className="fas fa-arrow-right pl-3"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span onClick={this.handleMenuToggle(this.womensMenu)}>
                            <p className={'display-mobile-flex navigation-primary-link'}>Women's Watches</p>
                            <a href="/womens-watches" className="display-mobile-none-b navigation-primary-link">Women's Watches</a>
                        </span>
                    </div>
                    <div className={'kenny-nav-item link-plain'}>
                        <div ref={this.bagsMenu}
                             className="navigation-mega-container flex-mobile-column">
                            <div className={'nav-item-container flex-mobile-column'}>
                                <div className="navigation-mega-menu display-mobile-flex mega-menu-return-link
                                    pr-lg-5 mr-lg-3 ml-lg-auto" onClick={this.handleMenuHide(this.bagsMenu)}>
                                    <span className="navigation-mega-menu-header">
                                      <i className="fas fa-arrow-left pr-3"/>
                                      <a href="#" className="transform-none">Back</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column pr-lg-5 mr-lg-3 ml-lg-auto">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">Gear Guide</a>
                                    </span>
                                </div>
                                <div
                                    className="navigation-mega-menu d-flex flex-column ml-0 pl-lg-5 border-left-1-desk">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="bullet-less pt-2">
                                        <li>
                                            <a href={'#'}>Travel Bags</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li><a href="#">Ligula Massa</a></li>
                                        <li><a href="#">Pellentesque Turpis</a></li>
                                        <li><a href="#">Semper Condimentum</a></li>
                                        <li><a href="#">Lorem</a></li>
                                    </ul>
                                </div>
                                <div
                                    className="navigation-mega-menu d-flex flex-column pr-5 border-right-1-desk mr-lg-3">
                                    <span className="navigation-mega-menu-header">Specials</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column order-first-mobile">
                                    <span className="navigation-mega-menu-header">
                                      <a href="/bags" className="transform-none">
                                        All Bags
                                        <i className="fas fa-arrow-right pl-3"></i>
                                      </a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column order-first-mobile display-mobile-flex">
                                    <span className="navigation-mega-menu-header">
                                      <a href="/bags" className="transform-none">
                                        Bags Home
                                        <i className="fas fa-arrow-right pl-3"></i>
                                      </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span onClick={this.handleMenuToggle(this.bagsMenu)}>
                            <p className={'display-mobile-flex navigation-primary-link'}>Bags</p>
                            <a href="/bags" className="display-mobile-none-b navigation-primary-link">Bags</a>
                        </span>
                    </div>
                    <div className={'kenny-nav-item link-plain'}>
                        <div ref={this.apparelMenu}
                             className="navigation-mega-container flex-mobile-column">
                            <div className={'nav-item-container flex-mobile-column'}>
                                <div className="navigation-mega-menu display-mobile-flex mega-menu-return-link
                                    pr-lg-5 mr-lg-3 ml-lg-auto" onClick={this.handleMenuHide(this.apparelMenu)}>
                                    <span className="navigation-mega-menu-header">
                                      <i className="fas fa-arrow-left pr-3"/>
                                      <a href="#" className="transform-none">Back</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex pr-lg-5 mr-lg-3 ml-lg-auto">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">Best Sellers</a>
                                    </span>
                                </div>
                                <div
                                    className="navigation-mega-menu d-flex flex-column ml-0 pl-lg-5 border-left-1-desk">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li>
                                            <a href="#">Integer</a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="navigation-mega-menu d-fex flex-column pr-5 border-right-1-desk mr-lg-3">
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
                                <div className="navigation-mega-menu d-flex order-first-mobile">
                                    <span className="navigation-mega-menu-header">
                                      <a href="/clothing" className="transform-none">
                                        All Clothing & Accessories
                                        <i className="fas fa-arrow-right pl-3"></i>
                                      </a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex order-first-mobile display-mobile-flex display-mobile-flex">
                                    <span className="navigation-mega-menu-header">
                                      <a href="/clothing" className="transform-none">
                                        Clothing & Accessories Home
                                        <i className="fas fa-arrow-right pl-3"></i>
                                      </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span onClick={this.handleMenuToggle(this.apparelMenu)}>
                            <p className={'display-mobile-flex navigation-primary-link'}>Clothing & Accessories</p>
                            <a href="/clothing" className="display-mobile-none-b navigation-primary-link">Clothing & Accessories</a>
                        </span>
                    </div>
                    <div className={'link-plain d-flex justify-content-center align-items-center nav-icons'}>
                        <div className={'d-flex justify-content-center align-items-center px-4'}>
                            <i className="far fa-user-circle text-white"></i>
                        </div>
                        <i className="fas fa-shopping-cart text-white"></i>
                    </div>
                </div>
            </div>
        );
    }
}

render(<Navbar/>, document.getElementById('nav-container'));