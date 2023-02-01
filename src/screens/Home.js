import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat__700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat__700Bold,
  });
  return (
    <View style={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>Maxx scooter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the max scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    allignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAllign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Monstserrat_600SemiBold",
    fontSize: 30,
    color: "FFF",
  },
});