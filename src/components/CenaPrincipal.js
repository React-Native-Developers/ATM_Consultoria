import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgLogo = require('../imgs/logo.png');
const imgClientes = require('../imgs/menu_cliente.png');
const imgContato = require('../imgs/menu_contato.png');
const imgEmpresa = require('../imgs/menu_empresa.png');
const imgServicos = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor='#CCC' />
          <BarraNavegacao />
        </View>
        <View>
          <View style={styles.logo}>
            <Image source={imgLogo} />
          </View>
          <View style={styles.menu}>
            <View style={styles.menuGrupo}>
              <TouchableHighlight
                onPress={() => {
                  this.props.navigator.push({ id: 'b' })
                }}
              >
                <Image style={styles.imgMenu} source={imgClientes} />
              </TouchableHighlight>
              <Image style={styles.imgMenu} source={imgContato} />
            </View>
            <View style={styles.menuGrupo}>
              <Image style={styles.imgMenu} source={imgEmpresa} />
              <Image style={styles.imgMenu} source={imgServicos} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
