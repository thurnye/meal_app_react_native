import { StyleSheet, Text, View} from 'react-native';

function MealDetailItem({duration, complexity, affordability, textStyle}) {

  return (
        <View style={styles.details}>
          <Text style={styles.detailItem}>
              {duration} mins
          </Text>
          <Text style={styles.detailItem}>
              {complexity.toUpperCase()}
          </Text>
          <Text style={[styles.detailItem, textStyle]}>
              {affordability.toUpperCase()}
          </Text>
        </View>
  )
}

export default MealDetailItem

const styles = StyleSheet.create({
  details:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
      marginHorizontal: 4,
      fontSize: 12
  }
  });