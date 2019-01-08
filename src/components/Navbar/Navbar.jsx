import React, {Component} from 'react';
import {render} from 'react-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-center flex-column bg-black navigation-landed">
                <div className="nav-header d-flex justify-content-around align-items-center
                                text-white w-100 wrap-20">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="pr-3"><i className="fas fa-search"></i></span>
                            </div>
                            <input type="text" className="bg-transparent border-0" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-righteous link-plain">
                        <h1 className="mr-3"><a href="#" className="text-white">KENNEDY</a></h1>
                        <h2>
                            <i className="far fa-gem"></i>
                        </h2>
                    </div>
                    <div className="d-flex justify-content-around align-items-center p-relative">
                        <a className="link-plain text-white mr-5">Find Stores</a>
                        <div className="d-flex justify-content-center align-items-center" id="sign-in">
                            <div className="user-info-input d-flex justify-content-center
                                            align-items-center flex-column">
                                <h5 className="font-weight-bold text-dark">Login for an easier checkout</h5>
                                <input type="button" value="Login" className="text-white btn-input-lg bg-black my-4"/>
                                <span className="text-dark text-underline">Don't have an account yet?&nbsp;<a href="#">Sign up</a></span>
                            </div>
                            <a className="link-plain text-white mr-5 p-0 navigation-primary-link
                                            transform-none">Sign In</a>
                        </div>
                        <i className="fas fa-shopping-cart mr-5"></i>
                    </div>
                </div>
                <div className="navigation text-white d-flex justify-content-center">
                    <ul className="d-flex justify-content-center bullet-less link-plain p-relative w-100 mb-0">
                        <li className="navigation-mega-item d-flex">
                            <div className="navigation-mega-container d-flex justify-content-center w-100">
                                <div className="navigation-mega-menu d-flex flex-column"></div>
                                <div className="navigation-mega-menu d-flex flex-column border-left pl-5">
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
                                <div className="navigation-mega-menu d-flex flex-column border-right pr-5">
                                    <span className="navigation-mega-menu-header">Use</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0">
                                    <a href="#" className="navigation-mega-menu-header transform-none">
                                        All Men's Watches
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <a href="#" className="navigation-primary-link">Men's Watches</a>
                        </li>
                        <li className="navigation-mega-item d-flex">
                            <div className="navigation-mega-container d-flex justify-content-center w-100">
                                <div className="navigation-mega-menu d-flex flex-column">
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column border-left pl-5">
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
                                <div className="navigation-mega-menu d-flex flex-column border-right pr-5">
                                    <span className="navigation-mega-menu-header">Use</span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0">
                                    <a href="#" className="navigation-mega-menu-header transform-none">
                                        All Women's Watches
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <a href="#" className="navigation-primary-link">Women's Watches</a>
                        </li>
                        <li className="navigation-mega-item d-flex">
                            <div className="navigation-mega-container d-flex justify-content-center w-100">
                                <div className="navigation-mega-menu d-flex flex-column ml-0">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">Gear Guide</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0 pl-5 border-left">
                                    <span className="navigation-mega-menu-header">Collections</span>
                                    <ul className="bullet-less pt-2">
                                        <li>
                                            <a>Travel Bags</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column pr-5 border-right">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="bullet-less pt-2">
                                        <li>
                                            <a>Travel Bags</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">
                                        All Bags
                                        <i className="fas fa-arrow-right"></i>
                                      </a>
                                    </span>
                                </div>
                            </div>
                            <a href="#" className="navigation-primary-link">Bags</a>
                        </li>
                        <li className="navigation-mega-item d-flex">
                            <div className="navigation-mega-container d-flex justify-content-center w-100">
                                <div className="navigation-mega-menu d-flex">
                                    <span className="navigation-mega-menu-header">
                                      <a href="#" className="transform-none">Best Sellers</a>
                                    </span>
                                </div>
                                <div className="navigation-mega-menu d-flex flex-column ml-0 pl-5 border-left">
                                    <span className="navigation-mega-menu-header">Styles</span>
                                    <ul className="pt-2 bullet-less">
                                        <li>
                                            <a href="#">Integer</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-mega-menu d-fex flex-column mr-0 pr-5 border-right">
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
                            <a href="#" className="navigation-primary-link">Clothing & Accessories</a>
                        </li>
                        <li className="d-flex px-4">
                            <a href="#" className="navigation-primary-link after-none">
                                <span className="text-muted border-left pl-5">Stores</span>
                            </a>
                        </li>
                        <li className="mega-menu-underlay bg-black border-top"></li>
                    </ul>
                </div>
            </div>
        );
    }
}

render(<Navbar/>, document.getElementById('nav-container'));