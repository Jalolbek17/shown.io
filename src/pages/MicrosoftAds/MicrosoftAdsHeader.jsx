import React from 'react'


function MicrosoftAdsHeader() {
    return (
        <>
            <div className="microsoft-ads">
                <div className="container">
                    <div className="microsoft-ads__content">
                    <img className='google-ads__img-left' src="./src/assets/images/ML.png" alt=""  />
                        <div className="microsoft-ads__content-text">
                            <h1 className="microsoft-ads__content-text__title">Take your business to the next level with microsoft ads <span className="microsoft-ads__content-text__title-blue">microsoft ads</span></h1>
                            <p className="microsoft-ads__content-text__subtitle">  microsoft Ads allow businesses to create and display paid advertisements on the microsoft app, which can appear in users' feeds, stories, and in the Explore section.</p>
                            <button className="microsoft-ads__content-text__button">Publish microsoft ads now</button>
                        </div>
                        <img className='google-ads__img-left' src="./src/assets/images/MR.png" alt=""  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MicrosoftAdsHeader