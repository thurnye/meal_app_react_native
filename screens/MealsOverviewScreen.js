import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem/MealItem';

function MealsOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId
  
  const displayedMeals = MEALS.filter((el) => {
    return el.categoryIds.indexOf(catId) >= 0;
  });
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
    navigation.setOptions({
      title: categoryTitle
    })

  },[navigation, catId])
  
  const renderMealItem = (itemData) => {
    const {item} = itemData


    
    return <MealItem 
      item={item}
    />
  }

  return (
    <View style={styles.container}>
        <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });