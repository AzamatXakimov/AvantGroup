import { Link } from "react-router-dom";
import "./AboutUsSection.scss";
import building1 from "../../assets/images/building-1.jpg"
import building2 from "../../assets/images/building-2.jpg"
import { useEffect, useRef } from "react";
import anime from "animejs";

export const AboutUsSection = () => {
    const aboutUsInnerRef = useRef();
    const aboutUsBuildingFirstImgBoxRef = useRef();
    const aboutUsBuildingSecondImgBoxRef = useRef();
    const aboutUsBuildingFirstImgRef = useRef();
    const aboutUsBuildingSecondImgRef = useRef();
    useEffect(() => {
		const elementOffsetTop = aboutUsInnerRef.current.offsetTop;

        const windowHeight = window.innerHeight;
        const animationBuildingFirstImg = anime({
            targets: aboutUsBuildingFirstImgRef.current,
            bottom: 0,
            left: 0,
            scale: [0, 1],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1300,
            autoplay: false,
            complete: () => {
                anime({
                    targets: aboutUsBuildingFirstImgRef.current,
                    bottom: "15px",
                    left: "15px",
                    easing: 'easeOutExpo',
                    duration: 500,
                })
            }
        })
        const animationBuildingSecondImg = anime({
            targets: aboutUsBuildingSecondImgRef.current,
            bottom: 0,
            right: 0,
            scale: [0, 1],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1300,
            autoplay: false,
            complete: () => {
                anime({
                    targets: aboutUsBuildingSecondImgRef.current,
                    bottom: "15px",
                    right: "15px",
                    easing: 'easeOutExpo',
                    duration: 500,
                })
            }
        })
        const animationBuildingFirstBox = anime({
            targets: aboutUsBuildingFirstImgBoxRef.current,
            translateX: ["-500px", 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
            complete: () => {
                animationBuildingFirstImg.play()
            }
        })
        const animationBuildingSecondBox = anime({
            targets: aboutUsBuildingSecondImgBoxRef.current,
            translateX: ["500px", 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
            complete: () => {
                animationBuildingSecondImg.play()
            }
        })
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset + windowHeight;

			if (currentScrollPosition > elementOffsetTop) {
                animationBuildingFirstBox.play()
                animationBuildingSecondBox.play()
                window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);
	}, []);
    return <>
        <section className="about-us">
            <div className="container">
                <h2 className="about-us-title">
                    <span className="main-color-text">Коротко</span> о нас
                </h2>
                <div className="about-us-inner" ref={aboutUsInnerRef}>
                    <div className="about-us-building-box about-us-building-box-first" ref={aboutUsBuildingFirstImgBoxRef}>
                        <img className="about-us-building-img-first" src={building1} ref={aboutUsBuildingFirstImgRef} alt="Building image" />
                    </div>

                    <div className="about-us-infobox">
                        <p className="about-us-text">
                            Мы стремимся к тому, чтобы все наши решения и технологии были максимально полезны на практике и делали жизнь лучше
                        </p>
                        <p className="about-us-desc">
                            OOO 'ENGINEERING' Avant Metal Group - компания, которая зарекомендовала себя как надежного и ответственного производителя. Также, тесно сотрудничает с различными локальными и лидирующими зарубежными компаниями в таких странах как Корея, Турция, Китай, Россия.
                        </p>
                        <Link className="about-us-link" to="/">
                            <span className="link-text-box">
                                Подробнее
                            </span>
                            <span className="about-links-rhombus"></span>
                        </Link>
                    </div>

                    <div className="about-us-building-box about-us-building-box-second" ref={aboutUsBuildingSecondImgBoxRef}>
                        <img className="about-us-building-img-second" src={building2} ref={aboutUsBuildingSecondImgRef} alt="Building image" />
                    </div>
                </div>
            </div>
        </section>
    </>
}
