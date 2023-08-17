import { Routes, Route } from "react-router-dom";
import AccountPage from "./accountPage";
import ExtendSessionNotification from "./ExtendSessionNotification";
import SideNav from "./sideNav";
import SqlGeneratePage from "./sqlGeneratePage";


export default function Home() {

  return (
    <>
      <ExtendSessionNotification />
      <SideNav/>
      <Routes>
        <Route path="sql-generate" element={<SqlGeneratePage />} />
        <Route path="account" element={<AccountPage />} />
      </Routes>
    </>
  );
}
