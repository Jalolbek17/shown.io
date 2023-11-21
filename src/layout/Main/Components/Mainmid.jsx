import React from 'react'

function MainMid() {
    return (
        <div>
            <div className="container">
                <div className="mid">
                    <div className="mid__title">
                        <span className="mid__color">Advertise</span> without the effort
                    </div>
                    <div className="mid__sub">
                        1000+ companies signed up last week
                    </div>


                    <div className="mid__cards">
                        <div className="mid__card-tit">
                            <span>01</span>
                            <h1>Manage all your ads</h1>
                            <h2>Our platform lets you manage all your <br /> ads from any social media site, with <br /> 100% accessibility over you <br /> advertisements.</h2>
                        </div>
                        <div className="mid__card-img">
                            <img src="./src/assets/images/Clip.png" alt="Clip" />
                        </div>
                    </div>
                    <div className="mid__cardss" id="qq">
                        <div className="mid__card-imgs">
                            <img src="./src/assets/images/trade.png" alt="Clip" />
                        </div>
                        <div className="mid__card-tit" >
                            <span>02</span>
                            <h1>Create and publish your ads in seconds</h1>
                            <h2>Make your ad appear on big company <br /> platforms,fast and easy while not <br /> wasting time for other not important <br /> thing.</h2>
                        </div>
                    </div>
                    <div className="mid__cards">
                        <div className="mid__card-tit">
                            <span>03</span>
                            <h1>Watch and improve your ads</h1>
                            <h2>We designed our platform to <br /> you to be able to watch your ad performance <br /> and make changes to improve it even <br /> better</h2>
                        </div>
                        <div className="mid__card-img">
                            <img src="./src/assets/images/Performance.png" alt="Clip" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MainMid