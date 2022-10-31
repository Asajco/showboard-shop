import React from 'react'
import "../css/Spinner.module.css"
import { Triangle } from 'react-loader-spinner'
function Spinner() {
  return (
    <div><Triangle width={100} height={100} wrapperClassName={"spinner-wrapper"}/></div>
  )
}

export default Spinner