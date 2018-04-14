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
                underlayColor={'#B9C941'}
                activeOpacity={0.3}
                onPress={() => {
                  this.props.navigator.push({ id: 'cliente' })
                }}
              >
                <Image style={styles.imgMenu} source={imgClientes} />
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  this.props.navigator.push({ id: 'contato' })
                }}
              >
              <Image style={styles.imgMenu} source={imgContato} />
              </TouchableHighlight>

            </View>

            <View style={styles.menuGrupo}>

              <TouchableHighlight
                underlayColor={'#EC7148'}
                activeOpacity={0.3}
                onPress={() => {
                  this.props.navigator.push({ id: 'empresa' })
                }}
              >
                <Image style={styles.imgMenu} source={imgEmpresa} />
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor={'#19D1C8'}
                activeOpacity={0.3}
                onPress={() => {
                  this.props.navigator.push({ id: 'servicos' })
                }}
              >
                <Image style={styles.imgMenu} source={imgServicos} />
              </TouchableHighlight>

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
