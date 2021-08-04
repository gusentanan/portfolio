import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import './styles.scss';

export default () => {
    return <div>
        <NavBar isLanding={false}></NavBar>
        <div className="main">
            <div className="navBarSpacer"></div>
            <div className="pageWrapper">
                <div className="landing">
                    <h1>404</h1>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>;
}