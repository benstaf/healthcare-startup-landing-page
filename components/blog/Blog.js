import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

function Blog() {
    return (
        //     <div class="blog-card__details">
        //         <div class="blog-card__title">
        //             Mopar launches modern V-8 crate engine kits for classic muscle cars
        //     </div>

        //         <div class="blog-card__description">
        //             Flat Chrysler Automobiles is making Mopar Crate Hemi Engine             kits available as a factory-backed option for Mopar vehicles             from 1975 and earlier.
        //     </div>

        //         <button class="blog-card__action">
        //             <span style="margin-right: 10px"> Read More </span>
        //             <i class="fa fa-angle-right"> </i>
        //         </button>
        //     </div>
        // </div >
        <div className="blog">
            <div className="blog__heading">
                <h2>Check out our latest article</h2>
                <div className="border"></div>
            </div>
            <div className="blog__cards">
                <div className="blog__card">
                    <img src="./assets/blog-1.svg" alt="blog post" />
                    <h4>Disease detection, check
up in the laboratory</h4>
                    <p>In this case, the role of the health laboratory is very important to do
a disease detection...</p>
                    <Link href="/" >
                        <a>
                            Read more <FiArrowRight style={{ 'verticalAlign': 'middle' }} />
                        </a>
                    </Link>
                </div>
                <div className="blog__card">
                    <img src="./assets/blog-2.svg" alt="blog post" />
                    <h4>Herbal medicines that are
safe for consumption</h4>
                    <p>Herbal medicine is very widely used at this time because of its very good for your health...</p>
                    <Link href="/" >
                        <a>
                            Read more <FiArrowRight style={{ 'verticalAlign': 'middle' }} />
                        </a>
                    </Link>
                </div>
                <div className="blog__card">
                    <img src="./assets/blog-3.svg" alt="blog post" />
                    <h4>Natural care for healthy
facial skin</h4>
                    <p>A healthy lifestyle should start from now and also for your skin health.
There are some...</p>
                    <Link href="/" >
                        <a>
                            Read more <FiArrowRight style={{ 'verticalAlign': 'middle' }} />
                        </a>
                    </Link>
                </div>
            </div>
            <button href="" className="btn btn-outline-big">
                View all
            </button>
        </div>
    )
}

export default Blog
