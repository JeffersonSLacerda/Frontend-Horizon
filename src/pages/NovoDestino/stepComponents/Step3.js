import React from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, ButtonGroup, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import TimePicker from 'react-bootstrap-time-picker';
import CurrencyInput from 'react-currency-input-field';

const Step = () => {
    return (
        <div>
            <Form id='step3'>
                <div>
                    <Form.Label className='label'><b>Preço</b></Form.Label>
                    <InputGroup

                        className="price-input-group">
                        <InputGroup.Prepend>
                            <InputGroup.Text>R$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <a
                        data-tip data-for='preco-tooltip' >
                        <b>?</b>
                    </a>
                    <ReactTooltip id='preco-tooltip' place='top' effect='solid' >
                        #natureza #praia #sol #mar
                    </ReactTooltip>
                </div>

                <div>
                    <Form.Label className='label'><b>Horário de funcionamento</b></Form.Label>
                    <div className='time-div'>
                        <TimePicker className='time-picker' start="00:00" end="24:00" step={30} />
                        <TimePicker className='time-picker' start="00:00" end="24:00" step={30} />
                    </div>

                    <a
                        data-tip data-for='localTip-2' >
                        <b>?</b>
                    </a>
                    <ReactTooltip id='' place='top' effect='solid' >
                        #natureza #praia #sol #mar
                    </ReactTooltip>
                </div>

                <div>
                    <Form.Label className='label'><b>Melhor horário de visita</b></Form.Label>
                    <div className='time-div'>
                        <TimePicker className='time-picker' start="00:00" end="24:00" step={30} />
                        <TimePicker className='time-picker' start="00:00" end="24:00" step={30} />
                        <TimePicker className='time-picker' start="00:00" end="24:00" step={30} />
                    </div>
                    <a
                        data-tip data-for='localTip-2' >
                        <b>?</b>
                    </a>
                    <ReactTooltip id='' place='top' effect='solid' >
                        #natureza #praia #sol #mar
                    </ReactTooltip>
                </div>
            </Form>
        </div>)
}

const Step3 = (props: StepComponentProps) => {
    console.log({ props });
    return (
        <div className="step">
            <Step />

            <div className='stepButtons'>
                {
                    <>
                        <button
                            disabled={props.isFirst()} onClick={props.prev}>
                            Voltar
					</button>

                    </>
                }
                {props.hasNext() && <button
                    onClick={props.next}>Próximo</button>}
            </div>

        </div>
    );
};

export default Step3