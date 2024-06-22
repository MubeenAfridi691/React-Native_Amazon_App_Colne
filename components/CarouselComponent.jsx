import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CarouselComponent = () => {
  const width = Dimensions.get('window').width;
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

  return (
    <View style={styles.container}> 
      <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: item.image }}
            resizeMode="cover"
            resizeMethod="resize"
            height='100%'
          />
          
        </View>
      )}
    />
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {
    
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    height: 200,
  },
});
