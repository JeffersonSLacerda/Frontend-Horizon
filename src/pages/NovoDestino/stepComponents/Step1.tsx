import React, { useEffect, useState, useCallback } from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, ButtonGroup, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import axios from "axios";

const Step = (props: StepComponentProps) => {
    const [city, setCity] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [local, setLocal] = useState('')
    const [uf, setUf] = useState('')
    const [rua, setRua] = useState('')
    const [type, setType] = useState('')

    const [ufOptions, setUfOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    const loadUfOptions = useCallback(async () => {
        const response = await axios.get(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

        )
        const data = response.data.map((uf : any) => {
            console.log(uf)
            return uf

        })
        setUfOptions(data)
    }, [])
    // const loadCityOptions = useCallback(async (city) => {
    //     const response = await axios.get(
    //         `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${city}/municipios`
    //     );
    //     const data = response.data.map((city) => {
    //         console.log(city)
    //         return city
    //     })
    //     setCityOptions(data)
    //     console.log(cityOptions)
    // })

    // useEffect(() => {
    //     loadUfOptions()
    //     console.log(ufOptions)
    // }, [loadUfOptions])
    // useEffect(() => {
    //     loadCityOptions(uf)
    // }, [uf])

    return (
        <Form className='step'>
            <div className='checks'>
                <Form.Check
                    className='radiobutton'
                    type='radio'
                    id='raiz'
                    label='Turismo Raiz'
                    name='turismoTipo'
                    onChange={(event) => {
                        setType(event.target.value)
                    }}
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
                    style={{ marginRight: '10px' }}
                    className='label'
                ><b>Selecionar Estado e Cidade</b></Form.Label>

                <InputGroup>
                    <select
                        onChange={(e) => {
                            setUf(e.target.value)
                            props.setState("uf", e.target.value)
                            props.handleChange
                        }}
                        // value={props.getState("uf")}
                        name='uf'
                        id="address_state" className="form-control"  >
                        {/* {
                            ufOptions.map((value) => (
                                <option value={value.sigla}>
                                    {value.nome}
                                </option>
                            ))
                        } */}
                    </select>
                    <select
                        onChange={(e) => {
                            props.setState("city", e.target.value)
                            props.handleChange
                        }}
                        value={props.getState("city", "")}
                        name='city'
                        id="address_state" className="form-control"  >
                        {/* {
                            cityOptions.map((value) => (
                                <option value={value.sigla}>
                                    {value.nome}
                                </option>
                            ))
                        } */}
                    </select>

                </InputGroup>
            </div>
            <div>
                <Form.Label
                    style={{ marginRight: '10px' }}
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
                    style={{ marginRight: '10px' }}
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
