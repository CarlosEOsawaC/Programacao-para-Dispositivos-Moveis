import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

import Praia01 from './assets/praia.png'
import FotoPerfil from './assets/perfil.png'

export default function app() {
  return (
    <View style={styles.container}>

      <Image source={Praia01} style={{width: '100%', height: 180}} />

      <View style={styles.descricao}>
        <Text style={[styles.title, styles.text]}>PUNTA CANA</Text>
        <Text style={[styles.text, styles.textDes]}>
          4 hóspedes - 2 quarto - 2 camas - 1 banheiro
        </Text>

        <View style={styles.comentarios}>
          <Text style={[styles.text, styles.subText]}>★ 4,70 (61 comentários)</Text>
          <View style={styles.comentarios}>

            <View style={styles.cardPerfil}>
              <Image source={FotoPerfil} style={{width: 50, height: 50, borderRadius: '100%'}} />
              <View style={styles.colum}>
                <Text style={[styles.text, styles.subTitle]}>Milena</Text>
                <Text style={[styles.text, styles.textDes]}>fevereiro 2021</Text>
              </View>
            </View>
            <Text style={[styles.text, styles.textComen]}>
              Excelente localização e estrutura. Funcionários muito atenciosos e prestativos.
            </Text>

            <View style={styles.cardPerfil}>
              <Image source={FotoPerfil} style={{width: 50, height: 50, borderRadius: '100%'}} />
              <View style={styles.colum}>
                <Text style={[styles.text, styles.subTitle]}>Steffany</Text>
                <Text style={[styles.text, styles.textDes]}>janeiro 2021</Text>
              </View>
            </View>
            <Text style={[styles.text, styles.textComen]}>
              Ótima localização! Proximo aos principais pontos de interesse em punta cana.         Comodidades no flat. Os fucionários também se mostraram dispostos a resolver imprevistos.
            </Text>

            <View style={styles.cardPerfil}>
              <Image source={FotoPerfil} style={{width: 50, height: 50, borderRadius: '100%'}} />
              <View style={styles.colum}>
                <Text style={[styles.text, styles.subTitle]}>Maria Luiza</Text>
                <Text style={[styles.text, styles.textDes]}>dezembro 2020</Text>
              </View>
            </View>
            <Text style={[styles.text, styles.textComen]}>
              Super recomendo, atendimento maravilhoso, flat super organizado, bem localizado, aconchegante!
            </Text>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: Constants.statusBarHeight
  },
  descricao: {
    flex: 1,
    padding: 7
  },
  cardPerfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  colum: {
    paddingLeft: 10,
    flexDirection: 'column'
  },
  comentarios:{
    paddingTop: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'Roboto',
  },
  subText: {
    fontSize: 15,
    //fontWeight: 'bold'
  },
  textComen: {
    paddingVertical: 10,
  },
  textDes: {
    color: 'grey'
  }
});
