import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../../assets/images/footer_logo.svg";
import FaceBookIcon from "../../assets/images/facebook.svg";
import TwitterIcon from "../../assets/images/twitter.svg"
import InstagramIcon from "../../assets/images/instagram.svg"
export const Footer = () => {
    return <>
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <Link className="footer-logo" to="/">
                        <img className="footer-logo-img" src={Logo} alt="Site logo" />
                    </Link>

                    <div className="footer-box">
                        <div className="footer-top-descbox">
                            <p className="footer-top-desc">
                                Компания OOO 'ENGINEERING' Avant Metal Group зарекомендовала себя как надежного и ответственного производителя, в продукции которой вы можете быть уверены.
                            </p>
                        </div>

                        <ul className="footer-network-list">
                            <li className="footer-network-item">
                                <a className="footer-network-link" href="#" target="blank">
                                    <img className="footer-network-facebook" src={FaceBookIcon} alt="Facebook Logo" />
                                </a>
                            </li>
                            <li className="footer-network-item">
                                <a className="footer-network-link" href="#" target="blank">
                                    <img className="footer-network-twitter" src={TwitterIcon} alt="Twitter Logo" />
                                </a>
                            </li>
                            <li className="footer-network-item">
                                <a className="footer-network-link" href="#" target="blank">
                                    <img className="footer-network-instagram" src={InstagramIcon} alt="Instagram Logo" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <div className="footer-list-wrapper">
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        About Us
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Pricing Table
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Meet Our Team
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Latest News
                                    </Link>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Case Studies
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        FAQ’s
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Services
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link className="footer-link" to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-box">
                        <address className="footer-adress">
                            <Link className="footer-contact-link" to="/">Контакты</Link>
                            <Link className="footer-contact-link" to="/">Обратныя связь</Link>
                            <p className="footer-adress-desc">
                                По вопросам партнерства +998 95 606 33 33 info@avantgroup.uz
                            </p>
                        </address>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom-desc">
                        OOO 'ENGINEERING' Avant Metal Group © 2021 Все права защищены
                    </p>
                    <p className="footer-bottom-desc footer-bottom-desc-second">
                        Условия обработки персональных данных
                    </p>
                </div>
            </div>
        </footer>
    </>
}
