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
    }
  ]);

  return (
    <>
      <section className={s.container}>
        <h2>Livros Doados</h2>
        <article className={s.cards}>
          {card.map((item) => (
            <article className={s.card}>
              <img src={item.image} alt={item.alt} />
              <div className={s.info}>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.genre}</p>
              </div>
            </article>
          ))}
        </article>
      </section>
    </>
  );
}
