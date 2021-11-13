import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 60, height: 60 }} source={require('./reciclagem.png')}/>
            <Text style={styles.headerText}>{props.title}</Text>
            <Image style={{ width: 60, height: 60 }} source={require('./reciclagem.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#0BCF05',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: "center", 
        alignItems: "center"
    },
})

export default Header