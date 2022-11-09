import React from "react";
import { Routes, Route } from "react-router-dom";
import BecomeAseller from "../Page/BecomeAseller";
import English from "../Page/English";
import Explore from "../Page/Explore";
import FiverrBusiness from "../Page/FiverrBusiness";
import Inr from "../Page/Inr";
import Join from "../Page/Join";
import Logo from "../Page/Logo";
import SignIn from "../Page/SignIn";

const RouterAllPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/fiverrBusiness" element={<FiverrBusiness />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/english" element={<English />} />
        <Route path="/inr" element={<Inr />} />
        <Route path="/becomeAseller" element={<BecomeAseller />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
};

export default RouterAllPage;
