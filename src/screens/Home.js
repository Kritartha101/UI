import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat__700Bold,
} from "@expo-google-fonts/montserrat";
{
  /*import { TouchableOpacity } from "react-native-gesture-handler";*/
}

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat__700Bold,
  });
  return (
    <View styles={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({});
