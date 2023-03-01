import React from 'react';

const Card = (props) => {
  return (
    <div className="container-card">
      <div className="card-image">
        <img src={props.foto} />
      </div>
      <div className="heading">
        <h2>{props.judul}</h2>
        <h5>Rp {props.harga}</h5>
      </div>
    </div>
  );
};

export default Card;
