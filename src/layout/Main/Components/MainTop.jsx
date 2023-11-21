import React from 'react'

function MainTop() {
    return (
      <main>
          <div className="container">
                 <div className="main__titles">
                   <div className="main__subtitles">
                      <div className="main__sub">
                      Everything for your<br/>
                      business
                      </div>
                      <div className="main__buttons">
                          <div className="main__login">
                             <p>Create, manage and publish high quality ads online <br/>
                             on any platform you like. Customize your ads depending on<br/>
                             your choices and your business audience.</p> 
                          </div>
                          <div className="main__pbg">
                          <button className="header__button">
                            Create a Free account
                          </button>
                          </div>
                      </div>
                   </div>
                   <div className="main__img">
                    <img src="./src/assets/images/maintop.png" alt="" />
                   </div>
                 </div>
              </div>
      </main>
    )
  }
  
  export default MainTop