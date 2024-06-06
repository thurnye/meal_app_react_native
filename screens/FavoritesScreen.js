import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, ScrollView, Button} from 'react-native';

function FavoritesScreen() {
  return (
    <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
    </View>
  )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 16,
    },
    text: {

    }
  });
