import React, {useState} from "react"


import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const ImageSliderForFeatureProduct = ({ImageData}) =>{

    const [image, setImage]= useState(0)
    const length = ImageData.length
    const nextSlide = () =>{
        setImage(image === length - 1 ? 0 : image + 1)
    }
    
    const prevSlide =() =>{
        setImage(image === 0 ? length - 1 : image -1)
    }
    return (
        <section className="image-feature-product-container">
            <FiChevronLeft className ="left-arrow-feature" onClick={prevSlide}/>
            <FiChevronRight className ="right-arrow-feature" onClick={nextSlide} />
        {ImageData.map((slide, index) =>{
            return (
                <div className={index === image ? 'slide active' : 'slide'} key={index}>
                {index === image && (<img src={slide} alt='product' className='imageProduct-feature' />
                )} 
                </div>
               
            )
        })}
        </section>
    )

}

export default ImageSliderForFeatureProduct