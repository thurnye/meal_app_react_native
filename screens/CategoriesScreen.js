import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile/CategoryGridTile';


export default function CategoriesScreen({ navigation }) {

  const renderCategoryItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate('MealsOverviewScreen', {
        categoryId: itemData.item.id
      })
    }
  
    return(
      <CategoryGridTile 
      title={itemData.item.title} 
      color={itemData.item.color} 
      onPress={handlePress}
    />
  )};


  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
