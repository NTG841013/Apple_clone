import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";

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
            <Showcase/>
            <Performance/>
            <Features/>
            <Highlights/>
            <Footer/>

        </main>
    )
}
