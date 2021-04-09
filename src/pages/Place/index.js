import React from 'react'
import Header from '../../components/Header'
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
} from "../../components/lib-ts/index";
import Step1 from './stepComponents/Step1'
export const Navigation = (props) => {
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
        before: (props) => <Navigation {...props} test="test" />,
        after: Navigation,
        navigation: {
            component: Navigation,
            location: "before",
        },
    };
    const location = useLocation()

    return (
        <div id='place'>
            <Steps>
                <Step component={Step1}/>
            </Steps>
        </div>
    )
}

export default Place