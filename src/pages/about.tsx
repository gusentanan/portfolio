import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


import './styles.scss';

export default () => {
    return <div>
        <NavBar isLanding={false}></NavBar>
        <div className="quotes">
            <div className="navBarSpacer"></div>
            <div className="pageWrapper">
                <div className="quotesTextHeader">
                    <span className="quotesInverted">I Putu Bagus Merta Sentana</span><br></br>
                </div>
                <div className="navBarSpacer"></div>
                <div className="quotesTextHeaderMini">
                Hey, I`m currently attending the University of Udayana for <span className="quotesInverted">Computer Science. </span>  <br></br>
                I spend a lot of my time thinking about how to be <span className="quotesInverted">happy.</span> I like to write code, learning new stuff that related to technology, and sleep a lot. <br></br>
                <br></br>
                Enjoy the site, and please get in touch through any of the links in my homepage.
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>;
}