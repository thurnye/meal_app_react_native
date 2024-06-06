import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import MealDetailItem from '../MealDetailItem/MealDetailItem';

export default function MealItem({
    item
}) {
    const navigate = useNavigation();

    const handlePress = () => {
      navigate.navigate('MealDetails', {
        mealId: item.id
      })
    }

  return (
    <View style={styles.menuItem}>
        <Pressable 
        onPress={handlePress}
        style={({pressed}) =>  pressed ? styles.buttonPressed : null}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: item.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <MealDetailItem
                    duration={item.duration}
                    complexity={item.complexity}
                    affordability={item.affordability}
                />
            </View>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    menuItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
   
  });
