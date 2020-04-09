import React from 'react';
import {ScrollView} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent
} from 'react-native-cards';

export default function ListarImovel() {
  return (
    <ScrollView>
      <Card>
        <CardTitle subtitle="Descrição" />
        <CardContent text="email" />
        <CardContent text="logradouro" />
        <CardContent text="numero" />
        <CardContent text="complemento" />
        <CardContent text="bairro" />
        <CardContent text="cidade" />
        <CardContent text="cep" />
        <CardContent text="uf" />
        <CardContent text="nome do usuario" />
        <CardContent text="situacao Imóvel" />
      </Card>
      <Card>
        <CardTitle subtitle="Descrição" />
        <CardContent text="email" />
        <CardContent text="logradouro" />
        <CardContent text="numero" />
        <CardContent text="complemento" />
        <CardContent text="bairro" />
        <CardContent text="cidade" />
        <CardContent text="cep" />
        <CardContent text="uf" />
        <CardContent text="nome do usuario" />
        <CardContent text="situacao Imóvel" />
      </Card>
    </ScrollView>
  );
}
