import "./App.css";
// import style from "./app/style.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Storage from "./components/Storage/Storage";
import Organization from "./components/Organization/Organization";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/storage" element={<Storage />}></Route>
        <Route path="/organization" element={<Organization />}></Route>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/price/:pricesPage" element={<Price />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
