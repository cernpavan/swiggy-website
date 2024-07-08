import React from 'react';
import TopBar from '../TopBar';
import ItemsDisplay from '../ItemsDisplay';
import Chain from '../Chain';
import FirmCollection from '../FirmCollection';
import ProductMenu from '../ProductMenu';

const LandingPage = () => {
    return (
        <div>
            <TopBar />
            <div className="landingSection">
                <ItemsDisplay />
                <Chain />
                <hr />
                <FirmCollection />
                <ProductMenu />
            </div>
        </div>
    );
};

export default LandingPage;
