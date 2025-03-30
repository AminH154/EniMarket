import React from 'react'
import './Info.css'
import { assets } from '../../assets/assets'
const Info = () => {
  return (
    <div className='Images'>
        <div className="ImageRight">
            <h1>Vous avez quelque chose à vendre?</h1>
            <button>
                publier une annonce
            </button>
            <img src={assets.image3} alt="" className='img1' >
            </img>
        </div>
      <div className="derection">
      <div className="ImgLeft">
        <h1>Publier une  annonce</h1>
            <button>
                publier
            </button>  
            <img src={assets.connect} alt="" />
            
        </div>
        <div className="ImgButtom">
            <img src={assets.annonce} alt="" />
        </div>


      </div>
      
    
       
      
    </div>
  )
}

export default Info
