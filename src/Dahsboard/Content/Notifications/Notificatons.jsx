import React from 'react'
import DashboardMenu from '../../Manu/DashboardMenu'

const Notificatons = () => {
  return (
    <div id='mainn'>
       <div className="container">
    <DashboardMenu/>
    <div className="notifications">
        <div className="notifications__title">
            <div className="dashcontainer">
            <p>Notifications</p>
            </div>
             </div>
        <div className="dashcontainer">
            <div className="notifications__row">
             <div className="notifications__content content">
                <div className="content__text">
                    <p>You dont have any notifications yet...</p>
                </div>
             </div>
            </div>
        </div>
    </div>
    </div>
    </div>
   
  )
}

export default Notificatons