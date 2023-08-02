import React from 'react'
import faceboook from "../Images/facebook.png"
import instagram from "../Images/instagram.png"
import youtube from "../Images/youtube.png"
import linkdin from "../Images/linkedin.png"
import tweeter from "../Images/twitter.png"
import gplay from "../Images/playstore-icon-big_400.webp"
import apple from "../Images/appstore-icon-big_400.webp"
import "../Styles/footer.css"

function Footer() {
  return (
    <footer>
      <div className='part1 formargin5'>
        <div className='sub-part1'>
          <h3 className='part1title'>Shop Non-Stop on Meesho</h3>
          <p className='part1ptag'>Trusted by more than 1 Crore Indians<br />
            Cash on Delivery | Free Delivery</p>
          <div className="f-image">
            <img className='icon1' src={gplay} alt="acx" />
            <img className='icon1' src={apple} alt="sx" />

          </div>

        </div>
      </div>


      <div className='part2 formargin5 abcd'>
        <p>Careers</p>
        <p>Become a supplier</p>
        <p>Hall of Fame</p>
        <p>Sitemap</p>
      </div>





      <div className='part3 formargin5 abcd'>
        <p>Legal and Policies</p>
        <p>Meesho Tech Blog</p>
        <p>Notices and Returns</p>
      </div>



      <div className='part4 formargin5'>
        <h3 className='h3tag'>Reach out to us</h3>
        <div className="iconss">
          <img src={faceboook} alt="icons" />
          <img src={instagram} alt="icons" />
          <img src={youtube} alt="icons" />
          <img src={linkdin} alt="icons" />
          <img src={tweeter} alt="icons" />
        </div>
      </div>




      <div className='part5 formargin5'>
        <h3 className='h3tag'>Contact Us</h3>
        <p className='textlast'>
          Fashnear Technologies Private<br />
          Limited,<br />
          CIN: U74900KA2015PTC082263<br />
          06-105-B, 06-102, (138 Wu) <br />
          Vaishnavi Signature, No. 78/9, <br />
          Outer Ring Road, Bellandur, <br />
          Varthur Hobli, Bengaluru-560103, <br />
          Karnataka, India<br />
          E-mail address: <br />
          query@meesho.com<br />
          © 2015-2023 Meesho.com<br />
        </p>


      </div>
    </footer>
  )
}

export default Footer