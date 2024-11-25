import React from "react";
import s from "./footer.module.scss";
import Facebook from "../../assets/images/facebook-icon.svg";
import Twitter from "../../assets/images/twitter-icon.svg";
import Youtube from "../../assets/images/youtube-icon.svg";
import LinkedIn from "../../assets/images/linkedin-icon.svg";
import Instagram from "../../assets/images/instagram-icon.svg";

function footer() {
  return (
    <>
      <footer className={s.container}>
        <section className={s.contact}>
            <p>4002-8922</p>
          <div className={s.social}>
            <img className="icon" src={Facebook} alt="ícone do facebook" />
            <img className="icon" src={Twitter} alt="ícone do twitter" />
            <img className="icon" src={Youtube} alt="ícone do youtube" />
            <img className="icon" src={LinkedIn} alt="ícone do LinkedIn" />
            <img className="icon" src={Instagram} alt="ícone do Instagram" />
          </div>
        </section>
        <section className={s.copyright}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
      </footer>
    </>
  );
}

export default footer;
