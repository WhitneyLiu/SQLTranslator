import "../styles/sideNav.scss";
import { AccountContext } from "../helper/Account";
import { ArrowPathIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./logo";

const navigation = [
  {
    name: "SQL - Generate",
    href: "/home/sql-generate",
    icon: ArrowPathIcon,
  },
  {
    name: "Account",
    href: "/home/account",
    icon: UserCircleIcon,
  },
];

export default function SideNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AccountContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="sidenav-container">
        <div className="sidenav-content-container">
          <div className="logo-section">
            <Logo />
          </div>
          <nav>
            <ul role="list" className="nav-list-warper">
              <li>
                <ul role="list" className="upper-nav-items">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={
                          location.pathname === item.href
                            ? "current"
                            : "not-current"
                        }
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="footer">
                <a onClick={handleLogout}>
                  <ArrowRightOnRectangleIcon />
                  <span aria-hidden="true">Log out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
