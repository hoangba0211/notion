import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import paypal from './../../assets/img/paypal.png'
function Nav({children}) {
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setNavbar(window.scrollY >= 80)
        }
        window.addEventListener('scroll', handleScroll)

    }, [])
    return (
        <>
        <div id='header' className={navbar ? 'sticky' : ''}>
            <div className="header__wrapper">
                <div className="navbar"> 
                    <div className="nav__logo">
                        <img src={paypal} alt='logo' />
                    </div>
                    <div className="nav__item nav__banner">
                        Paytion
                    </div>
                    <div className="nav__item">
                        <span className='item__name'>Product</span>
                        <div className="nav__drop">
                            <div className="drop__item">
                                <Link to="/home" className='drop__link'>
                                    Home
                                    <p className='drop__des'>Doc, projects & wiki</p>
                                </Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>
                                    Template gallery
                                    <p className='drop__des'>Setups to get you started</p>
                                </Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Customer stories
                                    <p className='drop__des'>See how team use Paytion</p>
                                </Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Connections
                                    <p className='drop__des'>Connect your tools to Paytion</p>
                                </Link>
                            </div>
                            <div className="drop__item drop__down">
                                <button className='btn btn-downpay'><Link className='drop__link'>Download Paytion</Link></button>
                                <p className='drop__des'>Mac, windows, IOS, & Android</p>
                            </div>
                        </div>
                    </div>
                    <div className="nav__item">
                        <span className='item__name'>Download</span>
                        <div className="nav__drop">
                            <div className="drop__item">
                                <Link className='drop__link'>iOS & Android </Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Mac & Window</Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Wed Clipper</Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav__item">
                        <span className='item__name'>Solutions</span>
                        <div className="nav__drop nav__solutions">
                            <div className="nav__drop--sol">
                                <p className="drop__title--sol">BUY TEAM SIZE</p>
                                <div className="drop__item">
                                    <Link className='drop__link'>Enterprise
                                        <p className='drop__des'>Advanced features for your org</p>
                                    </Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Small business
                                        <p className='drop__des'>Run your team on one tool</p>
                                    </Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Personal
                                        <p className='drop__des'>Free for individual</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="nav__drop--sol">
                                <p className="drop__title--sol">BUY TEAM FUNCTION</p>
                                <div className="drop__item">
                                    <Link className='drop__link'>Design</Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Engineering</Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Product</Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Managers</Link>
                                </div>
                            </div>
                            <div className="nav__drop--sol">
                                <p className="drop__title--sol">PAYTION FOR</p>
                                <div className="drop__item">
                                    <Link className='drop__link'>Startups</Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Remote word</Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Education</Link>
                                </div>
                                <div className="drop__item">
                                    <Link className='drop__link'>Nonprofits</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="nav__item" >
                        <span className='item__name'>Resources</span>
                        <div className="nav__drop">
                            <div className="drop__item">
                                <Link className='drop__link'>Blog</Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Guides & turorial</Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Webinars</Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Help center</Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>API docs</Link>
                            </div>
                            <div className="drop__item">
                                <Link className='drop__link'>Community</Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav__item">
                        Pricing
                    </div>

                </div>
                <div className="navbar nav__right">
                    <div className="nav__right--user">
                        <Link to="/product-demo" className='nav__item nav__req'>Request a demo</Link>
                        <Link to="/login" className='nav__item'>Log in</Link>
                    </div>
                    <div className="btn__try">
                        <Link to="sigin" className='btn__try--link'>Try Paytion free</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            {children}
        </div>
        </>
    )
}

export default Nav