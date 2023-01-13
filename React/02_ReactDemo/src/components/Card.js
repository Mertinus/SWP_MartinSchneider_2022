import React, { Component } from "react";
import styles from "./Card.module.css";
import cardImage from "./../card.png";

export default class Card extends Component {
    render() {
        return <div className={styles.fullCard}>
            <div className={styles.cardDiv}>
                <img src={cardImage}/>
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
            </div>
        </div>
    }
}