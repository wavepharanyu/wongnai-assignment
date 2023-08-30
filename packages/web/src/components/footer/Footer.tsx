import './Footer.scss'


const Footer = (
  props: {open : string, close: string}
) => (
  <div className='footer-container'>
    <div className='footer-image'>
        <img className='image' src="/images/clock.png" alt="logo"/>
    </div>
    <div className='footer-detail'>
      <p className='text'>เวลาเปิด-ปิด: {props.open} - {props.close}</p>
    </div>
  </div>
);

export default Footer;