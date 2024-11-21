import React, { useState } from 'react';
import s from "./inicio.module.scss";
import Community from "../../assets/images/community.svg";
import Reading from "../../assets/images/reading.svg";
import Transform from "../../assets/images/transform.svg";
import Balance from "../../assets/images/balance.svg";

export default function Inicio() {
  const [card, setCard] = useState([
    {
      id:1,
      img: Community,
      text: "Oferece Livros a quem não tem acesso, ajudando a reduzir a exclusão social"
    },
    {
      id:2,
      img: Reading,
      text: "Estimula o hábito da leitura e o aprendizado contínuo"
    },
    {
      id:3,
      img: Transform,
      text: "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."
    },
    {
      id:4,
      img: Balance,
      text: "    Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."
    }
  ])

  return (
    <main>
      <section className={s.hero}>
        <h1 className={s.title}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>
      <section className={s.infos}>
      <h2 className={s.subtitle}>Por que devo doar?</h2>
        <div className={s.cards}>
        {card.map((item) => (
          <div className={s.card}>
            <img src={item.img} alt="" />
            <p className={s.info}>{item.text}</p>
          </div>
        ))}
        </div>
      </section>
    </main>
  )
}