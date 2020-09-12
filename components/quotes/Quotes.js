import React, { useState } from "react"

const Quotes = () => {
    const quotes = {
        0: {
            client: "Edward Newgate",
            company: "Founder Circle",
            quote:
                "Our dedicated patient engagement app and  web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.",
            image: require('../../public/assets/profile-pic.svg')
        },
        1: {
            client: "Sweet Client",
            company: "Apple",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.",
            image: require('../../public/assets/profile-pic.svg')
        },
        2: {
            client: "Dope Client",
            company: "Samsung",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu.",
            image: require('../../public/assets/profile-pic.svg')
        },
        3: {
            client: "Cool Client",
            company: "Huawei",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.",
            image: require('../../public/assets/profile-pic.svg')
        },
    }

    const [current, setCurrent] = useState(quotes[0])

    const handleSetClick = event => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
    }

    return (

        <div className="quotes-container">
            <div className="quotes">
                <h2>What our customer are saying</h2>
                <div className="border"></div>
                <div className="quote">
                    <div className="quote__author">
                        <img src={current.image} />
                        <div className="quote__author-texts">
                            <p>{current.client}</p>
                            <p>{current.company}</p>
                        </div>
                    </div>
                    <div className="quote__text-box">
                        <p>{current.quote}</p>
                    </div>
                </div>
            </div>
            <div className="circles">
                {Object.keys(quotes).map(index => (
                    <span
                        onClick={event => handleSetClick(event)}
                        data-quote={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Quotes