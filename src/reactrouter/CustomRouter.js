import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../axios/Index";
import TodosList from "../axios/TodosList";
import CommonHOC from "../hoc/CommonHOC";
import Redux from "../redux/components/Redux";
import About from "./About";
import Error from "./Error";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";

function CustomRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about/:username" element={<About />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/hoc" element={<CommonHOC />} />
        <Route path="/axios" element={<Index />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default CustomRouter;
