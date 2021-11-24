import React from "react";
import 'animate.css';
import styles from "./Logo.module.css";
import profilepic from "./Profilepic.jpg";

export default class App extends React.Component {
    render() {
      return (
        <div className="animate__animated animate__bounce">
          <img src={profilepic} alt="facepic" className={styles.img}/>
        </div>
      );
    }
  }