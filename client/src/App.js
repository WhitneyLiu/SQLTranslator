import LandingPage from "./components/landingPage";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import AccountPage from "./components/accountPage";
import SqlGeneratePage from "./components/sqlGeneratePage";
import SqlExplainPage from "./components/sqlExplainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/sql-generate" element={<SqlGeneratePage />} />
          <Route path="/sql-explain" element={<SqlExplainPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
