import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "poppins-bold",
          fontSize: 30,
        }}
      >
        Lets Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "poppins",
          fontSize: 30,
          color: Colors.grey,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "poppins",
          fontSize: 30,
          color: Colors.grey,
          marginTop: 10,
        }}
      >
        You've been missed !
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins",
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins",
          }}
        >
          Password
        </Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password" />
      </View>
      <View style={{
        padding:20,
        backgroundColor: Colors.primary,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color: Colors.white,
          textAlign:'center'
        }}>Sign In</Text>
      </View>

      <TouchableOpacity
      onPress={()=>router.replace("auth/sign-up")}
      style={{
        padding:20,
        backgroundColor: Colors.white,
        borderRadius:15,
        marginTop:20,
        borderWidth: 1
      }}>
        <Text style={{
          color: Colors.primary,
          textAlign:'center'
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.grey,
    fontFamily: "poppins",
  },
});
