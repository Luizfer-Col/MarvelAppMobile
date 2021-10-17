import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Information({image, name, description}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.image} source={{uri: image}}/>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:"5%",
  width: "90%",
    marginVertical: 3,
    display: 'flex',
    flexDirection:"row",
    alignItems:'center',
    backgroundColor: "#C6C9D8",
    padding: 10,
    borderWidth: 3,
    borderColor: "#8084A2",
    borderRadius: 15

  },
  image:{
    marginRight: 10,
    borderRadius: 10,
    width: 250, 
    height: 250
  },
  font:{

  }
});