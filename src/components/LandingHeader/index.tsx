import logo from '../../assets/Logo.png';
const buttons = ['Entrar', 'Contato', 'Cadastre-se'];

const LandingHeader = () => {
    return (
        <nav id="header">
            <img width={260} height={90} src={logo} />
            <div className='buttons'>
                {
                    buttons.map(button => <button>{button}</button>)
                }
            </div>
        </nav>
    )
}

export default LandingHeader;