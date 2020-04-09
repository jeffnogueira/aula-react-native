import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';

export default function CadastroImovel({navigation}) {
  const [descricaoImovel, setDescricaoImovel] = useState('');
  const [email, setEmail] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [situacao, setSituacao] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}> Cadastro de Imóvel </Text>
        <View style={styles.form}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Descrição Imóvel"
              autoCapitalize="none"
              autoCorrect={false}
              value={descricaoImovel}
              onChangeText={text => setDescricaoImovel(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Logradouro"
              autoCapitalize="none"
              autoCorrect={false}
              value={logradouro}
              onChangeText={text => setLogradouro(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Número"
              value={numero}
              onChangeText={text => setNumero(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Complemento"
              value={complemento}
              onChangeText={text => setComplemento(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Bairro"
              value={bairro}
              onChangeText={text => setBairro(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Cidade"
              value={cidade}
              onChangeText={text => setCidade(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="CEP"
              value={cep}
              onChangeText={text => setCep(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="UF"
              value={uf}
              onChangeText={text => setUf(text)}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Situação Imóvel"
              value={situacao}
              onChangeText={text => setSituacao(text)}
            />
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
