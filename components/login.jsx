import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {

    const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 520,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "poppins-bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "poppins",
            fontSize: 17,
            textAlign: "center",
            color: Colors.grey,
            marginTop:20
          }}
        >
          Embark on your next adventure with a simple sign-in. Discover personalized travel itineraries, explore new destinations, and make memories that last a lifetime.
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: "20%",
  },
});