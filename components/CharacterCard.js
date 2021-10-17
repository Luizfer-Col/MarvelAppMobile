import * as React from 'react';
import { Text, View,  Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CharacterCard({id, image, name}) {
  console.log(image);
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail', {id: id})}
	>
			<Image 
				style={styles.image}
				source={{uri: image}}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
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
      width: 50, 
      height: 50
    },
    font:{

    }
  });