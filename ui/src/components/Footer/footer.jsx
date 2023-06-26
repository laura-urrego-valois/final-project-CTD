import { FaFacebookSquare, FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__content">
        <a rel="noreferrer" target="_blank">
          <img className="footer_logo" src="../src/assets/logodb.png" alt='isologodigitalbooking' />
        </a>
        <p>2023 © Digital Booking</p>
      </div>
      <div className='social-icons'>
        <a className='social-media' href="https://www.facebook.com" rel="noreferrer" target="_blank">
          <FaFacebookSquare />
        </a>
        <a className='social-media' href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <AiFillInstagram />
        </a>
        <a className='social-media' href="https://www.tiktok.com" rel="noreferrer" target="_blank">
          <FaTiktok />
        </a>
        <a className='social-media' href="https://www.whatsapp.com" rel="noreferrer" target="_blank">
          <IoLogoWhatsapp />
        </a>
      </div>
    </footer>
  )
}
export default Footer
