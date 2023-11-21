import React from 'react'

const Error = () => {
  return (
    <>
        <div className="error">
            <img src="https://miro.medium.com/v2/resize:fit:1358/0*33r6_tNhimBS3Giz.jpg" alt="" className="error-img" />
            <div className="error-content">
                <h1 className="error-content__text">An unexpected error accured,but you can still go back to the main page.</h1>
                <button className="error-content__button">Go back to main page</button>
            </div>
        </div>
    </>
  )
}

export default Error