import React from 'react'
import FooterFace from '../../assets/icons/FooterFace'
import FooterX from '../../assets/icons/FooterX'
import Footeryout from '../../assets/icons/Footeryout'
import Footerinsta from '../../assets/icons/Footerinsta'
import FooterP from '../../assets/icons/FooterP'
import FooterMail from '../../assets/icons/FooterMail'
import FooterTel from '../../assets/icons/FooterTel'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__cantact">
                        <div className="">
                            <div className="footer__logo">
                                <a href="/">
                                    LOGO
                                </a>
                            </div>
                            <div className="footer__title">
                                <h1>A platform to manage all of your ads in one place</h1>
                            </div>
                            <div className="footer__icons">
                                <button><FooterFace /></button>
                                <button><FooterX /></button>
                                <button><Footeryout /></button>
                                <button><Footerinsta /></button>
                                <button><FooterP /></button>
                            </div>
                        </div>

                        <div className="">
                            <div className="footer__leftcan">
                                <div className="footer__sub">
                                    Service
                                </div>
                                <div className="footer__titless">
                                    <Link to='google'>  <button className="footer__ads">Google ads </button></Link>
                                    <Link to='insta'>   <button className="footer__ads">Instagram ads</button></Link>
                                    <Link to='facebook'>    <button className="footer__ads">Facebook ads</button></Link>
                                    <Link to='mcrs'>    <button className="footer__ads">Microsoft ads</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="footer__other">
                        <div className="footer__leftcan">
                            <div className="footer__sub">
                                Other
                            </div>
                            <div className="footer__titless">
                                <button className="footer__adss">Pricing</button>
                                <button className="footer__ads">Location</button>
                                <button className="footer__ads">About us</button>
                                <button className="footer__ads">Contact Support</button>
                            </div>
                        </div>
                        <div className="footer__leftcan">
                            <div className="footer__sub">
                                Contact
                            </div>
                            <div className="footer__titless">
                                <button className="footer__adss"><span><FooterMail /></span> companyname@email.com</button>
                                <button className="footer__ads"><span><FooterTel /></span> Contact</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer__linx">
                <div className="container">
                    <div className="footer__linx">
                        <div className="footer__mail">
                            © 2023 Company name. All rights reserved
                        </div>
                        <a href='https://t.me/seniordevuz' className="footer__after">
                            Site by LINX GROUP
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer