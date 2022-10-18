import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';

export default function CovidMunicipios() {
  const [cidade, setCidade] = useState('');
  const [loading, setLoading] = useState(false);
  const [qtdObito, setEndereco] = useState(null);

  function handleButton() {
    if (cidade.trim().length < 3)
      Alert.alert('Erro', 'O CEP tem que ter 8 digitos');
    else {
      setLoading(true);
      axios
        .get(
          `https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-municipio?tipo=%C3%93bito&data=2020-05-08${cidade}`
        )
        .then(res =>
          res.data.cidade ? setEndereco(res.data) : setEndereco(null)
        )
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        keyboardType="number-pad"
        placeholder="informe o cep"
        maxLength={8}
        style={{
          borderBottomColor: '#282B35',
          borderBottomWidth: 1,
          height: 40,
          padding: 5,
          margin: 10,
          textAlign: 'center',
        }}
        onChangeText={e => setCidade(e)}
      />
      <Button title="busca cep" onPress={handleButton} />
      <ActivityIndicator animating={loading} size="large" color="#0000ff" />
      {qtdObito && <PainelCEP data={qtdObito} />}
    </View>
  );
}

function PainelCEP(props) {
  const { qtdObito } = props.data;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#282B35',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 8,
      }}>
      <Text style={{ marginBottom: 10 }}>CEP{qtdObito}</Text>
      <Text style={{ marginBottom: 10 }} />
      <Text style={{ marginBottom: 10 }} />
      <Text style={{ marginBottom: 10 }} />
      <Text style={{}} />
    </View>
  );
}
