import { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, Button} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetailItem from '../components/MealDetailItem/MealDetailItem';
import SubTitle from '../components/MealDetailItem/SubTitle';
import List from '../components/MealDetailItem/List';
import Icon from '../components/Icon/Icon';

function MealDetails({route, navigation}) {

  const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const [iconColor, setIconColor] = useState('salmon')

    const headerButtonPressHandler = () => {
      if(iconColor === 'black'){
      setIconColor('salmon')
    }else{
      setIconColor('black')
    }
    }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return <Icon
        icon={'heart'} 
        color={iconColor}
        onPress={headerButtonPressHandler}
        />
      }
    });
  },[navigation, mealId, headerButtonPressHandler, iconColor]);



  return (
    <ScrollView style={[styles.container, styles.rootContainer]}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailItem
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle title="Ingredient"/>
          <List listItemData={selectedMeal.ingredients}/>
          <SubTitle title="Steps"/>
          <List listItemData={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 46
  },
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 350
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center'
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
    },
  listOuterContainer:{
    alignItems: 'center'
  },
  listContainer: {
    width: '80%',
  },
  });