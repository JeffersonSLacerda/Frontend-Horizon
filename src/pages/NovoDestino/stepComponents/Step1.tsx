import React from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, ButtonGroup, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'
interface UfData {
    id: number;
    sigla: string;
}

interface CityData {
    id: number;
    nome: string;
}
interface Step1Data {
    nome: string;
    rua: string;
    numero: number;
    bairro: string;
    city: string;
    uf: string;
}
const Step = (props: StepComponentProps) => {
    const [city, setCity] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [local, setLocal] = useState('')
    const [uf, setUf] = useState('')
    const [rua, setRua] = useState('')
    console.log(city)
    return (
        <Form className='step'>
            <div className='checks'>
                <Form.Check
                    className='radiobutton'
                    type='radio'
                    id='raiz'
                    label='Turismo Raiz'
                    name='turismoTipo'
                />
                <Form.Check
                    className='radiobutton'
                    name='turismoTipo'
                    type='radio'
                    id='nutella'
                    label='Turismo Nutella'
                />
            </div>
            <div>
                <Form.Label
                    className='label'
                ><b>Cidade e Estado</b></Form.Label>

                <InputGroup>
                    <FormControl
                        onChange={props.handleChange}
                        value={props.getState("city", "")}
                        name='city'
                        placeholder="Cidade"
                        aria-label="Cidade"
                        aria-describedby="basic-addon2"
                    />

                    <select

                        id="address_state" className="form-control" name="address_state" >
                        <option selected>Escolher...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goías</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraíma</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </InputGroup>
            </div>
            <div>
                <Form.Label
                    className='label'
                ><b>Nome do Local</b></Form.Label>
                <InputGroup>
                    <FormControl
                        onChange={props.handleChange}
                        value={props.getState("name", "")}
                        name='name'
                        placeholder='Digite aqui...' aria-label='O hotel cadastrado' />
                    <InputGroup.Append>
                        <a
                            data-tip data-for='localTip' >
                            <b>?</b>
                        </a>
                        <ReactTooltip id='localTip' place='right' effect='solid' >
                            Você deve digitar o nome do hotel ou pousada credenciada.
                            </ReactTooltip>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div>
                <Form.Label className='label'
                ><b>Endereço do Local</b></Form.Label>
                <InputGroup className='inputGroup'>
                    <InputGroup.Prepend>
                        <select className='form-control'>
                            <option>Rua</option>
                            <option>Avenida</option>
                            <option>Travessa</option>
                        </select>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={props.handleChange}
                        value={props.getState("endereco", "")}
                        name='endereco'
                        placeholder="Digite aqui..."
                        aria-label="Nome"
                        aria-describedby="basic-addon2"
                    />
                    <div className='address'>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Nº</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            min={0}
                            className='adressNumber'

                            type='number'
                            placeholder="Digite aqui..."
                            aria-label="Digite aqui..."
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>Bairro</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            min={0}
                            type='text'
                            placeholder="Digite aqui..."
                            aria-label="Digite aqui..."
                            aria-describedby="basic-addon2"
                        />
                    </div>
                </InputGroup>
            </div>
        </Form>
    )
}
const Step1 = (props: StepComponentProps) => {
    console.log({ props });
    return (
        <div className="step">
            <Step {...props} />

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

export default Step1;
