import { Link, NavLink } from "react-router-dom"
import "./Header.scss";
import Logo from "../../assets/images/header-logo.svg"
export const Header = () => {
    return <>
        <header className="site-header">
            <div className="container">
                <div className="header-inner">
                    <Link className="header-logo" to="/">
                        <img className="header-logo-img" src={Logo} alt="Site logo" />
                    </Link>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-item">
                                <NavLink className={`header-nav-link`} to="/">О нас</NavLink>
                            </li>
                            <li className="header-nav-item">
                                <NavLink className={`header-nav-link`} to="/services">Услуги</NavLink>
                            </li>
                            <li className="header-nav-item">
                                <NavLink className={`header-nav-link`} to="/production">Производство</NavLink>
                            </li>
                            <li className="header-nav-item">
                                <NavLink className={`header-nav-link`} to="/partners">Партнеры</NavLink>
                            </li>
                            <li className="header-nav-item">
                                <NavLink className={`header-nav-link`} to="/our-projects">Наши проекты</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-lang-btn-box">
                        <button className="header-lang-btn active-lang" type="button">
                            Ru
                        </button>
                        <button className="header-lang-btn" type="button">
                            Uz
                        </button>
                    </div>

                    <Link className="header-link" to="/contacts">Контакты</Link>
                </div>
            </div>
        </header>
    </>
}
