import React, { useCallback, useRef, useEffect, useState } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiHome } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Select, { Option } from '../../components/Select';
import Button from '../../components/Button';

import {
  Container,
  AnimetedContainer,
  Content,
  Background,
  ContainerSelect,
} from './style';

interface UfData {
  id: number;
  sigla: string;
}

interface CityData {
  id: number;
  nome: string;
}

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  uf: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [ufOptions, setUfOptions] = useState<Option[]>([]);
  const [cityOptions, setCityOptions] = useState<Option[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const loadUfOptions = useCallback(async () => {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );

    const data = response.data.map((uf: UfData) => {
      return {
        value: uf.sigla,
        label: uf.sigla,
      };
    });

    setUfOptions(data);
  }, []);

  const handleLoadCityOptions = useCallback(async (option) => {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${option.value}/municipios`
    );

    const data = response.data.map((city: CityData) => {
      return {
        value: city.nome,
        label: city.nome,
      };
    });

    console.log(data)
  }, []);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          firstName: Yup.string().required('Primeiro nome obrigatório'),
          lastName: Yup.string().required('Último nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
          city: Yup.string().required('Selecione uma cidade'),
          uf: Yup.string().required('Selecione um Estado'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          city: data.city,
          uf: data.uf,
          profile: 'client',
          isAtivo: true,
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login na Horizon',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao tentar cadastrar, tente novamente',
        });
      }
    },
    [addToast, history]
  );

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!selectRef.current?.value);
  }, []);

  useEffect(() => {
    loadUfOptions();
  }, [loadUfOptions]);

  return (
    <Container>
      <Background />

      <Content>
        <AnimetedContainer>
          <img src={logoImg} alt="Horizon" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="firstName" icon={FiUser} placeholder="Primeiro nome" />
            <Input name="lastName" icon={FiUser} placeholder="Último nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <ContainerSelect>
              <FiHome />
              <Select
                name="city"
                options={cityOptions}
                placeholder="Selecione uma cidade"
                maxMenuHeight={100}
                className="react-select-city"
                isField={isField}
                isFocused={isFocused}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <Select
                name="uf"
                options={ufOptions}
                onChange={handleLoadCityOptions}
                maxMenuHeight={100}
                placeholder="UF"
                className="react-select-uf"
                isField={isField}
                isFocused={isFocused}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </ContainerSelect>

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        </AnimetedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
