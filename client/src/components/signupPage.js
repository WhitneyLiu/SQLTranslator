import "../styles/signupPage.scss";
import { isValid } from "../helper/password";
import { useState } from "react";
import Logo from "./logo";
import Notification from "./Notification";
import PasswordSetup from "./passwordSetup";
import UserPool from "../helper/UserPool";

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
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
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

              <PasswordSetup
                password={password}
                passwordConfirm={passwordConfirm}
                setPassword={setPassword}
                setPasswordConfirm={setPasswordConfirm}
              />

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
