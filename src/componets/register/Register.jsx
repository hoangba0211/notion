import React from 'react'
import './Register.css'

function Register() {
    return (
        <div id='register'>
            <div className="register__form">
                <div className="form__user user">
                    <div className="user__info">
                        <label htmlFor="firstname">First name*</label>
                        <input type="text" className='form__input' name='firstname' placeholder='Ada'/>
                    </div>
                    <div className="user__info">
                        <label htmlFor="lastname">Last name*</label>
                        <input type="text" className='form__input' name='lastname' placeholder='Lovelace' />
                    </div>
                </div>
                <div className="form__user">
                    <label htmlFor="email">Work email*</label>
                    <input type="email" className='form__input' name='email' placeholder='ada@lovlace.app' />
                </div>
                <div className="form__user">
                    <label htmlFor="company">Company name*</label>
                    <select name="company" className='form__input'>
                        <option selected defaultValue className='option__default'>Please select...</option>
                        <option value="1 - 19 employess">1 - 19 employess</option>
                        <option value="1 - 19 employess">1 - 19 employess</option>
                        <option value="50 - 99 employess">50 - 99 employess</option>
                        <option value="100 - 999 employess">100 - 999 employess</option>
                        <option value="1000++ employess">1000++ employess</option>
                    </select>
                </div>
                <div className="form__user">
                    <label htmlFor="country">Country or region*</label>
                    <input type="text" className='form__input' name='country' placeholder='Country' />
                </div>
                <div className="form__user user">
                    <div className="user__info">
                        <label htmlFor="password">Password*</label>
                        <input type="password" className='form__input' name='password' placeholder='Password' />
                    </div>
                    <div className="user__info">
                        <label htmlFor="comfPass">Comfirm password*</label>
                        <input type="password" className='form__input' name='comfPass' placeholder='Comfirm password' />
                    </div>
                </div>
                <div className="pass__display">
                    <input type="checkbox" />Show password
                </div>
            </div>
            <div className="form__agree">
                <p>By submitting this form, I acknowledge receipt of the <span className='note'>Notion Privacy Policy.</span></p>
                <p>Fields marked with an asterisk (*) are required.</p>
            </div>
            <div className="form__submit">
                <button className='btn__submit' type='button'>Submit</button>
            </div>
        </div>

    )
}

export default Register