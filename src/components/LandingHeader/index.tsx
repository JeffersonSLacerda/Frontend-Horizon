import logo from '../../assets/Logo.png';
const buttons = [
    {
        name: 'Início',
        view: 'bg'
    },
    {
        name: 'Contato',
        view: 'contact'
    },
    {
        name: 'Entrar',
        view: 'entrar'
    },
    {
        name: 'Cadastre-se',
        view: 'cadastro'
    }
];

function showView(view: any): any {
    console.log('scroll into ', view)
    document.getElementById(view)?.scrollIntoView({ block: 'center', behavior: "smooth" })
}

const LandingHeader = () => {
    return (
        <nav id="landing-header">
            <img width={260} height={90} src={logo} />
            <div className='buttons'>
                {
                    buttons.map(button => <button onClick={() => showView(button.view)} >{button.name}</button>)
                }
            </div>
        </nav>
    )
}

export default LandingHeader;