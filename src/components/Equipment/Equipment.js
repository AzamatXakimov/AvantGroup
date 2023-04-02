import "./Equipment.scss";
import EsabLogo from "../../assets/images/ESAB-logo.jpg"
import { useEffect, useRef } from "react";
import anime from "animejs";
export const Equipment = () => {
    const companyBoxRef = useRef();
    const IngoBoxRef = useRef();
    const companyTextBox = useRef();
    const companyDescBox = useRef();
    const companyImg = useRef();
    useEffect(() => {
		const elementOffsetTop = companyBoxRef.current.offsetTop;

        const windowHeight = window.innerHeight;
        const animationCompanyInfo = anime({
            targets: [companyTextBox.current, companyDescBox.current],
            translateX: ["-500px", 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
        })
        const companyImgAnimation = anime({
            targets: companyImg.current,
            scale: [0, 1],
            duration: 1000,
            opacity: [0, 1],
            autoplay: false,
            complete: () => {
                animationCompanyInfo.play()
            }
        })
        const animationStart = anime({
            targets: [companyBoxRef.current, IngoBoxRef.current],
            translateY: [windowHeight, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 500,
            autoplay: false,
            complete: () => {
                companyImgAnimation.play()
            }
        });
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset + windowHeight;

			if (currentScrollPosition > elementOffsetTop) {
				animationStart.play();
                window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);
	}, []);
    return <>
        <section className="equipment">
            <div className="container">
                <div className="equipment-inner">
                    <div className="equipment-company-box" ref={companyBoxRef}>
                        <img className="equipment-company-img" src={EsabLogo} ref={companyImg} alt="ESAB company image" />
                        <div className="equipment-company-infobox">
                            <div className="equipment-company-textbox" ref={companyTextBox}>
                                <h3 className="equipment-company-title">
                                    ESAB Welding & Cutting
                                </h3>
                                <span className="equipment-company-text">
                                    (Швеция)
                                </span>
                            </div>
                            <div className="equipment-company-descbox" ref={companyDescBox}>
                                <p className="equipment-company-desc">
                                    Сварочное оборудование и сварочные материалы
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="equipment-infobox" ref={IngoBoxRef}>
                        <h2 className="equipment-title">
                            <span className="main-color-text">Оборудования</span> мировых лидеров
                        </h2>
                        <div className="equipment-descbox">
                            <p className="equipment-desc">
                                На площади комплекса размещено оборудованиемировыхлидеров в области металлообработки, такихкак:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
