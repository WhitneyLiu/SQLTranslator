import { isValid } from "../helper/password";
import { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Logo from "./logo";
import Notification from "./Notification";
import PasswordSetup from "./passwordSetup";
import Pool from "../helper/UserPool";

export default function PasswordRecoverPage() {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(1); // 1: email stage, 2: code stage
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    isError: false,
    title: "",
    message: "",
  });

  const passwordMatch = password === passwordConfirm;

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLocaleLowerCase(),
      Pool,
    });
  };

  const sendCode = (event) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log(data);
      },
      onFailure: (err) => {
        setNotification({
          show: true,
          isError: true,
          title: "Error!",
          message: err.message,
        });
      },
      inputVerificationCode: (data) => {
        setNotification({
          show: true,
          isError: false,
          title: "Verification Code Sent",
          message: `An email has been sent to ${email}. Please check your inbox.`,
        });
        setStage(2);
      },
    });
  };

  const resetPassword = (event) => {
    event.preventDefault();

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
        setNotification({
          show: true,
          isError: false,
          title: "Password Changed!",
          message:
            "Your password has been changed successfully. Please navigate to the login page to log in.",
        });
      },
      onFailure: (err) => {
        setNotification({
          show: true,
          isError: true,
          title: "Error!",
          message: err.message,
        });
      },
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
            <h2>Password reset</h2>
          </div>
          <div className="form-container">
            {stage === 1 && (
              <form onSubmit={sendCode}>
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
                <button type="submit" className="create-button">
                  Send verification code
                </button>
              </form>
            )}

            {stage === 2 && (
              <form onSubmit={resetPassword}>
                <div>
                  <label htmlFor="email" className="email-label">
                    Verification Code
                  </label>
                  <div className="email-input">
                    <input
                      value={code}
                      onChange={(event) => setCode(event.target.value)}
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
                <button
                  disabled={!(passwordMatch && isValid(password))}
                  type="submit"
                  className="create-button"
                >
                  Change password
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
