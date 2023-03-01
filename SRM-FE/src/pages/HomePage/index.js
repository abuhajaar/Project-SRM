<<<<<<< HEAD
import React, { useEffect } from 'react';
import Contact from '../../component/Contact';
import './HomePage.scss';
import { GiCheckMark } from 'react-icons/gi';

function HomePage(props) {
=======
import React, { useState, useEffect } from 'react';
import Contact from '../../component/Contact';
import './HomePage.scss';
import { GiCheckMark } from 'react-icons/gi';
import Video from '../../component/Video';
import Card from '../../component/Card';
import Axios from 'axios';

function HomePage() {
  const [post, setPost] = useState({
    nama: '',
    kota: '',
    noHp: '',
  });
  const [product, setProduct] = useState({
    gambar: '',
    judul: '',
    harga: '',
  });

  useEffect(() => {
    Axios.get('http://localhost:5000/stores/001')
      .then((result) => {
        const responseAPI = result.data.data.store;
        console.log(responseAPI.id);
        setPost(responseAPI);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);
>>>>>>> 9017120 (commit)
  return (
    <div className="HomePage">
      <div className="first">
        <h1>
          SELAMAT DATANG DI
          <br />
<<<<<<< HEAD
          SAHABAT RIZKY MILIONER
=======
          SAHABAT {post.nama} MILIONER
>>>>>>> 9017120 (commit)
        </h1>
        <h4>Mitra resmi dari Bisnis BEST CORPORATION</h4>
        <div class="custom-shape-divider-bottom-1676120073">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="second">
<<<<<<< HEAD
        <Contact nama={props.nama} noHp={props.noHp} />
        <div>
          <h4>
            Assalamualaikum, saya <span> Rizky Firman </span> , Saya adalah
            mitra Resmi BEST CORPORATION.
=======
        <Contact nama={post.nama} noHp={post.noHp} />
        <div>
          <h4>
            Assalamualaikum, saya <span> {post.nama} </span> , Saya adalah mitra
            Resmi BEST CORPORATION.
>>>>>>> 9017120 (commit)
            <br />
            <br />
            Silahkan membaca dan mempelajari informasi dalam website ini, selain
            informasi seputar produk-produk yang bermanfaat juga ada informasi
            peluang usaha yang berpotensi penghasilan jutaan rupiah.
          </h4>
        </div>
      </div>
      <div className="third">
        <div className="img">
          <img src="https://sahabatrizkymilioner.com/wp-content/uploads/2023/01/varian-produk.png"></img>
        </div>
        <div className="details">
          Nikmati Produk-Produk Berkualitas dan Peluang Menjadi distributor
          Beromset Miliaran
        </div>
      </div>
      <div className="fourth">
        <div className="banner">
          <span id="contoh">Informasi ini sangat cocok buat kamu yang :</span>
          <br />
          <h2>INGIN SOLUSI PERMASALAHAN EKONOMI</h2>
        </div>
        <div className="info">
          <div className="list">
            <ul>
              <li>
                <GiCheckMark className="icon-list" />
                Ingin memiliki bisnis sambil kerja/kuliah?
              </li>
              <li>
                <GiCheckMark className="icon-list" />
                Ingin punya Bisnis tapi terkendala modal?
              </li>
              <li>
                <GiCheckMark className="icon-list" />
                Ingin punya penghasilan tambahan?
              </li>
              <li>
                <GiCheckMark className="icon-list" />
                Ingin Punya Usaha yang bisa dijalankan sambil bekerja?
              </li>
              <li>
                <GiCheckMark className="icon-list" />
                Ingin mewujudkan impian memiliki kendaraan dan rumah cash tanpa
                cicilan riba?
              </li>
              <li>
                <GiCheckMark className="icon-list" />
<<<<<<< HEAD
                Ingin solusi lunas hutang dan bebas riba?
=======
                Ingin solusi lunas hutang dan bebas riba
>>>>>>> 9017120 (commit)
              </li>
            </ul>
          </div>
          <div className="foto">
            <img src="https://sahabatrizkymilioner.com/wp-content/uploads/2023/01/DSC00013-copy-min-247x300-1.png"></img>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
      <div className="fifth">
        <Video />
      </div>

      <div className="grid">
        <Card judul={post.nama} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
>>>>>>> 9017120 (commit)
    </div>
  );
}

export default HomePage;