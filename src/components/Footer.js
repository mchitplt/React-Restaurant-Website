import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <p> &copy; 2024 burger.com</p>
        <a href='https://www.instagram.com/mucahityigitpolat' target='_blank' rel="noreferrer"><InstagramIcon /></a>
        <a href="https://www.twitter.com/mucahityigit0" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/mucahit.polat.6" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer