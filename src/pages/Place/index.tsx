import React from 'react'
import Header from '../../components/Header'
import LandingHeader from '../../components/LandingHeader'
import symbol from '../../assets/Symbol.png'
import img2 from '../../assets/img2.jpg'
import StarRatings from 'react-star-ratings'
import { useLocation } from 'react-router-dom'
import $ from 'jquery'
import ScrollableContainer from '../../components/ScrollableContainer'
import { FaChevronDown } from 'react-icons/fa'
import {
    Steps,
    Step,
    NavigationComponentProps,
    StepsConfig,
} from "./lib-ts"
import Step1 from './stepComponents/Step1'
import Step2 from './stepComponents/Step2'

export const Navigation = (props:any) => {
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

const Place = () => {
    const config = {
        before: (props:any) => <Navigation {...props} test="test" />,
        after: Navigation,
        navigation: {
            component: Navigation,
            location: "before",
        },
    };
    const location = useLocation()

    return (

        <div id='place'>
            <LandingHeader showSearch={true}/>
            <Steps >
                <Step component={Step1}/>
                <Step component={Step2}/>
            </Steps>
        </div>
    )
}

export default Place