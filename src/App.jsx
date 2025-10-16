import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
//gsap.from('.hero-text', {
//    y: 100,
//    opacity: 0,
//    duration: 1,
//    scrollTrigger: {
//        trigger: '.hero-text',
//        start: 'top 80%',
//        toggleActions: 'play none none reverse'
//    }
//})

export const App = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
        </main>
    )
}
