import React, { useState, useEffect } from 'react';
import img1 from '../../assets/slide/img1.jpg'
import img2 from '../../assets/slide/img2.jpg'
import img3 from '../../assets/slide/img3.jpg'
import img4 from '../../assets/slide/img4.jpg'
import img5 from '../../assets/slide/img5.jpg'
import $ from 'jquery'
import LandingHeader from '../../components/LandingHeader'

const buttons2 = [{
  name: 'Viagem Aleatória',
  class: 'viagemAleatoria',
  title: 'Surpreenda-se com seu destino.',
  message: 'A viagem aleatória significa que você fará uma viagem aleatória de acordo com o que é aleatório.'
}, {
  name: 'Passeio Aleatório',
  class: 'passeioAleatorio',
  title: 'Faça sua mala e se encotre na viagem da sua vida.',
  message: 'O passeio aleatório significa que você fará uma viagem aleatória de acordo com o que é aleatório.'


}, {
  name: 'Novo Destino',
  class: 'novoDestino',
  title: 'Escolha você mesmo seu lugar.',
  message: 'O destino é você quem escolhe, logo ele não será aleatório ava'


}]
const Input = () => {
  return (
    <div id='input'>
      <h1>O que fazer em...</h1>
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

function showDescription(component:string, message:string){
  $('#title').show().text(component)
  $('#subtitle').show().text(message)

  $('#title').animate({transform: 'translateX(-50px)'})
  console.log(component)
}
const Buttons = () => {
  return (
    <div className='buttons'>
      {
        buttons2.map(button => <button 
          onMouseOver={()=>showDescription(button.title, button.message)}
          className={button.class}>{button.name} </button>)
      }
    </div>
  )
}

const Content = () => {
  
  return (
    <div id='content'>
      <div className='center'>
        <div className='left-block'>
          <Input />
          <Buttons />
        </div>
        <div className='right-block'>
          <h1 id='title' className='title'>Surpreenda-se com seu destino.</h1>
          <p id='subtitle' >Viagem e lazer</p>
        </div>

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
