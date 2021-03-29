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
            <Steps>
                <Step component={Step1} />
                <Step component={Step1} />
            </Steps>
        </div>
    )
}
export default NovoDestino