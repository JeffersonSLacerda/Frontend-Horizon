import React from 'react'
import Header from '../../../components/Header'
import './step1.scss'
import symbol from '../../../assets/Symbol.png'
import img2 from '../../../assets/img2.jpg'
import StarRatings from 'react-star-ratings'
import { useHistory, useLocation } from 'react-router-dom'
import $ from 'jquery'
import ScrollableContainer from '../../../components/ScrollableContainer'
import { FaChevronDown } from 'react-icons/fa'
import { StepComponentProps } from '../lib-ts'
const Divider = () => (
    <div id='divider'>
        <div />
        <img src={symbol} />
        <div />
    </div>

)

const Item = (props: any, stepedProps: StepComponentProps) => {
    const history = useHistory()

    return (
        < div className='item' id={`item-${props.id}`}>

            <img src={img2} />
            <div className='shadow-right'>
                <p><b>{props.title}</b></p>
                <div
                    style={{ display: 'flex', flexDirection: 'row' }}>
                    {props.tag.map((tag: any) => <p style={{ color: 'var(--blue)' }}>{`\\${tag}`}</p>)}
                </div>
                <div className='rating'
                >
                    <StarRatings
                        className='star-ratings'
                        starRatedColor='orange'
                        numberOfStars={5}
                        name='Avaliação'
                        starDimension='26px'
                        starSpacing='2px'
                        rating={props.rating}
                    />
                </div>
            </div>

            <button
                id='nextstepParent'
                onClick={(evt) => {
                    history.push('/step')

                }}
            >
                <b>&gt;</b>
            </button>
        </div >

    )
}


const itemsRaiz = [
    {
        id: 1,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 2,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 3,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 5,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 6,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 7,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 8,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    },
]
const itemsNutella = [
    {
        id: 1,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 2,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 3,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 5,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 6,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 7,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    }, {
        id: 8,
        title: 'Ponte dos Ingleses',
        tags: ['Praia', 'Sol', 'Surf'],
        rating: 4,
    },
]
function scroll() {
    $("#scroll").animate({ scrollTop: '500vw' })
    $("#scrollraiz").animate({ scrollTop: '500vw' })


}
const Content = () => (
    <div className='row'>
        <div className='column'>
            <h3>Turismo Nutella</h3>
            <ScrollableContainer
                id='scroll'>
                {
                    itemsRaiz.map(item => (<Item
                        title={item.title}
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
                    itemsNutella.map(item => (<Item title={item.title}
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
const Title = (props: any) => (
    <div className='title2'>
        <h3>O que fazer em <span style={{ color: 'var(--blue)' }}> {props.place}</span> ?</h3>
    </div>
)
const Step = () => {
    const location: any = useLocation()

    return (<>
        {/* <Header /> */}
        <Title place={location.state.place} />
        <Divider />
        <Content />
    </>)
}

const Step1 = (props: StepComponentProps) => {

    $("#nextstepParent").click(function () {
        $(".nextstep").click()
    })

    return (
        <div id='step1-place'>
            <Step />

            {
                /**
                 * <div className='stepButtons'>
                {
                    <>
                        <button
                            className='nextstep'
                            disabled={props.isFirst()} onClick={(e) => {
                                e.preventDefault()
                                props.next
                                console.log('foda')
                            }}>
                            Voltar
                    </button>

                    </>
                }
                {props.hasNext() && <button
                    className='nextstep'
                    onClick={(e) => {
                        e.preventDefault()
                        props.next

                    }}>Próximo</button>}
            </div>
                 */
            }
        </div>
    )
}
export default Step1