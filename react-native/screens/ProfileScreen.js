import { useNavigationState, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const ProfileScreen = ({ navigation, route }) => {
  //-----------------------------------------------------//
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout(navigation));
  };
  //-----------------------------------------------------//

  //-----------------------------------------------------//
  const edithandlers = () => {
    navigation.navigate("editProfile");
  };
  //-----------------------------------------------------//

  //-----------------------------------------------------//
  const passwordhandlers = () => {
    navigation.navigate("editPassword");
  };
  //-----------------------------------------------------//

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { name, lastname, email } = userInfo;
  useEffect(() => {}, [userInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar5.png" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            {name} {lastname}{" "}
          </Text>
          <Text style={styles.info}>{email}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={edithandlers}>
            <Text style={styles.logout}> Edit My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={passwordhandlers}>
            <Text style={styles.logout}> Edit My Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonLogOut} onPress={logoutHandler}>
            <Text style={styles.logout}> Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#8e27e5",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 13,
    color: "#000",
    marginTop: 10,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#8e27e5",
    color: "#FFFFFF",
    marginRight: 10,
  },
  buttonLogOut: {
    marginTop: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#7A9F35",
    color: "#FFFFFF",
    marginRight: 10,
  },

  logout: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
});
