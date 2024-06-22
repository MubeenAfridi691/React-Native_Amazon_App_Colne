import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Brand = () => {
  return (
    <View>
        <View>
             <Text style={styles.bold}>Recommended Deal for You</Text>
        </View>

<View style={styles.brand}>
<View style={styles.style}> 
<Image source={{uri:'https://www.gulahmedshop.com/media/catalog/product/i/u/iustksd-242_1_.jpg?optimize=medium&fit=bounds&height=900&width=600'}} style={{width: '100%', height: 200,resizeMode:'contain'}}/>
<Text style={styles.title}>LOVED BY CUSTOMERS</Text>
</View>
<View style={styles.style}> 
<Image source={{uri:'https://uae.gulahmedshop.com/media/catalog/product/p/e/peach_embroidered_kurta_kr-emb24-029_7_.jpg?optimize=medium&fit=bounds&height=900&width=600'}} style={{width: '100%', height: 200,resizeMode:'contain'}}/>
<Text style={styles.title}>Adorn the latest trends</Text>
</View>

</View>

<View style={styles.brand}>
<View style={styles.style}> 
<Image source={{uri:'https://uae.gulahmedshop.com/media/catalog/product/b/r/brown_stylized_waist_coat_kwc-pd23-011_4_.jpg?optimize=medium&fit=bounds&height=900&width=599'}} style={{width: '100%', height: 200,resizeMode:'contain'}}/>
<Text style={styles.title}>Brown Stylized Waist</Text>
</View>
<View style={styles.style}> 
<Image source={{uri:'https://uae.gulahmedshop.com/media/catalog/product/w/g/wgk-yds-sp-2463_3_.jpg?optimize=medium&fit=bounds&height=900&width=599'}} style={{width: '100%', height: 200,resizeMode:'contain'}}/>
<Text style={styles.title}>Yarn Dyed Block Printed</Text>
</View>

</View>

    </View>
  )
}

export default Brand

const styles = StyleSheet.create({
    bold: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    brand: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // marginLeft: 10,
        // marginRight: 10,
        // marginTop: 10,

    },
    style: {
        width: '50%',
        height: 250,
        borderRadius: 10,
        // borderWidth: 1,
        borderColor: '#000',
        // marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
    
    },
    title: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    }
    
})