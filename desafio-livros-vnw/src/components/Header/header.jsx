import React from "react";
import "./header.scss";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg"

export default function header() {
  return (
    <>
      <header>
        <section className="logo">
          <img src={Logo} alt="Logo" className="logoImg" />
          <h1>Livro Vai na Web</h1>
        </section>
        <section className="navigation">
          <nav>
            <ul>
              <li>Início</li>
              <li>Livros Doados</li>
              <li>Quero Doar</li>
            </ul>
          </nav>
        </section>
        <section className="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="O que você procura?"
            />
            <img src={Search} alt="Lupa para pesquisa" />
          </section>
      </header>
    </>
  );
}
