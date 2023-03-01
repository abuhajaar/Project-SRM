import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { email, Kota } from '../config/config';

function Header(props) {
  return (
    <div className="header">
      <div className="header-up">
        <div className="flex">
          <div>
            <MdLocationOn />
          </div>
          <div>{props.alamat}</div>
          <div>
            <MdEmail />
          </div>
          <a
            href={`https://wa.me/${props.noHp}/?text=Hi Sam, Whatsup`}
            target="_blank"
          >
            {props.email}
          </a>
        </div>
        <div className="flex-right">
          <a href="#" className="link">
            <AiFillInstagram />
          </a>
          <a href="#" className="link">
            <AiFillFacebook />
          </a>
          <a href="#" className="link">
            <AiFillYoutube />
          </a>
          <a href="#" className="link">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="header-down">
        <div className="logo">LOGO</div>

        <div className="menu">
          <a href="#" className="menu1">
            HOME
          </a>
          <a href="#contoh" className="menu1">
            TENTANG KAMI
          </a>
          <a href="#" className="menu1">
            PRODUK
          </a>
          <a href="#" className="menu1">
            KONTAK
          </a>
          <a href="#" className="menu2">
            EMAIL
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
