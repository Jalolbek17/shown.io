import React from 'react'
import { Link } from 'react-router-dom'

function MainServis() {
    return (
        <div className="servis">
            <div className="container">
                <div className="servis__s">
                    <div className="servis__img">
                        <img src="./src/assets/images/Frame.png" alt="Clip" />
                    </div>
                    <div className="servis__sub">
                        <h1>Choose your platform
                            and publish.</h1>
                        <h2>Pick your favourite platform to publish your ads and design it however you want and publish within seconds with our platform</h2>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="servis__card">
                    <div className="sss">
                        <div className="servis__sm">
                            <div className="servis__imgs">
                                <img src="./src/assets/images/Google.png" alt="Google" />
                            </div>
                            <div className="servis__titles">
                                <h1>Google ads</h1>
                                <h2>Pick your favourite platform to publish your ads and design it however you want and publish within seconds with our platform</h2>
                                <Link to='google'> <div className="qq"><button>Try Google ads</button></div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="sss">
                        <div className="servis__sm">
                            <div className="servis__imgs">
                                <img src="./src/assets/images/facebook.png" alt="Google" />
                            </div>
                            <div className="servis__titles">
                                <h1>Facebook ads</h1>
                                <h2>Pick your favourite platform to publish your ads and design it however you want and publish within seconds with our platform</h2>
                                <Link to='facebook'> <div className="qq"><button>Try Facebook ads</button></div> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servis__card">
                    <div className="sss">
                        <div className="servis__sm">
                            <div className="servis__imgs">
                                <img src="./src/assets/images/insta.png" alt="Google" />
                            </div>
                            <div className="servis__titles">
                                <h1>Instagram ads</h1>
                                <h2>Pick your favourite platform to publish your ads and design it however you want and publish within seconds with our platform</h2>
                                <Link to='insta'>  <div className="qq"><button>Try Instagram ads</button></div> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sss">
                        <div className="servis__sm">
                            <div className="servis__imgs">
                                <img src="./src/assets/images/microsoft.png" alt="Google" />
                            </div>
                            <div className="servis__titles">
                                <h1>Microsoft ads</h1>
                                <h2>Pick your favourite platform to publish your ads and design it however you want and publish within seconds with our platform</h2>
                                <Link to='mcrs'><div className="qq"><button>Try Microsoft ads</button></div></Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default MainServis