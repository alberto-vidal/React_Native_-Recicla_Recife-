import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Header from './components/Header';

const Page_03_01 = ({navigation}) => {
    return (
      <>
        <Header title={("Recicla Recife"+"\n"+"Ecopontos")}></Header>
        
        <View>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
                <Image style={{ width: 30, height: 30 }} source={require('./components/menu.png')}/> 
                <Text style={styles.menutext}>Menu</Text>
            </TouchableOpacity>    
        </View>
        
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Locais de Coleta Seletiva{"\n"}(ECO)
                </Text>
                <Text>Mapa</Text>
            </View>
            <View style={styles.grupo_Botoes}>
            <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Home')}>
                <Text style={{color: "white"}}>Voltar</Text>
            </TouchableOpacity>
            </View>
        </View>
    </>
      
    );
  }
  
  export default Page_03_01

  const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#C5FDC4',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 130,    
    },
    menu:{
        flexDirection: 'row',
    },
    menutext:{
        fontSize: 20,
        paddingHorizontal: 10,
    },
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    grupo_Botoes:{
        flexDirection: 'row',
        flex:3,
        alignItems: 'center',
        backgroundColor: '#C5FDC4',
        justifyContent: "space-around",
        paddingBottom: 200,
            
    },
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
  });