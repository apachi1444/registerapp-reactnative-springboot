import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import ButtonSucces from "../Components/ButtonSucces";
import ButtonFail from "../Components/ButtonFail";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../actions/userActions";
const EditProfile = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [msg, setmsg] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const id = userInfo.id;
  const password = userInfo.password;
  const email = userInfo.email;
  const client = { name, lastname, email };

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setLastname(userInfo.lastname);
    }
  }, [userInfo]);

  const onClickSubmit = () => {
    if (client.name == "" || client.lastname == "") {
      setmsg("Please Complete All Fields !");
      setTimeout(() => {
        setmsg("");
      }, 1500);
    } else {
      dispatch(
        updateProfile(
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
      <Text style={styles.text}>Update Your Profile</Text>
      <FormInput
        labelValue={name}
        onChangeText={(username) => setName(username)}
        placeholderText="New Name"
        iconType="user"
      />
      <FormInput
        labelValue={lastname}
        onChangeText={(userlastname) => setLastname(userlastname)}
        placeholderText="New Lastname"
        iconType="user"
      />

      <View style={{ width: "100%", height: "8%" }}></View>
      {msg ? (
        msg == "Update Done With Succes" ? (
          <ButtonSucces buttonTitle={msg} />
        ) : (
          <ButtonFail buttonTitle={msg} />
        )
      ) : null}
      <FormButton buttonTitle="Edit Profile" onPress={() => onClickSubmit()} />
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
