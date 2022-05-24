import React from 'react'
import diningImg from '../images/dining.svg'
import timeImg from '../images/time.svg'


const CoockingDuration = () => {
  return (
    <div className='coocking-duration'>
       <div className="contents">
            <div className="serving box">
                <img src={diningImg} alt="" />
                <div className="content">
                    <span className='yeild'>Yeild</span>
                    <span className='servings'>12 Servings</span>
                </div> 
            </div>
            <div className="prep-time box">
                <img src={timeImg} alt="" />
                <div className="content">
                    <span className='preptime'>Prep Time</span>
                    <span className='minutes'>45 Minutes</span>
                </div> 
            </div>
            <div className="serving box">
                <img src={timeImg} alt="" />
                <div className="content">
                    <span className='cook-time'>Cook Time</span>
                    <span className='hour'>1 Hour</span>
                </div> 
            </div>
            <div className="serving box">
                <img src={timeImg} alt="" />
                <div className="content">
                    <span className='total-time'>Total Time</span>
                    <span className='total-hours'>7.75 Hours</span>
                </div> 
            </div>
       </div>
    </div>
  )
}

export default CoockingDuration