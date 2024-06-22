import { StyleSheet, Text, TextInput, View ,StatusBar} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';



const Header = () => {
  return (
    <View >
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#4c669f', '#3b5998', '#192f6a']} >
  <View style={styles.container}>
    
    <View style={styles.header}>
<AntDesign name="search1" size={24} color="black" />
    <TextInput style={styles.input} placeholder="Search Amazon" />
<AntDesign name="scan1" size={24} color="black" />

    </View>
    <Entypo name="mic" size={25} color="white" />
    
  </View>
</LinearGradient>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '80%',
        marginVertical: 10,
       marginLeft: '10%',
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    input: {
    width: '70%',
        borderRadius: 10,
        color: 'black',
        fontSize: 22,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 5,
    }

})