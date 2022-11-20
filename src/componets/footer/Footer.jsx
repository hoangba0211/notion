import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    const [drop, setDrop] = useState(true)
    const showDropLang = () => {
       setDrop(!drop)
    }
    return (
        <div id='footer'>
            <div className="footer__container">
                <div className="footer__info footer__notion">
                    <div className="notion__logo">
                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png" alt="logo" />
                    </div>
                    <span className='notion__name'>Notion</span>
                </div>
                <div className="footer__info">
                    <div className="info__title">Product</div>
                    <div className="info__content">
                        <Link>Overview</Link>
                        <Link>Pricing</Link>
                        <Link>Customer stories</Link>
                        <Link>Connections</Link>
                        <Link>Desktop apps</Link>
                        <Link>Mobile apps</Link>
                        <Link>Web Clipper</Link>
                        <Link>Security</Link>
                        <Link>Terms & privacy</Link>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="info__title">Notion for</div>
                    <div className="info__content">
                        <Link>Enterprise</Link>
                        <Link>Small business</Link>
                        <Link>Remote work</Link>
                        <Link>Startups</Link>
                        <Link>Desktop apps</Link>
                        <Link>Nonprofits</Link>
                        <Link>Engineering</Link>
                        <Link>Product</Link>
                        <Link>Design</Link>
                        <Link>Managers</Link>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="info__title">Resources</div>
                    <div className="info__content">
                        <Link>Blog</Link>
                        <Link>Guides & tutorials</Link>
                        <Link>Help center</Link>
                        <Link>Webinars</Link>
                        <Link>Template gallery</Link>
                        <Link>Community</Link>
                        <Link>What’s new</Link>
                        <Link>Become an affiliate</Link>
                        <Link>Switch from Evernote</Link>
                        <Link>Switch from Confluence</Link>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="info__title">Templates</div>
                    <div className="info__content">
                        <Link>Company home</Link>
                        <Link>Meeting notes</Link>
                        <Link>To-dos</Link>
                        <Link>Weekly agenda</Link>
                        <Link>Docs</Link>
                        <Link>Roadmap</Link>
                        <Link>Design system</Link>
                        <Link>New hire onboarding</Link>
                        <Link>Product wiki</Link>
                        <Link>Content calendar</Link>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="info__title">Company</div>
                    <div className="info__content">
                        <Link>About us</Link>
                        <Link>Careers</Link>
                        <Link>Media kit</Link>
                        <Link>Contact sales</Link>
                        <Link>Contact support</Link>
                        <Link>Email us</Link>
                    </div>
                </div>
            </div>
            <hr className="hr" />
            <div className="footer__orther">
                <div className="footer__left display-flex">
                    <div className="footer__item" onClick={showDropLang}>
                       <span><i className="uil uil-globe"></i></span> English <span><i className="uil uil-angle-down"></i></span>
                        <div className={drop?'dropdown hidden':'dropdown'}>
                            <div className="drop__item">
                                <div className='drop__name'>English</div>
                                <p className='drop__des'>English (US)</p>
                            </div>
                            <div className="drop__item">
                                <div className='drop__name'>한국어</div>
                                <p className='drop__des'>한국어</p>
                            </div>
                            <div className="drop__item">
                                <div className='drop__name'>日本語</div>
                                <p className='drop__des'>日本語</p>
                            </div>
                            <div className="drop__item">
                                <div className='drop__name'>Français (France)</div>
                                <p className='drop__des'>프랑스어</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__item">Cookie settings</div>
                    <div className="footer__item item__status">Status</div>
                    <div className="footer__item">©2022 Notion Labs, Inc.</div>
                </div>
                <div className="footer__social display-flex">
                    <div className="social__item"><i className="uil uil-twitter"></i></div>
                    <div className="social__item"><i className="uil uil-linkedin"></i></div>
                    <div className="social__item"><i className="uil uil-youtube"></i></div>
                    <div className="social__item"><i className="uil uil-instagram"></i></div>
                    <div className="social__item"><i className="uil uil-youtube"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Footer