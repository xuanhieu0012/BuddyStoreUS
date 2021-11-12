import React from 'react';
import BestProduct from './BestProduct'
import FeatureProduct from './FeatureProduct'
import NavBar from './NavBar'
import  {ImageData}   from "./ImageData"
import ImageSlider from './ImageSlider'
import VideoProduct from './VideoProduct';
import Testimoials from './Testimonials';
function MainPageLoad(){

    return <div>
        <NavBar />
        <ImageSlider ImageData={ImageData}/>
        {/* <BestProduct /> */}
        <FeatureProduct />
        <VideoProduct />
        <Testimoials />
    </div>
}

export default MainPageLoad;