import { BsChevronRight, BsClock, BsEmojiSmileFill, BsImageFill, BsInfoCircleFill, BsPlusLg, BsStar, BsThreeDots } from "react-icons/bs";
import { ClockCircleOutlined, DoubleLeftOutlined, DownOutlined, SearchOutlined, SettingOutlined, UpOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './User.css'
import { Link } from "react-router-dom";

function User({children}) {
    const [show, setShow] = useState(true)
    const [title, setTitle] = useState()
    const [featureActive, setFeatureActive] = useState(true)
    const styleIcon = {
        fontSize:"2rem",
    }
    useEffect(() => {
        document.title = title
    })
    const handleSideToggle = () => {
        setShow(false)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    console.log(window.location.href);
  return (
        <div id="user">
            {/* Side Bar */}
            <div className={show ? "user__sidebar" : "user__sidebar active"}>
                <div className="sidebar__header">
                    <div className="header__brand">
                        <div className="brand__avt">H</div>
                        <div className="brand__name">Hoàng Văn Ba's Paytion</div>
                        <div className="brand__arrow">
                            <UpOutlined />
                            <DownOutlined />
                        </div>
                        <div className="sidebar__toggle">
                            <button onClick={handleSideToggle} className='btn__toggle'><DoubleLeftOutlined /></button>
                        </div>
                    </div>
                    <div className="header__option">
                        <div className="option__item">
                            <SearchOutlined />
                            <span className="item__name">
                                Search
                            </span>
                        </div>
                        <div className="option__item">
                            <ClockCircleOutlined/>
                            <span className="item__name">
                                Update
                            </span>
                        </div>
                        <div className="option__item">
                            <SettingOutlined />
                            <span className="item__name">
                                Setting & members
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sidebar__features">
                    <div className={
                            window.location.href === "http://localhost:3000/personal"
                            ?"feature__item my__row active"
                            : "feature__item my__row"
                            }
                        >
                        <div className="feature__toggle my__row">
                            <BsChevronRight/>
                        </div>
                        <div className="feature__icon my__row">
                            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3e1.svg" alt="Personal Home" />
                        </div>
                        <div className="feature__name">
                            <Link to="/personal">Personal Home</Link>
                        </div>
                        <div className="feature__setting">
                            <div className="setting__icon my__row">
                                <BsThreeDots/>
                            </div>
                            <div className="setting__icon my__row">
                                <BsPlusLg/>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={
                            window.location.href === "http://localhost:3000/expenditure"
                            ?"feature__item my__row active"
                            : "feature__item my__row"
                            }
                        >
                        <div className="feature__toggle my__row">
                            <BsChevronRight/>
                        </div>
                        <div className="feature__icon my__row">
                            <img src="https://i.pinimg.com/236x/ae/6c/1e/ae6c1ebd6a48a45af60015ae0512e7ae.jpg" alt="money" />
                        </div>
                        <div className="feature__name">
                            <Link to="/expenditure">Expenditure</Link>
                        </div>
                        <div className="feature__setting">
                            <div className="setting__icon my__row">
                                <BsThreeDots/>
                            </div>
                            <div className="setting__icon my__row">
                                <BsPlusLg/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user__container">
                {/* Navbar */}
                <div className="user__navbar">
                    <div className="navbar__brand">
                        <div className="brand__icon">
                            <img src="https://i.pinimg.com/236x/ae/6c/1e/ae6c1ebd6a48a45af60015ae0512e7ae.jpg" alt="money" />
                        </div>
                        <div className="brand__name">
                            {} / {title? title : "Untitled"}
                        </div>
                    </div>
                    <div className="navbar__right">
                        <div className="nav__share">
                            <button className="btn__share">Share</button>
                        </div>
                        <div className="nav__item">
                            <BsClock style={{fontSize:"1.8rem"}}/>
                        </div>
                        <div className="nav__item">
                            <BsStar style={styleIcon}/>
                        </div>
                        <div className="nav__item">
                            <BsThreeDots style={styleIcon}/>
                        </div>
                    </div>
                </div>
                {/* Features */}
                <div className="user__features">
                    <div className="feature__header">
                        <div className="feature__add">
                            <div className="add__item">
                                <BsEmojiSmileFill/>
                                <span>Add icon</span>
                            </div>
                            <div className="add__item">
                                <BsImageFill/>
                                <span>Add cover</span>
                            </div>
                            <div className="add__item">
                                <BsInfoCircleFill/>
                                <span>Add description</span>
                            </div>
                        </div>
                        <div className="feature__title">
                            <input type="text" onChange={handleTitle} placeholder="Untitled" />
                        </div>
                    </div>
                    {/* Container */}
                    <div className="feature__container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default User