import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import FormButton from "../Components/FormButton";
import FormInput from "../Components/FormInput";
import ButtonSucces from "../Components/ButtonSucces";
import ButtonFail from "../Components/ButtonFail";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import FontAwesome , {SolidIcons} from "react-native-fontawesome";
import { faEye ,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



const MyLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [msg, setmsg] = useState("");

  const onClickSubmit = () => {
    const client = { email, password };
    if (client.email == "" || client.password == "") {
      setmsg("Please Complete All Fields !");
      setTimeout(() => {
        setmsg("");
        setPass("");
      }, 1500);
    } else {
      dispatch(
        login(email, password, msg, setmsg, setEmail, setPass, navigation)
      );

      // if (msg == "Login Done With Succes") {
      //   setEmail("");
      //   setPass("");
      //   setTimeout(() => {
      //     navigation.navigate("profile", {
      //       user: userInfo,
      //     });
      //     setmsg("");
      //   }, 1200);
      // } else {
      //   setTimeout(() => {
      //     setmsg("");
      //   }, 1500);
      // }

      // setEmail("");
      // setPass("");
      // setmsg("");
    }
  };
  const togglePasswordButton = () => {
    setVisibility(!visibility);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Welcome Back</Text>
 
      <FormInput
        labelValue={email}
        onChangeText={(email) => setEmail(email)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
      />
      {visibility && password ? (
        <FormInput
          labelValue={password}
          onChangeText={(pass) => setPass(pass)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
          passwordToggler="faEye"
          togglePasswordButton={togglePasswordButton}
        />
      ) : !visibility && password ? (
        <FormInput
          labelValue={password}
          onChangeText={(pass) => setPass(pass)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={false}
          passwordToggler="faEyeSlash"
          togglePasswordButton={togglePasswordButton}
        />
        
      ) : (
        <FormInput
          labelValue={password}
          onChangeText={(pass) => setPass(pass)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={false}
        />
      )}
      {msg ? (
        msg == "Login Done With Succes" ? (
          <ButtonSucces buttonTitle={msg} />
        ) : (
          <ButtonFail buttonTitle={msg} />
        )
      ) : null}

      <FormButton buttonTitle="Sign In" onPress={onClickSubmit} />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("sign-up")}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MyLogin;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    width: "100%",
    marginTop: 20,
    borderColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});



