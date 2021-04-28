import Header from '../../../components/Header'
import fortaleza from '../../../assets/fortaleza.jpg'
import MapContainer from '../../../components/MapContainer'
import './step2.scss'

const Content = () => {

    return (
        <div className='row'>
            <div className='column'>
                <div
                    className='cover'
                />
                <div
                    className='imgs'>
                    <img src={fortaleza} />
                    <img src={fortaleza} />
                    <img src={fortaleza} />
                    <img src={fortaleza} />
                    <img src={fortaleza} />
                    <img src={fortaleza} />
                </div>
            </div>
            <div className='column2'>
                <h2>Beira Mar Fortaleza</h2>
                <p className='blue-p'>Praia/ Esporte/ Lazer</p>

                <div className='descricao'>
                    <p><b>Melhor horário</b></p>
                    <p><b>Preço</b></p>
                    <p><b>Avaliação</b></p>
                    <p><b>Diversão local</b></p>
                </div>

                <div>
                    <MapContainer
                        
                    />
                </div>
            </div>

        </div>
    )
}
const Step2 = (props: any) => {
    return (
        <div className='step2'>
            <h1>O que fazer em Fortaleza - CE?</h1>

            <Header />
            <Content />
        </div>
    )
}
export default Step2