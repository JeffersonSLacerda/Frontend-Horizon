import React, { useCallback, useRef, useEffect, useState } from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select/async';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { Container } from './style';

interface SelectProps extends AsyncProps<OptionTypeBase> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

interface CityResponse {
  nome: string;
}

const SelectCityState: React.FC<SelectProps> = ({
  name,
  icon: Icon,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [uf, setUf] = useState('AC');
  const [listUf, setListUf] = useState([]);
  const [city, setCity] = useState('');
  const [listCity, setListCity] = useState([]);

  const loadUf = useCallback(async (): string[] => {
    let url = 'https://servicodados.ibge.gov.br/';
    url += 'api/v1/localidades/estados';
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((uf1, uf2) => uf1.nome.localeCompare(uf2.nome));
        setListUf([...data]);
      });
  }, []);

  const loadCity = useCallback(async (id: string) => {
    let url = 'https://servicodados.ibge.gov.br/api/v1/';
    url += `localidades/estados/${id}/municipios`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((city1: CityResponse, city2: CityResponse) =>
          city1.nome.localeCompare(city2.nome)
        );
        setListCity([...data]);
      });
  }, []);

  useEffect(() => {
    loadUf();
  }, []);

  useEffect(() => {
    if (uf) {
      loadCity(uf);
    }
  }, [uf]);

  return (
    <Container>
      {Icon && <Icon />}
      <Select
        cacheOptions
        defaultValue={defaultValue}
        ref={selectRef}
        {...rest}
      />
      <select {...rest} />
    </Container>
  );
};

export default SelectCityState;
