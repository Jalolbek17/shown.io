import React from 'react'

const GoogleAdsWorkData = [
    {
        id: 1,
        img: 'image',
        title: 'Target specific ads',
        text: 'Google Ads work by allowing businesses to create ads that target specific keywords and locations on Googles search results, partner websites, and platforms like YouTube.'
    },

    {
        id: 2,
        img: 'image',
        title: 'Keywords',
        text: ' Advertisers choose the keywords they want their ads to appear with, create ad copy and visuals, and set a budget. Then, Google uses a bidding system to determine which ads are shown to users.'
    },

    {
        id: 2,
        img: 'image',
        title: 'Quality score system',
        text: ' Google also uses a quality score system that takes into account factors like ad relevance and landing page experience to determine ad ranking and cost.'
    }
]

const GoogleAdsWork = () => {
    return (
        <>
            <div className="google-ads__work">
                <div className="container">
                    <h1 className="google-ads__work-title">How <span className="google-ads__work-title__blue">google ads</span> work?</h1>
                    <div className="google-ads__work-cards">
                        <div className="google-ads__work-cards__card">
                            <img src="./src/assets/images/ShHS.png" />
                            <h1 className="google-ads__work-cards__card-title">Target specific ads</h1>
                            <p className="google-ads__work-cards__card-text">Google Ads work by allowing businesses to create ads that target specific keywords and locations on Google's search results, partner websites, and platforms like YouTube.</p>
                        </div>
                        <div className="google-ads__work-cards__card card">
                            <img src="./src/assets/images/ShDP.png" />
                            <h1 className="google-ads__work-cards__card-title">Target specific ads</h1>
                            <p className="google-ads__work-cards__card-text">Google Ads work by allowing businesses to create ads that target specific keywords and locations on Google's search results, partner websites, and platforms like YouTube.</p>
                        </div>
                        <div className="google-ads__work-cards__card">
                            <img src="./src/assets/images/ShHSG.png" />
                            <h1 className="google-ads__work-cards__card-title">Target specific ads</h1>
                            <p className="google-ads__work-cards__card-text">Google Ads work by allowing businesses to create ads that target specific keywords and locations on Google's search results, partner websites, and platforms like YouTube.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleAdsWork