import React from 'react'
import DashboardMenu from '../../Manu/DashboardMenu'

const Credit = () => {
  return (
    <div id='mainn'>
         <div className="container">
    <DashboardMenu/>
    <div className="credit">
        <div className="credit__title">
            <div className="dashcontainer">
             <p>Credit</p>
            </div>
        </div>
        <div className="dashcontainer">
            <div className="credit__row">
                <div className="credit__content content">
                    <div className="content__text text">
                        <p className="text__title">Showen credits</p>
                        <p className='text__subtitle'>Streamline your advertising strategy and unlock the convenience of Shown Credits for seamless budget management across platforms.</p>
                    </div>
                    <div className="content__card card">
                        <div className="card__content">
                            <div className="card__title title">
                                <div className="title__logo"></div>
                                <p>Balance</p>
                            </div>
                            <div className="card__info info">
                                <div className="info__item item">
                                    <p className="item__title">SPENT</p>
                                    <p className="item__sub">$0</p>
                                </div>
                                <div className="info__item item">
                                    <p className="item__title">REMAINING</p>
                                    <p className="item__sub">$0</p>
                                </div>
                                <div className="info__item item">
                                    <p className="item__title">NEXT BILLING DATE ?</p>
                                    <p className="item__sub">01/01</p>
                                </div>
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

export default Credit