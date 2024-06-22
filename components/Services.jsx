import { StyleSheet, Text, View,Image ,ScrollView} from 'react-native'
import React from 'react'

const Services = () => {

    const data = [
        {
          id: 1,
          image: 'https://icms-image.slatic.net/images/ims-web/2a43656a-5aff-46c9-a0c9-29cbf5825b5a.jpg_1200x1200.jpg',
        },
        {
          id: 2,
          image: 'https://icms-image.slatic.net/images/ims-web/7b37cfdb-1681-4853-8606-ff851a95e924.jpg',
        },
        {
          id: 3,
          image: 'https://icms-image.slatic.net/images/ims-web/fc91d3db-6139-449d-a8f3-af39cc98a0cf.webp?scm=1003.4.icms-zebra-5029921-2827790.OTHER_6503005965_7769680',
        },
        {
          id: 4,
          image: 'https://icms-image.slatic.net/images/ims-web/48819c70-117f-4acd-8ffd-bee43c5bd1c7.jpg',
        },
        // Add more image objects as needed
      ];


      const datalog=[
        {
            id: 1,
            image: 'https://static-01.daraz.pk/p/502ea5b18a602cf06db5379b9366dde9.png_750x750.jpg_.webp',
            title: 'Women Feshion',    
          }, 
        {
            id: 2,
            image: 'https://pk-live-21.slatic.net/kf/S227f1f045d244d74b4d9f216db0b828em.jpg_750x750.jpg_.webp',
            title: 'Muslims Wear',
          },
          {
            id: 3,
            image: 'https://static-01.daraz.pk/p/240a7b1a288a83fe92b1a9e852d76d46.jpg_750x750.jpg_.webp',
            title: 'Women Nighty',
          },
          {
            id: 4,
            image: 'https://static-01.daraz.pk/p/f0afff380bff285effedff658ef2aa5b.jpg_750x750.jpg_.webp',
            title: 'Women Fashion',
          },
          {
            id: 5,
            image: 'https://pk-live-21.slatic.net/kf/Sc2adf01d3dab4e98b66705f617639f79o.jpg_750x750.jpg_.webp',
            title: 'Women Fashion',

          },
          {
            id: 6,
            image: 'https://pk-live-21.slatic.net/kf/S9b83533f72fb48c0bd424cc64e5cd1919.jpg_750x750.jpg_.webp',
            title: 'Women Fashion',
          }

      ]

  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={styles.container}>

        <View style={styles.row}>
            <View>
<View>
<Image
style={styles.image}
source={{ uri: data[0].image }}

/>
<Text style={styles.text}>Amazon Pay</Text>
</View>
<View>
<Image
style={styles.image}
source={{ uri: data[1].image }}

/>
<Text style={styles.text}>Send Money</Text>
</View>
            </View>
            <View>
<View>
<Image
style={styles.image}
source={{ uri: data[2].image }}

/>
<Text style={styles.text}>Pay bill</Text>
</View>
<View>
<Image
style={styles.image}
source={{ uri: data[3].image }}

/>
<Text style={styles.text}>scan QR</Text>
</View>
            </View>
            
            


        </View>
<View style={styles.outer}>
    <View style={styles.inner}>
        <Text style={styles.text}>Women Fashion</Text>
        <Image
        source={{ uri: datalog[0].image }}
        style={styles.image1}

        />


    </View>
    <View style={styles.inner}>
        <Text style={styles.text}>Women Fashion</Text>
        <Image
        source={{ uri: datalog[1].image }}
        style={styles.image1}

        />


    </View>
    <View style={styles.inner}>
        <Text style={styles.text}>Women Fashion</Text>
        <Image
        source={{ uri: datalog[2].image }}
        style={styles.image1}

        />


    </View>
    <View style={styles.inner}>
        <Text style={styles.text}>Women Fashion</Text>
        <Image
        source={{ uri: datalog[3].image }}
        style={styles.image1}

        />


    </View>
    <View style={styles.inner}>
        <Text style={styles.text}>Women Fashion</Text>
        <Image
        source={{ uri: datalog[4].image }}
        style={styles.image1}

        />


    </View>
    <View style={styles.inner}>
        <Text style={styles.text}>Women Fashion</Text>
        <Image
        source={{ uri: datalog[5].image }}
        style={styles.image1}

        />


    </View>

</View>
      
    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({

    container: {
        
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 10,
        // position:'absolute',
        // bottom: -260,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#000',
        elevation: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        // width:'100%',
        // width:'50%'
       
        
    }  ,
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 50,
    },
    text:{
        color: '#000',
        fontSize: 18,
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000',
        elevation: 10,
        shadowOffset: { width: 0, height: 0 },
        width: '30%',
    },
    outer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#000',
        elevation: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        // width:'100%',
    },
    image1:{
        
        height: 200,
        width: 200,
        resizeMode: 'cover',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    }



})