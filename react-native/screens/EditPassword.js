import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import ButtonSucces from "../Components/ButtonSucces";
import ButtonFail from "../Components/ButtonFail";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, updatePassword } from "../actions/userActions";
const EditProfile = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setmsg] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const id = userInfo.id;
  console.log("haha " + id);
  const client = { password, confirmPassword };
  const { name, lastname, email } = userInfo;
  const onClickSubmit = () => {
    if (client.password == "" || client.confirmPassword == "") {
      setmsg("Please Complete All Fields !");
      setTimeout(() => {
        setmsg("");
      }, 1500);
    } else {
      dispatch(
        updatePassword(
          { id, name, lastname, email, password },
          msg,
          setmsg,
          navigation
        )
      );
    }
  };
  const returnHandler = () => {
    navigation.goBack("profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Update Your Password</Text>
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="New Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm New Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <View style={{ width: "100%", height: "8%" }}></View>
      {msg ? (
        msg == "Update Done With Succes" ? (
          <ButtonSucces buttonTitle={msg} />
        ) : (
          <ButtonFail buttonTitle={msg} />
        )
      ) : null}
      <FormButton buttonTitle="Edit Password" onPress={() => onClickSubmit()} />
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => returnHandler()}
      >
        <Text style={styles.buttonText}>Back To Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
    marginBottom: 100,
    marginTop: 80,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  returnButton: {
    marginTop: 20,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#FFD01C",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
