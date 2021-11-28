import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Header from './components/Header';

const Page_01_01_Outros = ({navigation}) => {
    return (
      <>
        <Header title={("Recicla Recife"+"\n"+"Informativo")}></Header>
        
        <View>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
                <Image style={{ width: 30, height: 30 }} source={require('../assets/menu.png')}/>
                <Text style={styles.menutext}>Menu</Text>
            </TouchableOpacity>    
        </View>
        
        <View style={styles.container}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Outros{"\n"}
            </Text>
            <Text style={{textDecorationLine: 'underline'}}>
            Baterias:{"\n"}
            </Text>
            <Text style={{fontSize: 12}}>
            O descarte de pilhas e baterias não podem ser depositadas em lixos comuns, pois os componentes químicos presentes dentro das pilhas são extremamente poluentes e prejudiciais ao meio ambiente. Procure no nosso app um local de coleta para esse descarte!{"\n"}
            </Text>
            <Text style={{textDecorationLine: 'underline'}}>
                Óleo de Cozinha:{"\n"}
            </Text>
            <Text style={{fontSize: 12}}>
                O óleo de cozinha é um dos alimentos mais nocivos ao meio ambiente. Se jogado no ralo da pia, seu destino serão os rios e mares. Um litro de óleo polui um milhão de litros de água. Por isso, armazene o óleo usado em garrafas PET bem vedadas e entregue a um dos pontos de coleta do nosso app. Eles serão destinados a fábricas de sabão ou para a produção de biodiesel.{"\n"}
            </Text>
        
        </View>
            
        <View style={styles.grupo_Botoes}>
            <View style={styles.grupo_Botoes_01}>
                <TouchableOpacity style={styles.botao_Papel} onPress={() => navigation.navigate('Page_01_01_Papel')}>
                    <Text style={{color: "white"}}>Papel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao_Plastico} onPress={() => navigation.navigate('Page_01_01_Plastico')}>
                    <Text style={{color: "white"}}>Plástico</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botao_Outros} onPress={() => navigation.navigate('Page_01_01_Outros')}>
                    <Text style={{color: "white"}}>Outros</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.grupo_Botoes_01}>
                <TouchableOpacity style={styles.botao_Vidro} onPress={() => navigation.navigate('Page_01_01_Vidro')}>
                    <Text style={{color: "white"}}>Vidro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao_Metal} onPress={() => navigation.navigate('Page_01_01_Metal')}>
                    <Text style={{color: "white"}}>Metal</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botao_Dicas} onPress={() => navigation.navigate('Page_01_01_Dicas')}>
                    <Text style={{color: "white"}}>Dicas</Text>
                </TouchableOpacity>  
            </View>
        </View>
      </>
      
    );
  }
  
  export default Page_01_01_Outros

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5FDC4',
        //alignItems: 'center',
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
        flex: 1,
        justifyContent: "space-between",
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: '#C5FDC4',
        paddingTop: 60,
        
    },
    grupo_Botoes_01:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
    },
    botao_Papel:{
        backgroundColor: "#0D9CFA",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    botao_Plastico:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    botao_Outros:{
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    botao_Vidro:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    botao_Metal:{
        backgroundColor: "#E1CC06",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },
    botao_Dicas:{
        backgroundColor: "#B0AAAA",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 50,
    },

  });