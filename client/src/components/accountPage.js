import "../styles/accountPage.scss";
import { isValid } from "../helper/password";
import { useContext, useState } from "react";
import { AccountContext } from "../helper/Account";
import Notification from "./Notification";
import PasswordSetup from "./passwordSetup";

export default function AccountPage() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    isError: false,
    title: "",
    message: "",
  });

  const { getSession, email } = useContext(AccountContext);

  const passwordMatch = newPassword === passwordConfirm;

  const cleanPasswordSetting = () => {
    setIsChangingPassword(false);
    setPassword("");
    setNewPassword("");
    setPasswordConfirm("");
  };

  const changePassword = (event) => {
    event.preventDefault();
    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          setNotification({
            show: true,
            isError: true,
            title: "Error!",
            message: err.message,
          });
          console.error(err);
        } else {
          setNotification({
            show: true,
            isError: false,
            title: "Password Changed!",
            message: "Your password has been changed successfully.",
          });
          cleanPasswordSetting();
        }
      });
    });
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <main>
        <div className="content-container">
          <div className="content-container-layout">
            <ul>
              <li className="li-text">Account Information</li>
              <li>
                <dl>
                  <div className="section">
                    <dt>Email address</dt>
                    <dd>{email}</dd>
                  </div>
                  <div className="section">
                    <dt>Password</dt>
                    <dd>
                      {isChangingPassword ? (
                        <>
                          <form>
                            <div>
                              <div className="password-label-container">
                                <label>Current Password</label>
                              </div>
                              <div className="password-input">
                                <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  autoComplete="current-password"
                                  value={password}
                                  onChange={(event) =>
                                    setPassword(event.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <PasswordSetup
                              password={newPassword}
                              passwordConfirm={passwordConfirm}
                              setPassword={setNewPassword}
                              setPasswordConfirm={setPasswordConfirm}
                              isNew={true}
                            />
                            <div className="mt-4 flex justify-end">
                              <button
                                type="button"
                                onClick={cleanPasswordSetting}
                                className="mx-4 rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={changePassword}
                                className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                                disabled={
                                  !(passwordMatch && isValid(newPassword))
                                }
                              >
                                Confirm
                              </button>
                            </div>
                          </form>
                        </>
                      ) : (
                        <button
                          type="button"
                          className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20"
                          onClick={() => setIsChangingPassword(true)}
                        >
                          Change password
                        </button>
                      )}
                    </dd>
                  </div>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
