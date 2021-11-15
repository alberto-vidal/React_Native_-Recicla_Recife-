import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Header from './components/Header';

const Page_02_01 = ({navigation}) => {
    return (
      <>
        <Header title={("Recicla Recife"+"\n"+"Coleta de Lixo")}></Header>
        
        <View>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
                <Image style={{ width: 30, height: 30 }} source={require('./components/menu.png')}/> 
                <Text style={styles.menutext}>Menu</Text>
            </TouchableOpacity>    
        </View>
        
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Consulta
                </Text>
                <View style={styles.box01}>
                    <Text style={styles.texto_box}>Bairro:</Text>
                    <TextInput
                    placeholder="Digite a rua desejada"
                    onChangeText={(text)=> {alert(text)}}
                    style={styles.info_request}
                />
                </View>
                <View style={styles.box02}>
                    <Text style={styles.texto_box}>Endereço:</Text>
                    <TextInput
                    placeholder="Digite a rua desejada"
                    onChangeText={(text)=> {alert(text)}}
                    style={styles.info_request}
                    />
                </View>
                
            </View>
        </View>
        <View style={styles.grupo_Botoes}>
            <TouchableOpacity style={styles.botao_Consulta} onPress={() => navigation.navigate('Page_02_01_Retorno')}>
                <Text style={{color: "white"}}>Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Home')}>
                <Text style={{color: "white"}}>Voltar</Text>
            </TouchableOpacity>
        </View>
        
        
    </>
      
    );
  }
  
  export default Page_02_01

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
    grupo_Botoes:{
        flexDirection: 'row',
        flex:3,
        alignItems: 'center',
        backgroundColor: '#C5FDC4',
        justifyContent: "space-around",
        paddingBottom: 200,
            
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
        height: 40,
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
    },
    box02:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    texto_box:{
        fontSize: 14,
    }
  });