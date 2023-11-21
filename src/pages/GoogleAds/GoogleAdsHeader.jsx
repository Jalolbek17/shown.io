import React from 'react'


function GoogleAdsHeader() {
    return (
        <>
            <div className="google-ads">
                <div className="container">
                    <div className="google-ads__content">
                        <img className='google-ads__img-left' src="./src/assets/images/img1.png" alt=""  />
                        <div className="google-ads__content-text">
                            <h1 className="google-ads__content-text__title">Advertise your business <br /> with <span className="google-ads__content-text__title-blue">google ads</span></h1>
                            <p className="google-ads__content-text__subtitle">Google Ads provides extensive tracking and analytics tools, allowing advertisers to measure the success of their campaigns and adjust them accordingly.</p>
                            <button className="google-ads__content-text__button">Publish google ads now</button>
                        </div>
                        <img className='google-ads__img-right' src="./src/assets/images/1.1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleAdsHeader