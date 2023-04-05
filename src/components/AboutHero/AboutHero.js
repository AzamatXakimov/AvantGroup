import { Link } from "react-router-dom"
import "./AboutHero.scss"
export const AboutHero = () => {


    return <>
        <section className="about-us-hero">
            <div className="container">
                <div className="about-us-hero-textbox">
                    <h1 className="about-us-hero-title">
                        Высокотехнологичные решения в области металлоконструкций и стройматериалов 
                    </h1>

                    <div className="about-us-hero-descbox">
                        <p className="about-us-hero-desc">
                            Компания OOO 'ENGINEERING' AvantGroup зарекомендовала себя как AvantGroup зарекомендовала себя в которой вы можете быть уверены.
                        </p>
                    </div>

                    <Link className="about-us-hero-link" to="/production">
                        <span className="link-text-box">Подробнее о производстве</span>
                        <span className="hero-links-rhombus"></span>
                    </Link>
                </div>

                <div className="about-us-list-box">
                    <ul className="about-us-hero-list">
                        <li className="about-us-hero-item">
                            <div className="about-us-hero-item-infotbox">
                                <h3 className="about-us-hero-item-title">
                                    30 000 т.
                                </h3>
                                <div className="about-us-hero-item-textbox">
                                    <h4 className="about-us-hero-item-text">
                                        Производственная мощность
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="about-us-hero-item">
                            <div className="about-us-hero-item-infotbox">
                                <h3 className="about-us-hero-item-title">
                                    22 000
                                </h3>
                                <h4 className="about-us-hero-item-text">
                                    квадратных метров
                                </h4>
                                <p className="about-us-hero-item-desc">
                                    Площадь производственного комплекса составляет более 22 тысяч квадратных метров.
                                </p>
                            </div>
                        </li>
                        <li className="about-us-hero-item">
                            <div className="about-us-hero-item-infotbox">
                                <h3 className="about-us-hero-item-title">
                                    250
                                </h3>
                                <h4 className="about-us-hero-item-text">
                                    человек
                                </h4>
                                <p className="about-us-hero-item-desc">
                                    Штат сотрудников насчитывает250человек.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}
