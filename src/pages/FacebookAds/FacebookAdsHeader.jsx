import React from 'react'


function FacebookAdsHeader() {
    return (
        <>
            <div className="facebook-ads">
                <div className="container">
                    <div className="facebook-ads__content">
                        <img src="./src/assets/images/FL.png" alt="" className="facebook-ads__img-left" />
                        <div className="facebook-ads__content-text">
                            <h1 className="facebook-ads__content-text__title">Make changes in your industry with <br /> with <span className="facebook-ads__content-text__title-blue">facebook ads</span></h1>
                            <p className="facebook-ads__content-text__subtitle"> Facebook Ads allow businesses to create and display paid advertisements on the facebook app, which can appear in users' feeds, and in the Explore section.</p>
                            <button className="facebook-ads__content-text__button">Publish facebook ads now</button>
                        </div>
                        <img src="./src/assets/images/FR.png" alt="" className="facebook-ads__img-right" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default FacebookAdsHeader