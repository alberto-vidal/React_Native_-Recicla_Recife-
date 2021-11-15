import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Header from './components/Header';

const Page_04_01_Retorno_Map = ({navigation}) => {
    return (
      <>
        <Header title={("Recicla Recife"+"\n"+"Denuncie")}></Header>
        
        <View>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
                <Image style={{ width: 30, height: 30 }} source={require('./components/menu.png')}/> 
                <Text style={styles.menutext}>Menu</Text>
            </TouchableOpacity>    
        </View>
        
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Denuncia
                </Text>
                <View style={styles.box01}>
                    <Text style={styles.texto_box}>Bairro:{" "}</Text>
                    <Text>Retorno pagina anterior Bairro</Text>
                </View>
                <View style={styles.box02}>
                    <Text style={styles.texto_box}>Endereço:{" "}</Text>
                    <Text>Retorno pagina anterior Endereço</Text>
                </View>
                <View style={styles.box03}>
                    <Text style={styles.texto_box}>Número:{" "}</Text>
                    <Text>Retorno pagina anterior Numero</Text>
                </View>
            </View>
        </View>
        <View style={styles.mapa_denuncia}>
                    <Text>Mapa</Text>
        </View>
        <View style={styles.grupo_Botoes}>
            <TouchableOpacity style={styles.botao_Consulta} onPress={() => navigation.navigate('Page_04_01_Retorno_Envio')}>
                <Text style={{color: "white"}}>Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Page_04_01')}>
                <Text style={{color: "white"}}>Voltar</Text>
            </TouchableOpacity>
        </View>
        
        
    </>
      
    );
  }
  
  export default Page_04_01_Retorno_Map

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C5FDC4',
        justifyContent: 'space-between',
        flex: 1,
        //paddingTop: 10,
        //paddingBottom: 130,    
    },
    menu:{
        flexDirection: 'row',
    },
    menutext:{
        fontSize: 20,
        paddingHorizontal: 10,
    },
    grupo_Botoes:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C5FDC4',
        justifyContent: "space-around",
        paddingBottom: 70,
            
    },
    botao_Consulta:{
        backgroundColor: "#0D9CFA",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    info_request: {
        width: 200,
        height: 25,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    box01:{
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft:20,
        height:30,
    },
    box02:{
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 2,
        height:30,
    },
    box03:{
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 5,
        height:30,
    },
    texto_box:{
        fontSize: 14,
    },
    mapa_denuncia:{
        backgroundColor: 'yellow',
        flex: 1,
    }
  });