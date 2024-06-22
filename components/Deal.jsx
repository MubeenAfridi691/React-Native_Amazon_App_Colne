import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const Deal = () => {
  return (
    <View style={styles.container}>

<View style={styles.Deal}>
    <Text style={styles.bold}>Recommended Deal for You</Text>
    <Image
    style={styles.image}
    source={{uri:'https://m.media-amazon.com/images/I/71AKVeHXVyL._AC_SX679_.jpg'}}
    
    />

</View>

        <View style={styles.deal1}>

            <TouchableOpacity style={styles.button}>
                <Text>10%</Text>
            </TouchableOpacity>
            <Text>Deal</Text>

        </View>
        <View style={styles.deal3}>
            <Text style={styles.price}> RS 1500</Text>
            <Text style={styles.mrp}>M.R.P</Text>
            <Text style={styles.realprice}>Rs 2000</Text>

        </View>
        <View style={styles.dealtitle}>
            <Text style={styles.bold}>
                Women Casual Shoes
            </Text>

        </View>
        <View style={styles.seemore}>
            <Text style={styles.seemoredeal}>See More Deals</Text>
        </View>
    </View>
  )
}

export default Deal

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        elevation: 50,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0,
            height: 2
        },
        textDecorationLine: 'line-through',

    },
    Deal: {
        // flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: 300,
        margin: 10,
        padding: 10,
        borderColor:    '#ddd',  
    }   ,
    bold: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    image: {
        width:'100%' ,
        height: '100%',
        margin: 10,
        padding: 10,
        borderColor:    '#ddd',
        resizeMode: 'cover',
    },
    button: {
        backgroundColor: 'red',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderColor:    '#ddd',
    },
    deal1: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderColor:    '#ddd',
        
    },
    deal3:{
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 50,
    },
    price:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 10,
        // padding: 10,
        borderColor:    '#ddd',
    },
    mrp:{
        fontSize: 15,
        color: '#000',
       
        marginHorizontal: 10,
    },
    realprice:{
        fontSize: 15,
        color: '#000',
        textDecorationLine: 'line-through',
        marginHorizontal: 10,


    },
    dealtitle:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderColor:    '#ddd',

    },
    seemore:{
        flexDirection: 'row',
        alignItems: 'center',
        // margin: 10,
        padding: 10,
        borderColor:    '#ddd',
        // justifyContent: 'center',
    },
    seemoredeal:{
        fontSize: 20,
        color: 'blue',
        // textDecorationLine: 'underline',
        // marginHorizontal: 10,
        // textDecorationStyle: 'solid',
        // textDecorationColor: 'blue',

    },
    

})