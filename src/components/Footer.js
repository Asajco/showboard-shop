import React from 'react'
import styles from "../css/Footer.module.css"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <Link to="/contact">Contact us</Link>
    </div>
  )
}

export default Footer