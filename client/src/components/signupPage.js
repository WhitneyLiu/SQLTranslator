import "../styles/signupPage.scss";
import { isValid } from "../helper/password";
import { useState } from "react";
import Logo from "./logo";
import Notification from "./Notification";
import PasswordCheck from "./PasswordCheck";
import UserPool from "../helper/UserPool";
import Warning from "./Warning";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    isError: false,
    title: "",
    message: "",
  });

  const passwordMatch = password === passwordConfirm;

  const createAccount = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        setNotification({
          show: true,
          isError: true,
          title: "Error!",
          message: err.message,
        });
      } else {
        console.log(data);
        setNotification({
          show: true,
          isError: false,
          title: "Registration Success",
          message: `Thank you. We have sent you email to ${email}. Please check the link in that message to activate your account.`,
        });
      }
    });
  };

  return (
    <div className="signup-page">
      <Logo />
      {notification.show ? (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      ) : (
        <></>
      )}
      <section>
        <div className="form-style">
          <div className="login-title">
            <h2>Create an account</h2>
          </div>
          <div className="form-container">
            <form action="#" method="POST">
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
                {password === "" ? (
                  <></>
                ) : (
                  <PasswordCheck password={password} />
                )}
              </div>

              <div>
                <div className="password-label-container">
                  <label htmlFor="password">Confirm password</label>
                </div>
                <div className="password-input">
                  <input
                    id="password-confirm"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={passwordConfirm}
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                    required
                  />
                </div>
                {passwordMatch ? (
                  <></>
                ) : (
                  <Warning message="Passwords don't match" />
                )}
              </div>

              <div>
                <button
                  onClick={createAccount}
                  type="submit"
                  className="create-button"
                  disabled={!(passwordMatch && isValid(password))}
                >
                  Create an account
                </button>
              </div>
            </form>

            <p className="login-container">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
