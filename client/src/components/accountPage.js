import SideNav from "./sideNav";
import "../styles/accountPage.scss";

export default function AccountPage() {
  const email = "123@gmail.com";
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
                    <dd>reset your password</dd>
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
