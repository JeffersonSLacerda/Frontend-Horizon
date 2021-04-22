import React, { useState } from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import StarRatings from 'react-star-ratings'


const Step = () => {
    const [tags, setTags] = useState(['natureza', 'árvores', 'lagoa'])
    const [rating, setRating] = useState(0)
    function changeRating(newRating: any) {
        setRating(newRating)
    }

    return (
        <Form className='step'>
            <div className='step2component'>
                <Form.Label
                    className='label'>
                    <b>Tags</b>
                </Form.Label>

                <TagsInput
                    className='tags'
                    value={tags}
                    onChange={(tags) => setTags(tags)}
                />
                <a
                    data-tip data-for='localTip-2' >
                    <b>?</b>
                </a>
                <ReactTooltip id='localTip-2' place='top' effect='solid' >
                    #natureza #praia #sol #mar
                </ReactTooltip>
            </div>

            <div className='step2component'>
                <Form.Label className='label'>
                    <b>Sua avaliação</b>
                </Form.Label>
                <StarRatings
                    style={{
                        marginRight: '20px'
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
            <div className='step2component'>
            <Form.Label className='label'>
                    <b>Deseja que apareça seu nome como divulgador do local?</b></Form.Label>
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
