import React from 'react'
import Plus from '../../../assets/icons/Universal/Plus'
import DashboardMenu from '../../Manu/DashboardMenu'
import { Link } from 'react-router-dom'

const Newcampain = () => {
  return (
    <div id='mainn'>
        <div className="container">
        <DashboardMenu/>
     <div className="campain">
        <div className="campain__title">
            <div className="dashcontainer">
               <Link to=''> <p>Dashboard</p></Link>
            </div>
        </div>
        <div className="dashcontainer">
            <div className="campain__row">
                <div className="campain__content content">
                    <p className="content__title">Congrats, you’ve made it!</p>
                    <p className='content__subtitle'>This is where all of it starts,click the ‘Add new campain’ button to start your journey </p>
                    <button className="content__button">
                        <p><span><Plus/></span>Add new campain</p>
                    </button>
                </div>
            </div>
        </div>
     </div>
    </div>
    </div>
  
  )
}

export default Newcampain