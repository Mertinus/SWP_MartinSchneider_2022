import React, { Component } from "react";
import styles from "./ButtonRow.module.css"
import btnStyles from "./Button.module.css"

export default class ButtonRow extends Component {
    render(){
        return <div className={styles.buttonRow}>
            <button>B1</button>
            <button>B2</button>
            <button>B3</button>
        </div>
    }
}