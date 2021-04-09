import React from 'react'
import Header from '../../../components/Header'
import './style.scss'
import symbol from '../../../assets/Symbol.png'
import img2 from '../../../assets/img2.jpg'
import StarRatings from 'react-star-ratings'
import { useLocation } from 'react-router-dom'
import $ from 'jquery'
import ScrollableContainer from '../../../components/ScrollableContainer'
import { FaChevronDown } from 'react-icons/fa'
const Divider = () => (
    <div id='divider'>
        <div />
        <img src={symbol} />
        <div />
    </div>

)

const Item = (props) => (
    <div className='item' id={`item-${props.id}`}>
        <img src={img2} />
        <div className='shadow-right'>
            <p><b>{props.title}</b></p>
            <div
                style={{ display: 'flex', flexDirection: 'row' }}>
                {props.tag.map((tag) => <p style={{ color: 'var(--blue)' }}>{`\\${tag}`}</p>)}
            </div>
            <div className='rating'
            >
                <StarRatings
                    starRatedColor='orange'
                    numberOfStars={5}
                    name='Avaliação'
                    starDimension='26px'
                    starSpacing='2px'
                    rating={props.rating}
                />
            </div>
        </div>

        <button>
            <b>></b>
        </button>
    </div>

)


const itemsRaiz = [
    {
        id: 1,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id : 2,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    }, {
        id : 3,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    }, {
        id : 5,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },{
        id : 6,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },{
        id : 7,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },{
        id : 8,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },
]
const itemsNutella = [
    {
        id: 1,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id : 2,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    }, {
        id : 3,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    }, {
        id : 5,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },{
        id : 6,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },{
        id : 7,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },{
        id : 8,
        title : 'Ponte dos Ingleses',
        tags :['Praia', 'Sol', 'Surf'],
        rating:4,
    },
]
function scroll(item) {
    $("#scroll").animate({scrollTop: '500vw'})
    $("#scrollraiz").animate({scrollTop: '500vw'})
    

}
const Content = () => (
    <div className='row'>
        <div className='column'>
            <h3>Turismo Nutella</h3>
            <ScrollableContainer
            id='scroll'>
                {
                    itemsRaiz.map(item=> (<Item title={item.title}
                        id={item.id}
                        tag={item.tags}
                        rating={item.rating}
                        />))
                }
            </ScrollableContainer>
        </div>
        <div className='column'>
            <h3>Turismo Raiz</h3>
            <ScrollableContainer
            id='scrollraiz'>
                {
                    itemsNutella.map(item=> (<Item title={item.title}
                        id={item.id}
                        tag={item.tags}
                        rating={item.rating}
                        />))
                }
            </ScrollableContainer>
        </div>
        <footer>
            <button
                onClick={scroll}
                className='show'
            >
                <FaChevronDown
                    className='icon'
                />
            </button>
        </footer>
    </div>
)
const Title = (props) => (
    <div className='title'>
        <h3>O que fazer em <span style={{ color: 'var(--blue)' }}> {props.place}</span> ?</h3>
    </div>
)
const Step1 = () => {
    const location = useLocation()
    return (
        <div id='place'>
            <Header />
            <Title place={location.state.place} />
            <Divider />
            <Content />
        </div>
    )
}
export default Step1