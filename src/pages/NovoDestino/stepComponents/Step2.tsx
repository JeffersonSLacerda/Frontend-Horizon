import React, { useState } from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
const StepComponent = (props: any) => {
    return (
        <div className='step'>
            <h1>Novo Destino</h1>
            <p>Aqui você escolhe seu passeio de ponta a ponta.</p>
            {
                props.children
            }
        </div>
    )
}
const Step = () => {
    const [tags, setTags] = useState(['natureza', 'árvores', 'lagoa'])


    return (
        <StepComponent>
            <Form className='form'>
                <div className='tags-content'>
                    <Form.Label>Tags</Form.Label>
                    <InputGroup>
                        <TagsInput
                            className='tags'
                            value={tags}
                            onChange={(tags) => setTags(tags)}
                        />
                        <InputGroup.Append>
                            <a
                                data-tip data-for='localTip-2' >
                                <b>?</b>
                            </a>
                            <ReactTooltip id='localTip-2' place='top' effect='solid' >
                                #natureza #praia #sol #mar
                        </ReactTooltip></InputGroup.Append>
                    </InputGroup>
                </div>

                <Form.Label>Nome do Local</Form.Label>
                <InputGroup>
                    <FormControl placeholder='Digite aqui...' aria-label='O hotel cadastrado' />
                    <InputGroup.Append>
                        <a data-tip data-for='localTip' >
                            <b>?</b>
                        </a>
                        <ReactTooltip id='localTip' place='right' effect='solid' >
                            Você deve digitar o nome do hotel ou pousada credenciada.
                            </ReactTooltip>
                    </InputGroup.Append>
                </InputGroup>
                <Form.Label>Endereço do Local</Form.Label>
                <FormControl placeholder='Digite aqui...' />
            </Form>
        </StepComponent>
    )
}
const Step2 = (props: StepComponentProps) => {
    console.log({ props });
    return (
        <div className="step">
            <Step />

            <div className='stepButtons'>
                {
                    <>
                        <button disabled={props.isFirst()} onClick={props.prev}>
                            Voltar
					</button>

                    </>
                }
                {props.hasNext() && <button onClick={props.next}>Próximo</button>}
            </div>

        </div>
    );
};

export default Step2;
