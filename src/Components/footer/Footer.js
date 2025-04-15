import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <footer className='Footer-container Footer-container-max-768 Footer-container-min-768'dir='rtl'>
        <div className="Footer-link-container Footer-link-container-max-768 Footer-link-container-min-768">
            <div className="Footer-link-title Footer-link-title-max-768 Footer-link-title-min-768">لینک های مفید</div>
            <ul className="Footer-links">
                <li className='Footer-link-item Footer-link-item-max-768 Footer-link-item-min-768'><Link className='Footer-link' to="/">صفحه اصلی</Link></li>
                <li className='Footer-link-item Footer-link-item-max-768 Footer-link-item-min-768'><Link className='Footer-link' to="/product">محصولات</Link></li>
                <li className='Footer-link-item Footer-link-item-max-768 Footer-link-item-min-768'><Link className='Footer-link' to="/usage">آموزش</Link></li>
            </ul>
        </div>
        <div className="Footer-social-container Footer-social-container-max-768 Footer-social-container-min-768">
            <div className="Footer-social-title Footer-social-title-max-768 Footer-social-title-min-768">شبکه های اجتماعی</div>
            <ul className="Footer-social-links Footer-social-links-max-768 Footer-social-links-min-768">
                <li className='Footer-social-link-item'><a className='Footer-social-link' href=""><InstagramIcon className='Footer-social-link-icon-max-768 Footer-social-link-icon-min-768 ' /></a></li>
                <li className='Footer-social-link-item'><a className='Footer-social-link' href=""><TelegramIcon className='Footer-social-link-icon-max-768 Footer-social-link-icon-min-768 ' /></a></li>
            </ul>
        </div>
        <div className="Footer-contact-container Footer-contact-container-max-768 Footer-contact-container-min-768">
            <div className="Footer-contact-title Footer-contact-title-max-768 Footer-contact-title-min-768">ارتباط با ما</div>
            <div className="Footer-contact-tel Footer-contact-tel-max-768 Footer-contact-tel-min-768">
                <span>شماره تماس :</span>
                <span dir='rtl'>0912-661-3301</span>
            </div>
        </div>
    </footer>
  )
}