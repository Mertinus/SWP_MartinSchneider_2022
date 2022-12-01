import React, { Component } from "react";
import styles from "./List.module.css";

export default class List extends Component {
    render(){
        return <div className={styles.listDiv}>
            <ul className={styles.list}>
                <li className={styles.listElement}>Coffee</li>
                <li className={styles.listElement}>Tea</li>
                <li className={styles.listElement}>Beer</li>
            </ul>
        </div>
    }
}