import { Link } from "react-router-dom";
import "./Development.scss";
import AtomFigures from "../../assets/images/atom-figures.png"
import anime from "animejs";
import { useEffect, useRef } from "react";
export const Development = () => {
    const developmentSectionRef = useRef();
    const developmentInfoBoxRef = useRef();
    const developmentImgRef = useRef();

    const developmentListRef = useRef()
    useEffect(() => {
		const developmentOffsetTop = developmentSectionRef.current.offsetTop;
		const developmentListOffsetTop = developmentListRef.current.offsetTop;

        const developmentWindowHeight = window.innerHeight;
        const developmentWindowHWidth = window.innerWidth;
        const developmentImgAnimation = anime({
            targets: developmentImgRef.current,
            translateX: ["500px", 0],
            duration: 1000,
            deley: 500,
            opacity: [0, 1],
            autoplay: false,
        })
        const animationStart = anime({
            targets: developmentInfoBoxRef.current,
            translateX: [-developmentWindowHWidth, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 500,
            autoplay: false,
            complete: () => {
                developmentImgAnimation.play()
            }
        });

        const animationsItems = anime({
            targets: [".development-item", ".development-second-list-item"],
            scale: [0, 1],
            opacity: [0, 1],
            delay: anime.stagger(500),
            autoplay: false,
        })
		const handleScrollDevelopment = () => {
			const currentScrollPosition = window.pageYOffset + developmentWindowHeight;

			if (currentScrollPosition > developmentOffsetTop) {
				animationStart.play();
                window.removeEventListener('scroll', handleScrollDevelopment);
			}

		};

        const hendelScrollListDevelopment = () => {
            const currentScrollPosition = window.pageYOffset + developmentWindowHeight;
			if (currentScrollPosition > developmentListOffsetTop+developmentOffsetTop) {
				animationsItems.play();
                window.removeEventListener('scroll', hendelScrollListDevelopment);
			}
        }

		window.addEventListener('scroll', handleScrollDevelopment);
		window.addEventListener('scroll', hendelScrollListDevelopment);
	}, []);
    return <>
        <section className="development" ref={developmentSectionRef}>
            <div className="container">
                <div className="development-infobox" ref={developmentInfoBoxRef}>
                    <h2 className="development-title">
                        <span className="main-color-text">Разработка</span> чертежей КМ и КМД
                    </h2>
                    <div className="development-descbox">
                        <p className="development-desc">
                            Исходным документом для проектирования любого здания илисооружения является задание на проектирование, составленноезаказчиком.
                        </p>
                    </div>
                    <Link className="development-link" to="/">
                        <span className="link-text-box">
                            Задание на проектирование
                        </span>
                        <span className="development-links-rhombus"></span>
                    </Link>
                </div>
                <img className="development-img" src={AtomFigures} ref={developmentImgRef} alt="atom figures image" />

                <ul className="development-list" ref={developmentListRef}>
                    <li className="development-item">
                        <div className="development-item-descbox">
                            <p className="development-item-desc">   
                                Создание 3D расчётной схемы каркаса сооружения
                            </p>
                        </div>
                    </li>
                    <li className="development-item">
                        <div className="development-item-descbox">
                            <p className="development-item-desc">   
                                Сбор постоянных и временных нагрузок, действующих на сооружение
                            </p>
                        </div>
                    </li>
                    <li className="development-item">
                        <div className="development-item-descbox">
                            <p className="development-item-desc">   
                                Разработка принципиальных узловых соединений элементов конструкции
                            </p>
                        </div>
                    </li>
                </ul>

                <ul className="development-list-second">
                    <li className="development-second-list-item">
                        <div className="development-item-descbox">
                            <p className="development-item-desc">   
                                Стадия расчетов, графического анализа и подбора сечений профилей
                            </p>
                        </div>
                    </li>
                    <li className="development-second-list-item">
                        <div className="development-item-descbox">
                            <p className="development-item-desc">   
                                Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические)
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
}
