import "./App.css";
// import style from "./app/style.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Storage from "./pages/Storage/Storage";
import Organization from "./components/Organization/Organization";
import Generation from "./pages/Generation/Generation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/OrganizationHome/OrganizationHome";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/storage" element={<Storage />}></Route>
        <Route path="/organization" element={<Organization />}></Route>
        <Route path="/generation" element={<Generation />}></Route>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/price/:pricesPage" element={<Price />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
