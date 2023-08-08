import Logo from "./logo";
import "../styles/signupPage.scss";

export default function SignupPage() {
  return (
    <div className="signup-page">
      <Logo />
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
                    required
                  />
                </div>
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
                    required
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="create-button">
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
