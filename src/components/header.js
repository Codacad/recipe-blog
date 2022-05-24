import React from 'react'
import dots from "../images/6dots.svg"
import photo1 from "../images/photo1.png"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h1>Classic Cheesecake Recipe</h1>
            <div className="decription">
                <img src={dots} alt="" />
                <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
            </div>
            <div className="cake">
                <img src={photo1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header