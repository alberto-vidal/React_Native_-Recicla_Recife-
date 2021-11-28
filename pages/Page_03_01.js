import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Marker} from 'react-native';
import Header from './components/Header';
import MapView from 'react-native-maps';

const Page_03_01 = ({navigation}) => {
    return (
      <>
        <Header title={("Recicla Recife"+"\n"+"Ecopontos")}></Header>
        
        <View>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
                <Image style={{ width: 30, height: 30 }} source={require('../assets/menu.png')}/> 
                <Text style={styles.menutext}>Menu</Text>
            </TouchableOpacity>    
        </View>
        
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Locais de Coleta Seletiva{"\n"}(ECO)
                </Text>
            </View>
            <MapView
                    initialRegion={{
                        latitude: -8.061787,
                        longitude: -34.870696,
                        latitudeDelta: 0.0042,
                        longitudeDelta: 0.0031,
                    }}
                    style={styles.MapView}>
                <MapView.Marker
                    coordinate={{
                        latitude: -8.063282,
                        longitude: -34.871568,
                    }}
                    title={'Av. Marques de Olinda'}
                    description={"Metal, Isopor, Papel, Plastico e Vidro"}
                    image={require('../assets/marcador_01.png')}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: -8.054732,
                        longitude: -34.872078,
                    }}
                    title={'Av. Cais do Apolo'}
                    description={"Metal, Isopor, Papel, Plastico e Vidro"}
                    image={require('../assets/marcador_01.png')}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: -8.061468,
                        longitude: -34.871037,
                    }}
                    title={'Rua do Bom Jesus'}
                    description={"Metal, Isopor, Papel, Plastico e Vidro"}
                    image={require('../assets/marcador_01.png')}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: -8.039065,
                        longitude: -34.878321,
                    }}
                    title={'Av. Agamenon Magalhães'}
                    description={"Lixo Organico, Metralhas, Eletronicos e Podas"}
                    image={require('../assets/marcador_01.png')}
                />    

            </MapView>
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
        flex: 1,
        backgroundColor: '#C5FDC4',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,    
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
        alignItems: 'center',
        backgroundColor: '#C5FDC4',
        justifyContent: "center",
        paddingTop: 15,
        paddingBottom: 15,    
    },
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    MapView:{
        width: 350,
        height: 350,
        margin: 5,
        padding: 10,
        
    },
  });