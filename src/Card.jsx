import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-6 col-sm-12 col-lg-4 mx-auto">
        <div className="card">
          <img
            src={props.cimgsrc}
            className="card-img-top"
            alt={props.cimgsrc}
          />
          <div className="card-body">
            <h5 className="card-title">{props.cname}</h5>
            <p className="card-text">{props.cdetail}</p>
            <NavLink to="/" className="srv-btn">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
