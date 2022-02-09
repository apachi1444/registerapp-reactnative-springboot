import React, { useContext, useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import ButtonSucces from "../Components/ButtonSucces";
import ButtonFail from "../Components/ButtonFail";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
const MySignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setmsg] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //--------------------------------------------------------------------------------------//
  //--------------------------------------------------------------------------------------//
  //--------------------------------------------------------------------------------------//
  const onClickSubmit = () => {
    const client = { email, lastname, name, password };
    console.log(client);
    if (
      client.email == "" ||
      client.name == "" ||
      client.lastname == "" ||
      client.password == ""
    ) {
      setmsg("Please Complete All Fields !");
      setEmail("");
      setName("");
      setLastname("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setmsg("");
      }, 1500);
    } else if (client.password != confirmPassword) {
      setmsg("Passwords don't Match !! Please Try Again !:");
    } else {
      dispatch(register(name, lastname, email, password, setmsg, navigation));
    }
  };
  //--------------------------------------------------------------------------------------//
  //--------------------------------------------------------------------------------------//
  //--------------------------------------------------------------------------------------//

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={name}
        onChangeText={(username) => setName(username)}
        placeholderText="Name"
        iconType="user"
      />
      <FormInput
        labelValue={lastname}
        onChangeText={(userlastname) => setLastname(userlastname)}
        placeholderText="Lastname"
        iconType="user"
        keyboardType="email-address"
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
      />
      {/* <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      /> */}
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      {msg ? (
        msg == "Registration Done With Succes !" ? (
          <ButtonSucces buttonTitle={msg} />
        ) : (
          <ButtonFail buttonTitle={msg} />
        )
      ) : null}
      <FormButton buttonTitle="Sign Up" onPress={() => onClickSubmit()} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("login-in")}
      >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MySignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  navButtonSucces: {},
  navButtonFail: {},
});
