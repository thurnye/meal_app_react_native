import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function AllProducts({navigate}) {
  return (
    <View style={styles.container}>
        <Text>AllProducts</Text>
    </View>
  )
}

export default AllProducts

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });