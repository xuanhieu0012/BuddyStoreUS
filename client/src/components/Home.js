import React from 'react';

import MainPageLoad from './homepage/MainPageLoad'
import TopHeader from './TopHeader'

function Home({handleCartData}){

    return <div>
        <div className="Header-Link">
            <TopHeader />
        </div>
        <div>
            
            <MainPageLoad handleCartData={handleCartData} />
           
        </div>
    </div>
}

export default Home;