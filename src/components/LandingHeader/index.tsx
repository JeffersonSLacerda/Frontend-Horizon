import logo from '../../assets/Logo.png';
import {useHistory} from 'react-router-dom'
import BrImage from '../../assets/brasil-icon -ptbr.png';
import SearchBox from '../SearchBox'
interface LandingHeaderProps {
    showSearch: boolean
  }
const buttons = [
    {
        name: 'Início',
        view: '',
        newPage: true,
    },
    {
        name: 'Contato',
        view: 'contact',
        newPage: true,
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

const LandingHeader = ({ showSearch }: LandingHeaderProps) => {
    const history = useHistory()
    return (
        <nav id="landing-header" className='header-overlay'>
            <div className="logo">
                <img className="img-logo" width={260} height={90} src={logo} />
                <img className="img-brasil" src={BrImage} />
            </div>
            {showSearch == true ?<SearchBox/> : ""}
            
            <div className='buttons'>

                {
                    buttons.map(button => <button onClick={() => showView(button.view, button.newPage, history)} >{button.name}</button>)
                }
            </div>
        </nav>
    )
}

export default LandingHeader;