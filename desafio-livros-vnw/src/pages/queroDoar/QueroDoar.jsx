import React from "react";
import s from "./queroDoar.module.scss"
import Book from "../../assets/images/book.svg"

export default function QueroDoar() {
  return (
    <section className={s.container}>
      <p className={s.info}>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <div className={s.cardForm}>
        <form className={s.form}>
          <div className={s.titleForm}>
            <img src={Book} alt="Ícone de um livro aberto" />
            <p>Informações do Livro</p>
          </div>
          <input type="text" placeholder="Título" />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Link da imagem" />
          <button className={s.btn} type="submit">
            Doar
          </button>
        </form>
      </div>
    </section>
  );
}
