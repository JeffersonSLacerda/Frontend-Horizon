import React from 'react'
import Header from '../../components/Header'
import { Form, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTooltip from 'react-tooltip'
import {
	Steps,
	Step,
	NavigationComponentProps,
	StepsConfig,
} from "./lib-ts/index";
import Step1 from './stepComponents/Step1'
import Step2 from './stepComponents/Step2'
import Step3 from './stepComponents/Step3'
const StepComponent = (props: any) => {
    return (
        <div className='step'>
            <h1>Novo Destino</h1>
            <p>Destinos são pontos turisticos, em cidades, que as pessoas podem conhecer. Esses destinos podem ser Raiz (locais que são geralmente mais visitados por moradores da própria cidade) e Nutella (locais que são mais visitados por turistas).</p>
            {
                props.children
            }
        </div>
    )
}

export const Navigation = (props: NavigationComponentProps) => {
	console.log({ navProps: props });
	return (
		<div>
			<button data-testid="global-prev" onClick={props.prev}>
				Global Previous
			</button>
			<button data-testid="global-next" onClick={props.next}>
				Global Next
			</button>
		</div>
	);
};

const Title = () => (
	<div style={{
		width: '50vw'
	}}>
		<h1>Novo Destino</h1>
		<p>Destinos são pontos turisticos, em cidades, que as pessoas podem conhecer. Esses destinos podem ser Raiz (locais que são geralmente mais visitados por moradores da própria cidade) e Nutella (locais que são mais visitados por turistas).</p>
	</div>
)

const NovoDestino = () => {
    const config: StepsConfig = {
		before: (props) => <Navigation {...props} test="test" />,
		after: Navigation,
		navigation: {
			component: Navigation,
			location: "before",
		},
	};
    return (
        <div id='new'>
            <Header />
			<Title/>
            <Steps>
                <Step component={Step1} />
                <Step component={Step2} />
				<Step component={Step3} />

            </Steps>
        </div>
    )
}
export default NovoDestino