import Logo from "./logo";
import {
  ArrowPathIcon,
  UserCircleIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

import "../styles/sideNav.scss";

const navigation = [
  {
    name: "SQL - Generate",
    href: "/sql-generate",
    icon: ArrowPathIcon,
  },
  {
    name: "SQL - Explain",
    href: "/sql-explain",
    icon: LanguageIcon,
  },
  {
    name: "Account",
    href: "/account",
    icon: UserCircleIcon,
  },
];

export default function SideNav(props) {
  const location = useLocation();

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
                          props.currentHerf === item.href
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
                <a href="#">
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
