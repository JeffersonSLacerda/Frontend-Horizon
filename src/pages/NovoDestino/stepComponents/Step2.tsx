import React from "react";
import { StepComponentProps } from "../lib-ts";
import { Form, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

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
    return (
        <StepComponent>
            <Form>
                <Form.Label>Cidade e Estado</Form.Label>
                <InputGroup>
                    <FormControl
                        placeholder="Cidade"
                        aria-label="Cidade"
                        aria-describedby="basic-addon2"
                    />

                    <select id="address_state" className="form-control" name="address_state" >
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
			<Step/>
			
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
