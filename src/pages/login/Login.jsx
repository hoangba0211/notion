import React, { useState } from 'react'
import Footer from '../../componets/footer/Footer'
import Nav from '../../componets/nav/Nav'
import '../../index.css'
import './Login.css'
import {ArrowRightOutlined} from '@ant-design/icons';
import Register from '../../componets/register/Register'
import Sign from '../../componets/sigin/SignIn'

function Login() {
  const [statusForm, setStatusForm] = useState({status:"Sign in", form:"Register"})
  const [isChange, setIsChange] = useState(true)
  const handleLogin = () => {
    setIsChange(!isChange)
    if(isChange) {
      setStatusForm({status:"Register", form:"Sign In"})
    }else{
      setStatusForm({status:"Sign In", form:"Register"})
    }
  }
  return (
    <>
      <Nav>
        <div id="login">
          <div className="wrapper">
            <div className="login__user">
              {/* Login Service */}
              <div className="login__service">
                <p className="service__title">Let’s explore how Notion can work for you</p>
                <div className="service__support">
                  <div className="service__item">
                    <span className='item__icon'><i className="uil uil-check"></i></span>
                    <div className="item__content">
                      <p>One flexible tool for your entire company to share knowledge, ship projects, and collaborate.</p>
                    </div>
                  </div>
                  <div className="service__item">
                    <span className='item__icon'><i className="uil uil-check"></i></span>
                    <div className="item__content">
                      <p>Enterprise features to securely manage user access and security.</p>
                    </div>
                  </div>
                  <div className="service__item">
                    <span className='item__icon'><i className="uil uil-check"></i></span>
                    <div className="item__content">
                      <p>Dedicated support to work with you on your setup and help you build the best plan for your company.</p>
                    </div>
                  </div>
                </div>
                <div className="support__visit">Looking for support? <span className='note'>Visit help & documentation</span></div>
              </div>
              {/* Register */}
              <div className='login__func'>
                <div className="login__title">{statusForm.form}</div>
                {isChange? (<Register/>):(<Sign/>)}
              </div>
              <div className="login__change">
                <button className='btn__change' onClick={handleLogin}>{statusForm.status}</button>
                <ArrowRightOutlined/>
              </div>
            </div>
            <hr className='hr' />
            {/* Login Propagate */}
            <div className="login__propagate">
              <p className="propa__title">Keeping teams of tens and thousands connected</p>
              <div className="propa__teams">
                <div className="items__logo">
                  <img src="https://www.notion.so/front-static/shared/logos/color/pixar.png" alt="Pixar" />
                </div>
                <div className="items__logo">
                  <img src="https://www.notion.so/front-static/shared/logos/color/curology.png" alt="Curology" />
                </div>
                <div className="items__logo">
                  <img src="https://www.notion.so/front-static/shared/logos/color/loom.png" alt="Loom" />
                </div>
                <div className="items__logo">
                  <img src="https://www.notion.so/front-static/shared/logos/color/match-v2.png" alt="Match group" />
                </div>
                <div className="items__logo">
                  <img src="https://www.notion.so/front-static/shared/logos/color/headspace.png" alt="Headspace" />
                </div>
              </div>
              <div className="props__cmt">
                <p>
                  “Notion’s ease of use is one of its hallmarks. It helps you visually navigate content and remember where something is.”
                </p>
                <div className="team__member">
                  <div className="member__avatar">
                    <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/marie-szuts.png" alt="avatar" />
                  </div>
                  <div className="member__identity">
                    <p className='member__name'>Marie Szuts</p>
                    <p className='member__job'>Head of People Ops</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr" />
            <Footer></Footer>
          </div>
        </div>
      </Nav>
    </>
  )
}

export default Login