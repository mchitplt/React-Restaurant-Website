import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg"
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Burger</h1>
        <p>Delicious Hamburgers <br />
          Burger world</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
