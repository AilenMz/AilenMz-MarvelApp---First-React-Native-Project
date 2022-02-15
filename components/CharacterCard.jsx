import * as React from 'react';
import { Text, View,  Image , StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({name, image}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate('Detail')}>
        <Image source={image}/>
		<Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row', 
        margin:10, 
        borderWidth:2, 
        borderRadius:5, 
        padding:5,
        alignItems:'center',
    backgroundColor:'#e1e'},
    text: {
        marginLeft:15
    }
  });