import "../styles/loginPage.scss";
import { AccountContext } from "../helper/Account";
import { Auth } from "aws-amplify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";
import Notification from "./Notification";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    isError: false,
    title: "",
    message: "",
  });

  const { authenticate } = useContext(AccountContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    authenticate(email, password, setNotification)
      .then((data) => {
        navigate("/home");
      })
      .catch((err) => {
        console.error("Failed to login ", err);
      });
  };

  const googleLogin = async () => {
    try {
      const result = await Auth.federatedSignIn({
        provider: "Google",
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <Logo />
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <section>
        <div className="form-style">
          <div className="login-title">
            <h2>Sign in to your account</h2>
          </div>
          <div className="form-container">
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="email-label">
                  Email address
                </label>
                <div className="email-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="password-label-container">
                  <label htmlFor="password">Password</label>
                  <div className="password-recover">
                    <a href="/password-recover">Forgot password?</a>
                  </div>
                </div>
                <div className="password-input">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <button tyoe="submit" className="signin-button">
                  Sign in
                </button>
              </div>
            </form>

            <div className="footer">
              <div className="divider-container">
                <div className="divider" aria-hidden="true">
                  <div />
                </div>
                <div className="text">
                  <span>Or continue with</span>
                </div>
              </div>

              <button
                onClick={googleLogin}
                type="button"
                className="google-button"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>

            <p className="signup-container">
              Not a member? <a href="/signup">Sign up now</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
