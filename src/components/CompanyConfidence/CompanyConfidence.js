import "./CompanyConfidence.scss";
import Building3 from "../../assets/images/Building-3.jpg";
import TableImg from "../../assets/images/table.jpg"
import anime from "animejs";
import { useEffect, useRef } from "react";
export const CompanyConfidence = () => {
    const companyConfidenceSectionRef = useRef();
    const buildingImgBoxRef = useRef()
    const buildingImgRef = useRef()
    useEffect(() => {
		const elementOffsetTop = companyConfidenceSectionRef.current.offsetTop;

        const windowHeight = window.innerHeight;
        const animationBuildingImg = anime({
            targets: buildingImgRef.current,
            bottom: 0,
            left: 0,
            scale: [0, 1],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1300,
            autoplay: false,
            complete: () => {
                anime({
                    targets: buildingImgRef.current,
                    bottom: "20px",
                    left: "20px",
                    easing: 'easeOutExpo',
                    duration: 500,
                })
            }
        })
        const animationBuildingBox = anime({
            targets: buildingImgBoxRef.current,
            translateX: ["-500px", 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
            complete: () => {
                animationBuildingImg.play()
            }
        })
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset + windowHeight;

			if (currentScrollPosition > elementOffsetTop) {
                animationBuildingBox.play()
                window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);
	}, []);
    return <>
        <section className="company-confidence" ref={companyConfidenceSectionRef}>
            <div className="container">
                <div className="company-confidence-inner">
                    <div className="company-confidence-building-box" ref={buildingImgBoxRef}>
                        <img className="company-confidence-bulding" src={Building3} ref={buildingImgRef} alt="Company Building image" />
                    </div>
                    <div className="company-confidence-descbox">
                        <p className="company-confidence-desc">
                            Компания OOO 'ENGINEERING' Avant Metal Group зарекомендовала себя какнадежного и ответственного производителя, в продукциикоторого вы можете быть уверены.
                        </p>
                    </div>
                    <img className="company-confidence-img" src={TableImg} alt="Table image" />
                </div>
            </div>
        </section>
    </>
}