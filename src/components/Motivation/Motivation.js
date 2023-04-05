import { useEffect, useRef } from "react";
import "./Motivation.scss"
import anime from "animejs";
export const Motivation = () => {
    const motivationListRef = useRef();
    const motivationFirstItemtRef = useRef();
    const motivationLastItemtRef = useRef();
    useEffect(() => {
		const elementOffsetTop = motivationListRef.current.offsetTop;

        const windowHeight = window.innerHeight;
        const animationMotivationFirsItem = anime({
            targets: motivationFirstItemtRef.current,
            translateX: ["400px", 0],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
        })
        const animationMotivationLastItem = anime({
            targets: motivationLastItemtRef.current,
            translateX: ["-320px", 0],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
        })
        const animationMotivationList = anime({
            targets: motivationListRef.current,
            translateY: [windowHeight, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            autoplay: false,
            complete: () => {
                animationMotivationFirsItem.play()
                animationMotivationLastItem.play()
            }
        })
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset + windowHeight;

			if (currentScrollPosition > elementOffsetTop) {
                animationMotivationList.play()
                window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);
	}, []);
    return <>
        <section className="motivation">
            <div className="container">
                <div className="motivation-titlebox">
                    <h2 className="motivation-title">
                        <span className="main-color-text">Главный двигатель нашей компании</span> – высокий уровень мотивации.
                    </h2>
                </div>

                <ul className="motivation-list" ref={motivationListRef}>
                    <li className="motivation-item" ref={motivationFirstItemtRef}>
                        <div className="motivation-item-box">
                            <h3 className="motivation-item-title">
                                30 000 т.
                            </h3>
                            <h4 className="motivation-item-text">
                                производственной мощности
                            </h4>
                        </div>
                    </li>
                    <li className="motivation-item">
                        <div className="motivation-item-box">
                            <h3 className="motivation-item-title">
                                22 000
                            </h3>
                            <h4 className="motivation-item-text">
                                квадратных метров
                            </h4>
                            <p className="motivation-item-desc">
                                Площадь производственного комплекса составляет более 22 тысяч квадратных метров.
                            </p>
                        </div>
                    </li>
                    <li className="motivation-item" ref={motivationLastItemtRef}>
                        <div className="motivation-item-box">
                            <h3 className="motivation-item-title">
                                250
                            </h3>
                            <h4 className="motivation-item-text">
                                человек
                            </h4>
                            <p className="motivation-item-desc">
                                Штат сотрудников насчитывает 250человек.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
}
