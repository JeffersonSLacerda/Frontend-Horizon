import React, { useState, useEffect } from 'react';
import img1 from '../../assets/slide/img1.jpg'
import img2 from '../../assets/slide/img2.jpg'
import img3 from '../../assets/slide/img3.jpg'
import img4 from '../../assets/slide/img4.jpg'
import img5 from '../../assets/slide/img5.jpg'
import $ from 'jquery'
import LandingHeader from '../../components/LandingHeader'
import Contact from '../Contact'
import { useHistory } from 'react-router-dom'
import { number } from 'yup';
import { rgba } from 'polished';

const buttons2 = [{
  name: 'Viagem Aleatória',
  class: 'viagemAleatoria',
  title: 'Surpreenda-se com seu destino.',
  message: 'A viagem aleatória significa que você fará uma viagem aleatória de acordo com o que é aleatório.',
  link: 'viagem_aleatoria'

}, {
  name: 'Novo Destino',
  class: 'novoDestino',
  title: 'Escolha você mesmo seu lugar.',
  message: 'O destino é você quem escolhe, logo ele não será aleatório ava',
  link: 'novo_destino'

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

function showDescription(component: string, message: string) {
  $('#title').show().text(component)
  $('#subtitle').show().text(message)

  $('#title').animate({ transform: 'translateX(-50px)' })
  console.log(component)
}
const Buttons = () => {
  const history = useHistory()
  return (
    <div className='buttons'>
      {
        buttons2.map(button => <button
          onClick={(event) => { event.preventDefault(); history.push(`/${button.link}`) }}
          onMouseOver={() => showDescription(button.title, button.message)}
          className={button.class}>{button.name} </button>)
      }
    </div>
  )
}

const Content = () => {
  $(window).scroll(function () {
    var scrollTop:any = $(this).scrollTop();
    $('.header-overlay').css({
      backgroundColor: function () {
        var elementHeight:any = $(this).height();
        let alpha:number = scrollTop/1000
        console.log((scrollTop)/1000)

        return rgba(0,0,0,Math.min(Math.max(alpha, 0), 0.35))
      }
    })
  })
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
    <div id='body'>
      <div id='bg' className='bg'>
        <LandingHeader />
        <Content />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};
export default Landing;
