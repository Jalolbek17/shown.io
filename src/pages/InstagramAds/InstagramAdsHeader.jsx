import React from 'react'


function InstagramAdsHeader() {
    return (
        <>
            <div className="instagram-ads">
                <div className="container">
                    <div className="instagram-ads__content">
                    <img className='google-ads__img-left' src="./src/assets/images/IR.png" alt=""  />

                        <div className="instagram-ads__content-text">
                            <h1 className="instagram-ads__content-text__title">Take your business to the next level with instagram ads <span className="instagram-ads__content-text__title-blue">instagram ads</span></h1>
                            <p className="instagram-ads__content-text__subtitle">  Instagram Ads allow businesses to create and display paid advertisements on the Instagram app, which can appear in users' feeds, stories, and in the Explore section.</p>
                            <button className="instagram-ads__content-text__button">Publish instagram ads now</button>
                        </div>
                    <img className='google-ads__img-left' src="./src/assets/images/IL.png" alt=""  />

                    </div>
                </div>
            </div>
        </>
    )
}

export default InstagramAdsHeader