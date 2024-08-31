import { Link, NavLink } from "react-router-dom";
import LogoSidebar from "../assets/images/desmondlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faUser,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => setShowNav(!showNav);

  const links = [
    { id: 1, path: "/", label: "HOME", icon: faHome },
    { id: 2, path: "/about", label: "ABOUT", icon: faUser },
    { id: 3, path: "/certificate", label: "CERTIFICATE", icon: faBolt },
    { id: 4, path: "/contact", label: "CONTACT", icon: faEnvelope },
  ];

  return (
    <div className="relative md:w-16">
      {/* Overlay */}
      {showNav && (
        <div
          onClick={handleToggleNav}
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
        />
      )}

      {/* Toggle Button */}
      <FontAwesomeIcon
        onClick={handleToggleNav}
        icon={showNav ? faClose : faBars}
        className="text-[#00ffee] text-3xl cursor-pointer fixed top-4 right-4 sm:hidden z-40 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee]"
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black w-full transition-transform duration-300 z-30 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-16 md:flex md:flex-col md:items-center md:justify-between shadow-[0_0_5px_#00ffee] `}
      >
        <div className="flex flex-col h-full sticky top-0">
          <Link className="block py-2" to="/">
            <img
              src={LogoSidebar}
              alt="logo"
              className="w-16 h-auto mx-auto mt-4"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center mt-8 space-y-4 md:space-y-0 md:mt-0">
            {links.map(({ id, path, label, icon }) => (
              <NavLink
                key={id}
                onClick={() => setShowNav(false)}
                exact="true"
                activeClassName="text-[#00ffee]"
                to={path}
                className={`group flex items-center rounded-lg p-4 text-center transition-all duration-300 md:flex-col md:items-center md:justify-center ${
                  showNav
                    ? "md:hidden block text-white text-xl hover:shadow-lg hover:text-[#00ffee]"
                    : "hidden md:flex text-white text-xl hover:text-[#00ffee] shadow-[0_0_5px_#00]"
                }`}
              >
                <span className={`md:hidden ${showNav ? "block" : "hidden"}`}>
                  {label}
                </span>
                <span className={`md:block ${showNav ? "hidden" : "block"}`}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-xl ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee]"
                  />
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Social Media Links */}
          <ul className="flex flex-col items-center mb-4 mt-auto md:flex md:items-center md:mb-4 md:mt-auto md:space-y-4">
            <li className="my-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/desmond-fernandis/"
                className="group flex items-center text-white text-xl hover:text-[#00ffee] transition-colors duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
            </li>
            <li className="my-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Desmond-06"
                className="group flex items-center text-white text-xl hover:text-[#00ffee] transition-colors duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee]"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
            </li>
            <li className="my-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/desmond.a.007/"
                className="group flex items-center text-white text-xl hover:text-[#00ffee] transition-colors duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee]"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
