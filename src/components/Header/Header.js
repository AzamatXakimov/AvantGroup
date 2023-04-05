import { Link, NavLink } from "react-router-dom"
import "./Header.scss";
import Logo from "../../assets/images/header-logo.svg"
import { useEffect, useRef, useState } from "react";
export const Header = () => {
    const [headerColorChange, setHeaderColorChange] = useState(false)
    const headerRef = useRef()
    useEffect(() => {
		// const elementOffsetTop = headerRef.current.offsetTop;

        console.log(window);    
        const windowHeight = window.innerHeight;
		const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset + windowHeight;

			// if (currentScrollPosition > 1024) {
            //     setHeaderColorChange(true)
            //     // window.removeEventListener('scroll', handleScroll);
			// }
			if (currentScrollPosition > windowHeight) {
                setHeaderColorChange(true)
                // window.removeEventListener('scroll', handleScroll);
			}
            else {
                setHeaderColorChange(false)
            }
		};

		window.addEventListener('scroll', handleScroll);
	}, []);
    return <>
        <header className={`site-header ${headerColorChange ? "change" : ""}`} ref={headerRef}>
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

                    <Link className="header-link" to="/contacts">
                        <span className="link-text-box">
                            Контакты
                        </span>
                        <span className="header-links-rhombus"></span>
                    </Link>
                </div>
            </div>
        </header>
    </>
}
