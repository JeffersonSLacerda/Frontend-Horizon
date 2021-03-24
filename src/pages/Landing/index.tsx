import React, {useState, useEffect} from 'react';
import img1 from '../../assets/slide/img1.jpg'
import img2 from '../../assets/slide/img2.jpg'
import img3 from '../../assets/slide/img3.jpg'
import img4 from '../../assets/slide/img4.jpg'
import img5 from '../../assets/slide/img5.jpg'

import LandingHeader from '../../components/LandingHeader'

const buttons2 = ['Viagem Aleatória', 'Passeio Aleatório', "Criar Novo Desino"]
const Input = () => {
  return (
    <div id='input'>
      <h1>O que fazer em...?</h1>
      <input type='text' placeholder='Escolha sua viagem entre "Passeio Raiz" e "Passeio Nutella" ' />
    </div>
  )
}

const SlideShow = () => {
  
  return (
    <div className='slide-container'>
        <img src={img1}></img>
        <img src={img2}></img>

        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img1}></img>


    </div>
  )
}

const Buttons = () => {
  return (
    <div className='buttons'>
      {
        buttons2.map(button => <button>{button} </button>)
      }
    </div>
  )
}

const Content = () => {
  return (
    <div id='content'>
      <div className='left-block'>
        <Input />
        <Buttons />
      </div>
      <SlideShow />

    </div>
  )
}

const Landing: React.FC = () => {
  return (
    <div className='bg'>
      <LandingHeader />
      <Content />
    </div>
  );
};
export default Landing;
