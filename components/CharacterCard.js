import * as React from 'react';
import { Text, View,  Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail')}
	>
			<Image 
				style={styles.image}
				source={image}
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