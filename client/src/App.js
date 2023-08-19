import "./styles/App.css";
import { Account } from "./helper/Account";
import { Amplify } from "aws-amplify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPage from "./components/accountPage";
import Home from "./components/Home";
import LandingPage from "./components/landingPage";
import LoginPage from "./components/loginPage";
import PasswordRecoverPage from "./components/PasswordRecoverPage";
import SignupPage from "./components/signupPage";
import SqlGeneratePage from "./components/sqlGeneratePage";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Account>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="password-recover" element={<PasswordRecoverPage />} />
            <Route path="home" element={<Home />}>
              <Route path="sql-generate" element={<SqlGeneratePage />} />
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Account>
    </div>
  );
}

export default App;
