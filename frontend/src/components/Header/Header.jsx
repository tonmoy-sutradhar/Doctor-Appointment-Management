import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/doctors",
      display: "Find a Doctor",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  return (
    <div className="w-full max-h-max ">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className=" ">
          <img src={logo} alt="" />
        </div>

        {/* Menu */}
        <div>
          <ul className="menu flex items-center gap-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-blue-500 text-[16px] leading-7 font-bold"
                      : "text-gray-500 text-[16px] leading-7 "
                  }
                  to={link.path}
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
