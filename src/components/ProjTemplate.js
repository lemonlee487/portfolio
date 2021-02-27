import React from 'react'


const ProjTemplate = (props) => {
  return (
    <div>
      <div className="container py-5">
        <img src={props.logo} alt="LOGO" style={{ width: props.logoSize }} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjTemplate
