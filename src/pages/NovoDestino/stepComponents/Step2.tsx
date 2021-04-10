import React, { useState } from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import StarRatings from 'react-star-ratings'

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
    const [rating, setRating] = useState(0)
    function changeRating(newRating: any) {
        setRating(newRating)
    }

    return (
        <StepComponent>
            <Form className='form'>
                <div className='tags-content'>
                    <Form.Label>                        
                        <b>Tags</b>
                    </Form.Label>
                    <InputGroup className='tagGroup'>
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
                            </ReactTooltip>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <div className='avaliacao margin'>
                    <Form.Label>
                        <b>Sua avaliação</b>
                    </Form.Label>
                    <StarRatings
                        style={{
                            alignSelf: 'center',
                        }}
                        starRatedColor='blue'
                        numberOfStars={5}
                        name='Avaliação'
                        starDimension='30px'
                        starSpacing='5px'
                        rating={rating}
                        changeRating={changeRating}
                    />
                </div>
                <div className='check-content'>
                    <Form.Label><b>Deseja que apareça seu nome como divulgador do local?</b></Form.Label>
                    <div className='checks'>
                        <Form.Check
                            className='radiobutton'
                            type='radio'
                            id='sim'
                            label='Sim'
                            name='nome'
                        />
                        <Form.Check
                            className='radiobutton'

                            name='nome'
                            type='radio'
                            id='nao'
                            label='Não'
                        />
                        
                    </div>
                    <a
                                data-tip data-for='localTip-3' >
                                <b>?</b>
                            </a>
                        <ReactTooltip id='localTip-3' place='top' effect='solid' >
                                Seu nome aparecerá para os outros.
                        </ReactTooltip>
                </div>
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
