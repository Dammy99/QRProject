import "./App.css";
// import style from "./app/style.module.css";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Storage from "./pages/Storage/Storage";
import Organization from "./components/Organization/Organization";
import Generation from "./pages/Generation/Generation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/OrganizationHome/OrganizationHome";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ProtectedRoutes from "./functions/routerProtector";

interface User {
  loggedIn: boolean;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

function App() {
  const [user, setUser] = useState<User>({ loggedIn: false });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/storage" element={<Storage />}></Route>
            <Route path="/organization" element={<Organization />}></Route>
            <Route path="/generation" element={<Generation />}></Route>
            <Route path="/welcome" element={<WelcomePage />}></Route>
          </Route>
          {/* <Route path="/" element={<Home />}></Route>
        <Route path="/price/:pricesPage" element={<Price />}></Route> */}
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
