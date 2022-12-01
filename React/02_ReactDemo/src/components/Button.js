import React, {Component} from "react";
import styles from "./Button.module.css";

export default class Button extends Component {
    render(){
        return (<div className={styles.heading}>
            <button className={styles.button}>Sendar</button>
        </div>)
    }
}