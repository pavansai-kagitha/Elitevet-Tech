import React from 'react'

import "../Buttons/button.css";
import { Link } from 'react-router-dom';
const Button = ({classname,text,to}) => {
    return to ? (
    <Link to={to} className={`btn-comp text-decoration-none px-4 py-2 btn ${classname}`}>
      {text}
    </Link>
  ) : (
    <button className={`btn-comp text-decoration-none px-4 py-2 btn btn-primary ${classname}`}>
      {text}
    </button>
  );

}

export default Button