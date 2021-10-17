import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get("window").height
let ScreenWidth = Dimensions.get("window").width
export default function Comic({ name, image }) {
    return (
      <View style={styles.container}>
              <Image
              style={styles.image}
                  source={{uri: image}}
              />
              <Text>{name}</Text>
      </View>
    )
  }
  
  
const styles = StyleSheet.create({
    container: {
    //   marginHorizontal:5,
    width: ScreenWidth,
    // height:ScreenHeight,
    //   marginVertical: 3,
    //   display: 'flex',
    //   flexDirection:"row",
      alignItems:'center',
      backgroundColor: "#C6C9D8",
      padding: 10,
      borderWidth: 3,
      borderColor: "#8084A2",
      borderRadius: 15
  
    },
    image:{
    //   margin: 10,
    //   borderRadius: 10,
      width: '100%', 
      height: 500
    },
    font:{
  
    }
  });