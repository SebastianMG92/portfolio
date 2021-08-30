// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import UserIcon from "../../icons/user.svg";
import ContactIcon from "../../icons/email.svg";
import './Header.scss'

const Header = () => {

  const [isSticky, setIsSticky] = useState(false)

  const handleSticky = (e) => {
    if (window.pageYOffset > 5) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSticky)
    return () => {
      window.removeEventListener('scroll', handleSticky)
    }
  }, [])

  return (
    <header className={`header ${isSticky ? 'is-sticky' : ''}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <nav className={`header-nav`}>
              <ul className={`header-menu`}>
                <li className={`header-menu--item`}>
                  <a href="#intro">
                    <span className={`header-menu--item--index`}>
                      <UserIcon />
                    </span>
                    <span className={`header-menu--item--sectionName`}>Intro</span>
                  </a>
                </li>
                <li className={`header-menu--item`}>
                  <a href="#about">
                    <span className={`header-menu--item--index`}>02</span>
                    <span className={`header-menu--item--sectionName`}>Sobre mi</span>
                  </a>
                </li>
                <li className={`header-menu--item`}>
                  <a href="#experience">
                    <span className={`header-menu--item--index`}>03</span>
                    <span className={`header-menu--item--sectionName`}>Experiencia</span>
                  </a>
                </li>
                <li className={`header-menu--item`}>
                  <a href="#projects">
                    <span className={`header-menu--item--index`}>04</span>
                    <span className={`header-menu--item--sectionName`}>Proyectos</span>
                  </a>
                </li>
                <li className={`header-menu--item`}>
                  <a href="#contact">
                    <span className={`header-menu--item--index`}>
                      <ContactIcon />
                    </span>
                    <span className={`header-menu--item--sectionName`}>Contacto</span>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header