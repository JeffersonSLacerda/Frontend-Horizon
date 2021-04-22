import Header from '../../../components/Header'
import fortaleza from '../../../assets/fortaleza.jpg'
const Content = () => {
    return(
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
            <div className='column2 column'>
                <h2>Beira Mar Fortaleza</h2>
                <p>Praia/ Esporte/ Lazer</p>
                
                <div>
                    <p></p>
                </div>
            </div>
            
        </div>
    )
}
const Step2 = (props:any) => {
    return (
        <div className='step2'>
            <h1>O que fazer em Fortaleza - CE?</h1>

            <Header />
            <Content/>
        </div>
    )
}
export default Step2