import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lawrence!</h1>
        <p className={styles.description}>
          I'm a full-stack developer with interest in AI and evolving technologies!
          I have with 5 years of experience with Python and Java. Feel free to reach out, happy to chat!
        </p>
        <a href="mailto:lawrencezou3s@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/LawrenceProfileRounded.png")}
        //src={"/assets/hero/heroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
