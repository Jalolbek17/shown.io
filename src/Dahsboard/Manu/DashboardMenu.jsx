import React from 'react'
import DashboardHome from '../../assets/icons/Dashboard/DashboardHome'
import DashboardCredit from '../../assets/icons/Dashboard/DashboardCredit'
import DashboardNotify from '../../assets/icons/Dashboard/DashboardNotify'
import DashboardPlus from '../../assets/icons/Dashboard/DashboardPlus'
import DashboardSettings from '../../assets/icons/Dashboard/DashboardSettings'
import Arrow from '../../assets/icons/Universal/Arrow'
import Menu from '../../assets/icons/Universal/Menu'
import { Outlet, Link } from "react-router-dom";

const DashboardMenu = () => {
    // const [open, setOpen] = useState(false)

    // const handlMenuToggle = () => {
    //     setOpen(!open);
    // }
    
  return (
    <div  className='dashboard'>
    <div className="dashboardMenu">
        <div  className="dashboardMenu__row">
            <div className="dashboardMenu__info info">
                <div className="info__logo">
                  <Link to='/'>  <p>logo</p> </Link>
                </div>
                <div  className="logo__navbar navbar">
                    <Link to="/newcampain" className="navbar__link"><DashboardHome/><span>Dashboard</span></Link>
                    <Link to="/dcredit" className="navbar__link"><DashboardCredit/><span>Credit</span></Link>
                    <Link to="/notificatons" className="navbar__link"><DashboardNotify/><span>Notifications</span></Link>
                    <Link to="/newcampain" className="navbar__link"><DashboardPlus/><span>Add campain</span></Link>
                </div>
            </div>
            <div className="dashboardMenu__func func">
                <Link to="/settings" role='button' className="func__button">
                    <DashboardSettings/>
                    <span>Settings</span>
                </Link>
                <div className="func__account account">
                    <div className="account__content">
                     <div className="account__logo"><span>C</span></div>
                     <p className="account__name">Corey Bergson</p>
                    </div>
                    <span><Arrow/></span>
                </div>
            </div>
        </div>
        {/* <div className={open ? "dashboardMenu__row dashboardMenu__popup open" : "dashboardMenu__row dashboardMenu__popup"}>
            <div className="dashboardMenu__info info">
                <div className="info__logo">
                    <p>logo</p>
                </div>
                <div className="logo__navbar navbar">
                    <a href="#" className="navbar__link"><DashboardHome/><span>Dashboard</span></a>
                    <a href="#" className="navbar__link"><DashboardCredit/><span>Credit</span></a>
                    <a href="#" className="navbar__link"><DashboardNotify/><span>Notifications</span></a>
                    <a href="#" className="navbar__link"><DashboardPlus/><span>Add campain</span></a>
                </div>
            </div>
            <div className="dashboardMenu__func func">
                <button className="func__button">
                    <DashboardSettings/>
                    <span>Settings</span>
                </button>
                <div className="func__account account">
                    <div className="account__content">
                     <div className="account__logo"><span>C</span></div>
                     <p className="account__name">Corey Bergson</p>
                    </div>
                    <span><Arrow/></span>
                </div>
            </div>
        </div> */}
        {/* <div className="dashboardMenu__mobile mobile">
            <div className="mobile__row">
                <div className="mobile__account account">
                    <div className="account__content">
                     <div className="account__logo"><span>C</span></div>
                     <p className="account__name">Corey Bergson</p>
                    </div>
                    <span><Arrow/></span>
                </div>
                <div className="mobile__burger" onClick={handlMenuToggle}>
                    <Menu/>
                </div>
            </div>
        </div> */}
    </div>
    </div>
  )
}

export default DashboardMenu