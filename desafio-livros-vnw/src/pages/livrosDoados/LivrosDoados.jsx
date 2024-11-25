import { React, useState } from "react";
import s from "./livrosDoados.module.scss";
import Protagonista from "../../assets/images/livros/protagonista.svg";

export default function LivrosDoados() {
  const [card, setCard] = useState([
    {
      id: 1,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 2,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 3,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 4,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 5,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 6,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 7,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 8,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 9,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    },
    {
      id: 10,
      image: Protagonista,
      title: "O Protagonista",
      alt: "Capa do Livro - O Protagonista",
      author: "Susanne Andrade",
      genre: "Ficção",
    }
  ]);

  return (
    <>
      <section className={s.container}>
        <h2>Livros Doados</h2>
        <div className={s.cards}>
          {card.map((item) => (
            <div className={s.card}>
              <img src={item.image} alt={item.alt} />
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>{item.genre}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
