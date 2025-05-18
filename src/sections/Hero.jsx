import React from 'react'

const words = [
    {text: 'Ideas', imgPath: '/images/ideas.svg'},
    {text: 'Concepts', imgPath: '/images/concepts.svg'},
    {text: 'Code', imgPath: '/images/code.svg'},
]
const Hero = () => {
    return (
        <section id = "hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10" >
                <img src = "images/bg.png" alt = "background"/>
            </div>

            <div className ="hero-layout">
                {/* Left ma hero content */}
                <header className = "flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className = "flex flex-col gap-7">
                    <div className = "hero-text">
                        <h1>Shaping Designs</h1>
                        <h1>Into Real Projects</h1>
                        <h1>That Deliver Results</h1>
                    </div>
                </div>
                </header>
                {/* right ma 3d model */}
            </div>
        </section>
    )
}

export default Hero