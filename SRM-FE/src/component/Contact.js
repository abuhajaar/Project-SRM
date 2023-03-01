import React from 'react';
import { nama, noHp, Kota } from '../config/config';
import { AiFillPhone } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

function Contact(props) {
  return (
    <div className="">
      <div className="box">
        <div className="nama">
          <FaUser className="i" />
          <p>{props.nama}</p>
        </div>
        <div className="noHP">
          <AiFillPhone className="i" />
          <p>{props.noHp}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
