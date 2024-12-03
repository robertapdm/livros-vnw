import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";
import s from "./header.module.scss";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logo}>
          <img src={Logo} alt="Imagem de ilustração de um livro aberto com capa azul" className={s.logoImg} />
          <p>Livros Vai na Web</p>
        </section>
        <section className={s.navigation}>
          <nav>
            <ul>
              <li><Link className={s.link} to="/">Início</Link></li>
              <li><Link className={s.link} to="/livrosdoados">Livros Doados</Link></li>
              <li><Link className={s.link} to="/querodoar">Quero Doar</Link></li>
            </ul>
          </nav>
        </section>
        <section className={s.search}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="O que você procura?"
            />
            <button className={s.btn}>
              <img src={Search} alt="ícone lupa para pesquisa" />
            </button>
          </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/livrosdoados" element={<LivrosDoados/>}/>
        <Route path="/querodoar" element={<QueroDoar/>}/>
      </Routes>
      </BrowserRouter>
  );
}
