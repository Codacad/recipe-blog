import React from 'react'

const CoockingDuration = () => {
  return (
    <div className='coocking-duration'>
       <div className="contents">
            <div className="serving box">
                <img src="images/dining.svg" alt="" />
                <div className="content">
                    <span className='yeild'>Yeild</span>
                    <span className='servings'>12 Servings</span>
                </div> 
            </div>
            <div className="prep-time box">
                <img src="images/time.svg" alt="" />
                <div className="content">
                    <span className='preptime'>Prep Time</span>
                    <span className='minutes'>45 Minutes</span>
                </div> 
            </div>
            <div className="serving box">
                <img src="images/time.svg" alt="" />
                <div className="content">
                    <span className='cook-time'>Cook Time</span>
                    <span className='hour'>1 Hour</span>
                </div> 
            </div>
            <div className="serving box">
                <img src="images/time.svg" alt="" />
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