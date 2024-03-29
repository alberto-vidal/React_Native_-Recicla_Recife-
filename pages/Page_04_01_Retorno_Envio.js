import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Header from './components/Header';

const Page_04_01_Retorno_Envio = ({navigation}) => {
    return (
      <>
        <Header title={("Recicla Recife"+"\n"+"Denuncie")}></Header>
        
        <View>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
                <Image style={{ width: 30, height: 30 }} source={require('../assets/menu.png')}/> 
                <Text style={styles.menutext}>Menu</Text>
            </TouchableOpacity>    
        </View>
        
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Denuncia
                </Text>
                <View style={styles.box_Comentario}>
                    <Text style={styles.texto_box}>Comentario:</Text>
                    <TextInput
                    placeholder="Digite aqui"
                    onChangeText={(text)=> {alert(text)}}
                    style={styles.info_comentario}
                    />
                </View>
            </View>
        </View>
        <View style={styles.mapa_denuncia}>
                    <Text>Mapa</Text>
        </View>
        <View style={styles.grupo_Botoes}>
            <TouchableOpacity style={styles.botao_Consulta} onPress={() => navigation.navigate('Page_04_01_Retorno_Retorno')}>
                <Text style={{color: "white"}}>Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Page_04_01_Retorno_Map')}>
                <Text style={{color: "white"}}>Voltar</Text>
            </TouchableOpacity>
        </View>
        
        
    </>
      
    );
  }
  
  export default Page_04_01_Retorno_Envio

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
    box_Comentario:{
        paddingTop: 30,
        alignItems: 'baseline',
        
    },
    texto_box:{
        fontSize: 14,
    },
    mapa_denuncia:{
        backgroundColor: 'yellow',
        flex: 1,
    },
    info_comentario:{
        width: 330,
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    }
  });