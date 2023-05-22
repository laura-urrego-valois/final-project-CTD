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
          <img className="footer__icon" src="../src/assets/ico-facebook.png" alt='ico-facebook' />
        </a>
        <a className='social-media' href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <img className="footer__icon" src="../src/assets/ico-instagram.png" alt='ico-instagram' />
        </a>
        <a className='social-media' href="https://www.tiktok.com" rel="noreferrer" target="_blank">
          <img className="footer__icon" src="../src/assets/ico-tiktok.png" alt='ico-tiktok' />
        </a>
        <a className='social-media' href="https://www.whatsapp.com" rel="noreferrer" target="_blank">
          <img className="footer__icon" src="../src/assets/ico-whatsapp.png" alt='ico-whatsapp' />
        </a>
      </div>
    </footer>
  )
}
export default Footer
