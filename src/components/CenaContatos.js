import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={styles.backgroungView}>

        <View>
          <StatusBar backgroundColor='#61BD8C' />
          <BarraNavegacao voltar navigator={this.props.navigator} corfundo='#61BD8C'/>
        </View>

        <View>

          <View style={styles.title}>
            <Image source={detalheContatos} />
            <View style={styles.titleTextView}>
              <Text style={styles.titleText}>Contatos</Text>
            </View>
          </View>

          <View style={styles.detalheContatos}>
            <Text style={styles.contatosText}>TEL: (11) 1234-1234</Text>
            <Text style={styles.contatosText}>CEL: (11) 91234-1234</Text>
            <Text style={styles.contatosText}>EMAIL: contato@atmconsultoria.com</Text>
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
    color: '#61BD8C',
     fontSize: 32,
  },
  titleTextView: {
    alignItems: 'center',
    flex: 1
  },

  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  contatosText: {
    fontSize: 18
  }
});
