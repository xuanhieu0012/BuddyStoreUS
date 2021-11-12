import React, {useState} from "react"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({ImageData}) =>{
   console.log()
    const [image, setImage]= useState(0)
    const length = ImageData.length
    const nextSlide = () =>{
        setImage(image === length - 1 ? 0 : image + 1)
    }
    
    const prevSlide =() =>{
        setImage(image === 0 ? length - 1 : image -1)
    }
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className ="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className ="right-arrow" onClick={nextSlide} />
        {ImageData.map((slide, index) =>{
            return (
                <div className={index === image ? 'slide active' : 'slide'} key={index}>
                {index === image && (<img src={slide.image} alt='product' className='imageProduct' />
                )} 
                </div>
               
            )
        })}
        </section>
    )

}

export default ImageSlider