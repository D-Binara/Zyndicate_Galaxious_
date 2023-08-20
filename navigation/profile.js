import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  container:{
    backgroundColor:"#000",
    height:800
  }


})
