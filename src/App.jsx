import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";

export default function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main className="Content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}