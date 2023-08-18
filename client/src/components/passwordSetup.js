import "../styles/passwordSetup.scss";
import PasswordCheck from "./PasswordCheck";
import Warning from "./Warning";

export default function PasswordSetup(props) {
  const { password, passwordConfirm, setPassword, setPasswordConfirm } = props;
  return (
    <>
      <div>
        <div className="password-label-container">
          <label>Password</label>
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
        {password === "" ? <></> : <PasswordCheck password={password} />}
      </div>

      <div>
        <div className="password-label-container">
          <label>Confirm password</label>
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
        {password === passwordConfirm ? (
          <></>
        ) : (
          <Warning message="Passwords don't match" />
        )}
      </div>
    </>
  );
}
