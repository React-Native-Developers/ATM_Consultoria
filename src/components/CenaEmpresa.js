import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={styles.backgroungView}>

        <View>
          <StatusBar backgroundColor='#EC7148' />
          <BarraNavegacao voltar navigator={this.props.navigator} corfundo='#EC7148' />
        </View>

        <View>

          <View style={styles.title}>
            <Image source={detalheEmpresa} />
            <View style={styles.titleTextView}>
              <Text style={styles.titleText}>Empresa</Text>
            </View>
          </View>

          <View style={styles.detalheEmpresa}>
            <Text style={styles.empresaText}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</Text>
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
    color: '#EC7148',
     fontSize: 32,
  },
  titleTextView: {
    alignItems: 'center',
    flex: 1
  },

  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  empresaText: {
    fontSize: 18
  }
});
