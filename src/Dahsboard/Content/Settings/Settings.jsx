import React from 'react'
import DashboardMenu from '../../Manu/DashboardMenu'
import Mail from '../../../assets/icons/Universal/Mail'
import Telegram from '../../../assets/icons/Universal/Telegram'

const Settings = () => {
  return (
   <div id='mainn'>
    <div className="container">
    <DashboardMenu/>
    <div className="settings">
        <div className="settings__title">
            <div className="dashcontainer">
             <p>Settings</p>
            </div>
        </div>
        <div className="dashcontainer">
            <div className="settings__row">
                <div className="settings__content content">
                    <div className="content__title">
                        <p>Account settings</p>
                    </div>
                    <div className="content__form form">
                        <div className="form__item item">
                            <div className="item__text">
                                <p>Email</p>
                                <span>Edit</span>
                            </div>
                            <div>
                                <label className='item__label' htmlFor="email"></label>
                                <input className='item__input' type="email" required placeholder='Enter a valid email address' id='email'/>
                            </div>
                        </div>
                        <div className="form__item item">
                            <div className="item__text">
                                <p>First name</p>
                                <span>Edit</span>
                            </div>
                            <div>
                                <input className='item__input' type="text" required placeholder='John' id='email'/>
                            </div>
                        </div>
                        <div className="form__item item">
                            <div className="item__text">
                                <p>Last name</p>
                                <span>Edit</span>
                            </div>
                            <div>
                                <label htmlFor="email"></label>
                                <input className='item__input' type="text" required placeholder='Doe' id='email'/>
                            </div>
                        </div>
                        <div className="form__item item">
                            <div className="item__text">
                                <p>Telegram</p>
                                <span>Edit</span>
                            </div>
                            <div>
                                <label className='item__label' htmlFor="email"></label>
                                <input className='item__input' type="text" required placeholder='Enter your working telegram username or number' id='email'/>
                            </div>
                        </div>
                        <div className="form__item item">
                            <div className="item__text">
                                <p>Password</p>
                                <span>Edit</span>
                            </div>
                            <div className='item__wrapper`27J'>
                                <label className='item__label' htmlFor="email"></label>
                                <input className='item__input' type="password" required placeholder='Enter password' id='email'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Settings