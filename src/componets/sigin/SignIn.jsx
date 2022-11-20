import { AppleFilled, GoogleOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
    return (
        <>
        <div id='signin'>
            <div className="login__form">
                <div className="form__user">
                    <button className='btn__signin'><GoogleOutlined className='icon'/>Countinue with Google</button>
                    <button className='btn__signin'><AppleFilled className='icon'/>Countinue with Apple</button>
                </div>
                <hr className="hr"/>
                <div className="form__user">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form__input' name='email' placeholder='ada@lovlace.app' />
                </div>
                <div className="form__user user">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form__input' name='password' placeholder='Password' />
                </div>
                <div className="form__manual">
                    <div className="pass__display">
                        <input type="checkbox" />Show password
                    </div>
                    <div className="forgot__pass">
                        <Link>Forgot Password?</Link>
                    </div>
                </div>
                
            </div>
            <div className="form__submit">
                <button className='btn__submit' type='button'>Submit</button>
            </div>
        </div>
        <div className="signin__manual">
                <p>By clicking “Continue with Apple/Google/Email” above, you acknowledge that you have read and understood. <br /> Agree to Notion's <span className='note'>Teams and Conditions</span> and <span className='note'>Privacy Policy</span>.</p>
            </div>
        </>
    )
}

export default SignIn