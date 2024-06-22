import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';



const Subheader = () => {
  return (
    <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#4c888g', '#3b5998', '#192f6a']} >
  <View style={styles.container}>
  <Entypo name="location" size={24} color="black" />
    <Text style={styles.text}>Deliver to Peshawar 25000</Text>
    <AntDesign name="caretdown" size={24} color="black" />
  </View>
</LinearGradient>
  )
}

export default Subheader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        elevation: 10, 
        alignItems: 'center',
       padding: 10,
        
        },
        text: {
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
            marginRight: 10,
        }
})