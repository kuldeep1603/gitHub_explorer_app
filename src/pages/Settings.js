import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#f5f5f5",
      justifyContent: "center",
      alignItems: "center"
    },
    title:{
      fontSize: 22,
      fontWeight: '500',
      marginBottom: 16
    }
  });
  

export default Settings
