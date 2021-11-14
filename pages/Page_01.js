import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Header from './components/Header';

const Page_01 = ({navigation}) => {
  return (
    <>
      <Header title={("Recicla Recife"+"\n"+"Menu")}></Header>
      <View style={styles.container}>
        <Button
            title="Informativo"
            color="#0D9CFA"
            onPress = {() => navigation.navigate('Page_01_01')}
        />
        <Button
            title="Coleta de Lixo"
            color="#F21E1E"
        />
        <Button
            title="Ecopontos"
            color="#0BCF05"
        />
        <Button
            title="Denuncie"
            color="#E1CC06"
        />
      </View>
    </>
    
  );
}

export default Page_01

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5FDC4',
    //alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: "space-between",
    paddingTop: 130,
    paddingBottom: 130,    
  },
      
});