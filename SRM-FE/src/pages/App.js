import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
<<<<<<< HEAD
import HomePage from './HomePage';
import '../pages/App.scss';
import Contact from '../component/Contact';
import Axios from 'axios';
=======
import { Route, Routes } from 'react-router-dom';
import '../pages/App.scss';
import Axios from 'axios';
import { paths } from '../config/path';
>>>>>>> 9017120 (commit)

function App() {
  const [post, setPost] = useState({
    nama: '',
    kota: '',
    noHp: '',
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
  return (
    <div className="main-padding">
<<<<<<< HEAD
      <Header alamat={post.kota} email={post.nama} noHp={post.noHp} />
      <HomePage nama={post.nama} noHp={post.noHp} />

      <Footer />
=======
      <header>
        <Header alamat={post.kota} email={post.nama} noHp={post.noHp} />
      </header>
      <main>
        <Routes>
          {paths.map((item, index) => (
            <Route key={index} {...item} />
          ))}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
>>>>>>> 9017120 (commit)
    </div>
  );
}

export default App;
