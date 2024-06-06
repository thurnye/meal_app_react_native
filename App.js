import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import  {Ionicons} from "@expo/vector-icons"

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import AllProducts from './screens/AllProducts';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          // headerStyle: { backgroundColor: '#351401'},
          // headerTintColor: 'white',
          // sceneContentStyle: { backgroundColor: '#3f2f25'},
          drawerContentStyle: { background: '#351401'},
          drawerInactiveTintColor: '#351401',
          // drawerActiveTintColor: '#351401'
        }
      }
    >
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="list"/>
      }}/>
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="star"/>
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              // headerStyle: { backgroundColor: '#351401'},
              // headerTintColor: 'white',
              // contentStyle: { backgroundColor: '#3f2f25'},
            }
          }
        >
          <Stack.Screen
            name='MealsCategories'
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MealsOverviewScreen'
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen name='AllProducts' component={AllProducts} />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='Tap me' onPress={() => ''}/>
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
