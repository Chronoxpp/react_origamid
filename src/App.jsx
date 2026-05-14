import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Login from "./components/login/Login.jsx";

export default function App()
{
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}