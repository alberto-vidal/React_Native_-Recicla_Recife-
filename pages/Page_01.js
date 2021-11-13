import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Header from './components/Header';

const Separator = () => (
    <View style={styles.separator} />
    
  );

export default function Page_01() {
  return (
    <>
      <Header title={("Recicla Recife"+"\n"+"Menu")}></Header>
      <View style={styles.container}>
        <Button
            title="Informativo"
            color="#0D9CFA"
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