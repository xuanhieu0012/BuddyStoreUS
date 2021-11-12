import React from 'react';
import fucoidan from '../../asset/fucoidan.mp4'
import logoTrans from '../../asset/logoTrans.png'
function VideoProduct(){

    return <div className="Logo-banner-video">
        
        <iframe 
            className="crackleIFrame"
            width="800" 
            height="500" 
            scrolling="no"
            src={fucoidan}
            title="Crackle video player" 
            frameBorder="0" 
            allow="accelerometer; encrypted-media; autoplay;" allowFullScreen>
        </iframe>
        <img src={logoTrans} alt="BuddyStore-Logo" />
</div>  
}

export default VideoProduct;