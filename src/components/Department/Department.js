import "./Department.scss";
import Marhi1Img from "../../assets/images/Marhi-img.jpg";
import IndustrialImg from "../../assets/images/Industrial-building-img.jpg";
import UnicalImg from "../../assets/images/Unical-dising-img.jpg";
import HangarsImg from "../../assets/images/Hangars-img.jpg";
import Marhi2Img from "../../assets/images/Marhi-2-img.jpg";
import { useEffect, useRef } from "react";
import anime from "animejs";
export const Department = () => {
    const centerBoxRef = useRef();
    const startBoxRef = useRef();
    const endBoxRef = useRef();

    useEffect(() => {
		const elementOffsetTop = centerBoxRef.current.offsetTop;

        const windowHeight = window.innerHeight;
        const animationStartBox = anime({
            targets: startBoxRef.current,
            translateX: ["500px", 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            autoplay: false,
        })
        const animationEndBox = anime({
            targets: endBoxRef.current,
            translateX: ["-500px", 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            autoplay: false,
        })
        const animationCenterImage = anime({
            targets: centerBoxRef.current,
            translateY: [windowHeight, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 250,
            autoplay: false,
            complete: () => {
                animationStartBox.play()
                animationEndBox.play()
            }
        });
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset + windowHeight;

			if (currentScrollPosition > elementOffsetTop) {
				animationCenterImage.play();
                window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);
	}, []);
    return <>
        <section className="department">
            <div className="container">
                <h2 className="department-title">
                    <span className="main-color-text">КОНСТРУКТОРСКОЕ</span> БЮРО
                </h2>

                <div className="department-inner">
                    <div className="department-double-box" ref={startBoxRef}>
                        <div className="department-double-box-inner department-double-box-inner-first">
                            <div className="department-img-overview"></div>
                            <img className="department-double-image" src={Marhi1Img} alt="mathi image" />
                            <h3 className="department-text">
                                Мархи
                            </h3>
                        </div>
                        <div className="department-double-box-inner">
                            <div className="department-img-overview"></div>
                            <img className="department-double-image" src={IndustrialImg} alt="mathi image" />
                            <h3 className="department-text">
                                Промышленные здания
                            </h3>
                        </div>
                    </div>

                    <div className="department-center-box" ref={centerBoxRef}>
                        <div className="department-center-img-overview"></div>
                        <img className="department-center-img" src={UnicalImg} alt="Unical dising img" />
                        <h3 className="department-text">
                            Уникальные дизайны 
                        </h3>
                    </div>

                    <div className="department-double-box" ref={endBoxRef}>
                        <div className="department-double-box-inner department-double-box-inner-first">
                            <div className="department-img-overview"></div>
                            <img className="department-double-image" src={HangarsImg} alt="mathi image" />
                            <h3 className="department-text">
                                Ангары
                            </h3>
                        </div>
                        <div className="department-double-box-inner">
                            <div className="department-img-overview"></div>
                            <img className="department-double-image" src={Marhi2Img} alt="mathi image" />
                            <h3 className="department-text">
                                Мархи
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
