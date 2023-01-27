import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const ProfileDetail = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#241332" }}>
      <ImageBackground
        source={require("../assets/photo.png")}
        style={{
          height: 0.5 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/icons-back-light.png")} />
          <Image source={require("../assets/filter.png")} />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: 0.16 * h,
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "-180deg" }],
              color: "#FFF",
              fontSize: 35,
              marginVertical: 30,
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            Ida Niska
          </Text>
        </LinearGradient>
      </ImageBackground>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            125
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600Semibold",
              color: "#918998",
            }}
          >
            FOLLOWERS
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Montserrat_700Bold",
            color: "#FFF",
          }}
        >
          FOLLOWING
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      ></View>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Montserrat_700Bold",
          color: "#FFF",
        }}
      >
        321
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Montserrat_600Bold",
          color: "#918998",
        }}
      ></Text>
    </ScrollView>
  );
};

export default ProfileDetail;
