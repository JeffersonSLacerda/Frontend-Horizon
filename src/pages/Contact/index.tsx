import React from 'react'
import Input from '../../components/Input'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './style.scss'

const Contact: React.FC = () => {
    return (
        <div id='contact'>
            <div className='content'>
                <div className='info'>
                    <div>
                        <p>Seu nome</p>
                        <input type='text' placeholder='Digite aqui...' />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type='text' placeholder='Digite aqui...' />
                    </div>
                </div>

                <div className='form'>
                    <div>
                    <p>Mensagem</p>
                    <input className='message' type='text' placeholder='Digite aqui...' />
                    
                    </div>
                    <button className='button'>
                        <AiOutlineArrowRight size='3x' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact