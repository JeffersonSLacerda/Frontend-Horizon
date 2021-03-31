import logo from '../../assets/Logo.png';
import {useHistory} from 'react-router-dom'
const buttons = [
    {
        name: 'Início',
        view: 'bg',
        newPage: false,
    },
    {
        name: 'Contato',
        view: 'contact',
        newPage: false,
    },
    {
        name: 'Entrar',
        view: 'signin',
        newPage: true,
    },
    {
        name: 'Cadastre-se',
        view: 'signup',
        newPage: true,
    }
];

function showView(view: any, newPage: boolean, history: any): any {
    if (newPage) {
        history.push(`/${view}`)
    } else {


        console.log('scroll into ', view)
        document.getElementById(view)?.scrollIntoView({ block: 'center', behavior: "smooth" })
    }
}

const LandingHeader = () => {
    const history = useHistory()
    return (
        <nav id="landing-header">
            <img width={260} height={90} src={logo} />
            <div className='buttons'>
                {
                    buttons.map(button => <button onClick={() => showView(button.view, button.newPage, history)} >{button.name}</button>)
                }
            </div>
        </nav>
    )
}

export default LandingHeader;