import Example from "./example";
import Logo from "./logo";
import { SparklesIcon } from "@heroicons/react/20/solid";
import "../styles/landingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar" aria-label="Global">
          <Logo />
          <div className="login">
            <a href="/login">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="info">
        <img alt="" />
        <div className="info-container">
          <div className="text-section">
            <h1>Create AI-powered SQL statements within seconds!</h1>
            <p>
              Utilize AI to craft, clarify, and enhance your SQL queries
              swiftly. Elevate your proficiency and reclaim valuable time:
            </p>
            <br />
            <Example />
            <div className="button">
              <a>
                <SparklesIcon aria-hidden="true" />
                <span aria-hidden="true">Try SQL
                translator now ! ! !</span> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
