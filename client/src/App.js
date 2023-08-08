import LandingPage from "./components/landingPage";
import LoginPage from "./components/loginPage";
import HomePage from "./components/homePage";
import SignupPage from "./components/signupPage";
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
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
