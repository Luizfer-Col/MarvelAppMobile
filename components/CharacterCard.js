import * as React from 'react';
import { Text, View,  Image, StyleSheet } from 'react-native';

export default function CharacterCard({image, name}) {
  return (
    <View style={styles.container}>
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
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
      backgroundColor: "red",
      padding: 10,
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 15

    },
    image:{

    },
    font:{

    }
  });