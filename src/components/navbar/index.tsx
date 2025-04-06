
import React from "react";
import './index.css';

export default function Navbar() {
  return (
    <header>
      <figure>
        <img src="/images/madalogo1.jpg" alt="" className="logotipo" />
      </figure>
      <nav>
        <a href="index.html">
          <img src="/images/house.png" alt=""></img>
          Home
        </a>
        <a href="tutorias.html">
          <img src="/images/icon.png" alt=""></img>
          Tutoriais
        </a>
        <a href="exercicios.html">
          <img src="/images/sz.png" alt=""></img>
          Exercícios
        </a>
        <a href="biblioteca2.html">
          <img src="/images/libr.png" alt=""></img>
          Biblioteca
        </a>
      </nav>
      {/** <!--botões do home--> */}
      <div className="access">
        {/**   <!--Entrar-->*/}
        <button type="button" className="b1" id="entrar">
          Login
        </button>

        {/* <!--Cadastrar-->*/}
        <button type="button" className="b2" id="cadastrar">
          Cadastrar
        </button>
      </div>
    </header>
  );
}
