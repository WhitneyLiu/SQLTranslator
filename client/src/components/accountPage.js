import "../styles/accountPage.scss";
import { isValid } from "../helper/password";
import { useState } from "react";
import PasswordSetup from "./passwordSetup";

export default function AccountPage() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const email = "123@gmail.com";
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const passwordMatch = password === passwordConfirm;

  const changePassword = () => {
    setIsChangingPassword(false);
  };

  return (
    <>
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
                          <PasswordSetup
                            password={password}
                            passwordConfirm={passwordConfirm}
                            setPassword={setPassword}
                            setPasswordConfirm={setPasswordConfirm}
                          />
                          <div className="mt-4 flex justify-end">
                            <button
                              onClick={() => setIsChangingPassword(false)}
                              type="cancel"
                              className="mx-4 rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={changePassword}
                              type="submit"
                              className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                              disabled={!(passwordMatch && isValid(password))}
                            >
                              Confirm
                            </button>
                          </div>
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
