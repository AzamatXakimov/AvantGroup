import { useEffect, useRef } from "react"
import { AboutHero } from "../../components/AboutHero/AboutHero"
import { Header } from "../../components/Header/Header"
import "./AboutUs.scss"
import anime from "animejs"
import aboutUsHeroBg from "../../assets/images/modern-residential-building-transformed.png";
import aboutUsHeroCircleImg1 from "../../assets/images/Build-round.png";
import aboutUsHeroCircleImg2 from "../../assets/images/Build-round-2.png";
import aboutUsHeroCircleImg3 from "../../assets/images/Build-round-3.png";
import { Department } from "../../components/Department/Department"
import { Buildings } from "../../components/Buildings/Buildings"
import { Footer } from "../../components/Footer/Footer"
import { Equipment } from "../../components/Equipment/Equipment"
import { Development } from "../../components/Development/Development"
import { Motivation } from "../../components/Motivation/Motivation"
import { AboutUsSection } from "../../components/AboutUsSection/AboutUsSection"
import { CompanyConfidence } from "../../components/CompanyConfidence/CompanyConfidence"

export const AboutUs = () => {
    const ImgWrapperBg = useRef()
    const firstCircleImg = useRef()
    const secondCircleImg = useRef()
    const thirdCircleImg = useRef()

    useEffect(() => {
        const BgImgAnimation = anime({
            targets: ImgWrapperBg.current,
            left: ["calc(50%)", "calc(50% - 230px)"],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1700,
            delay: 500,
            autoplay: true,
        });

        const firstCircleImgAnimation = anime({
            targets: firstCircleImg.current,
            scale: [0, 1],
            duration: 1300,
            opacity: [0, 1],
            autoplay: false,
        })

        const secondCircleImgAnimation = anime({
            targets: secondCircleImg.current,
            scale: [0, 1],
            duration: 1300,
            opacity: [0, 1],
            autoplay: false,
        })

        const thirdCircleImgAnimation = anime({
            targets: thirdCircleImg.current,
            scale: [0, 1],
            duration: 1300,
            
            opacity: [0, 1],

            autoplay: false,
        })

        BgImgAnimation.finished.then(() => {
            firstCircleImgAnimation.play()
        })
        firstCircleImgAnimation.finished.then(() => {
            secondCircleImgAnimation.play()
        })
        secondCircleImgAnimation.finished.then(() => {
            thirdCircleImgAnimation.play()
        })

    }, []);


    
    return <>
        <div className="hero-wrapper" >
            <Header/>
            <AboutHero/>
            <img className="about-us-hero-bg-image" src={aboutUsHeroBg} ref={ImgWrapperBg} alt="Background image" />
            <img className="about-us-hero-build-img-1" src={aboutUsHeroCircleImg1} ref={firstCircleImg} alt="Build-1" />
            <img className="about-us-hero-build-img-2" src={aboutUsHeroCircleImg2} ref={secondCircleImg} alt="Build-2" />
            <img className="about-us-hero-build-img-3" src={aboutUsHeroCircleImg3} ref={thirdCircleImg} alt="Build-3" />
        </div>
        <main className="site-main">
            <AboutUsSection/>
            <Motivation/>
            <Department/>
            <Equipment/>
            <Development/>
            <CompanyConfidence/>
            <Buildings/>
        </main>
        <Footer/>
    </>
}
