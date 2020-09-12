import React from 'react'

function Hero() {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1>Virtual healthcare for you</h1>
                <p>
                    Trafalgar provides progressive, and affordable
                    healthcare, accessible on mobile and online
                    for everyone
                </p>
                <button href="" className="btn btn-rounded-big">
                    Consult today
                </button>
            </div>
            <div className="header__draw">
                <img
                    src="./assets/illustration.svg"
                    alt="illustration"
                />
            </div>
        </header>
    )
}

export default Hero
