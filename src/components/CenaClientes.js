import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>

        <View>
          <StatusBar backgroundColor='#CCC' />
          <BarraNavegacao />
        </View>

        <View style={styles.backgroungView}>

          <View style={styles.title}>
            <Image source={detalheClientes} />
            <View style={styles.titleTextView}>
              <Text style={styles.titleText}>Nossos Clientes</Text>
            </View>
          </View>

          <View style={styles.clientes}>
            <Image source={cliente1} />
            <Text style={styles.clientesText}>Lorem ipsum dolorem</Text>
          </View>

          <View style={styles.clientes}>
            <Image source={cliente2} />
            <Text style={styles.clientesText}>Lorem ipsum dolorem</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  backgroungView: {
    backgroundColor: 'white',
  },
  title: {
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center'
  },
  titleText: {
    color: '#B9C941',
     fontSize: 32,
  },
  titleTextView: {
    alignItems: 'center',
    flex: 1
  },

  clientes: {
    margin: 20
  },
  clientesText: {
    marginLeft: 20,
    fontSize: 20
  }

});
