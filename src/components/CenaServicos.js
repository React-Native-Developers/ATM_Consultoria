import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={styles.backgroungView}>

        <View>
          <StatusBar backgroundColor='#19D1C8' />
          <BarraNavegacao voltar navigator={this.props.navigator} corfundo='#19D1C8' />
        </View>

        <View>

          <View style={styles.title}>
            <Image source={detalheServicos} />
            <View style={styles.titleTextView}>
              <Text style={styles.titleText}>Nossos Serviços</Text>
            </View>
          </View>

          <View style={styles.detalheServicos}>
            <Text style={styles.servicoText}>- Consultoria</Text>
            <Text style={styles.servicoText}>- Processos</Text>
            <Text style={styles.servicoText}>- Acompanhamento de Projetos</Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  backgroungView: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center'
  },
  titleText: {
    color: '#19D1C8',
     fontSize: 32,
  },
  titleTextView: {
    alignItems: 'center',
    flex: 1
  },

  detalheServicos: {
    marginTop: 20,
    padding: 20
  },
  servicoText: {
    fontSize: 18
  }
});
