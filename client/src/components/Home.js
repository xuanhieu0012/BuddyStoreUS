import React from 'react';

import MainPageLoad from './homepage/MainPageLoad'
import TopHeader from './TopHeader'

function Home(){

    return <div>
        <div className="Header-Link">
            <TopHeader />
        </div>
        <div>
            
            <MainPageLoad />
           
        </div>
    </div>
}

export default Home;