import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

import AntDesign from "react-native-vector-icons/AntDesign";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  passwordToggler,
  togglePasswordButton,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
      {passwordToggler ? (
        passwordToggler == "faEye" ? (
          <FontAwesomeIcon
            icon={faEyeSlash}
            style={styles.passwordToggler}
            onClick={togglePasswordButton}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEye}
            style={styles.passwordToggler}
            onClick={togglePasswordButton}
          />
        )
      ) : null}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  passwordToggler: {
    paddingRight: 20,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ffaf8d",
    borderRightWidth: 1,
    width: 100,
    color: "red",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#aeaead",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
    outlineStyle: "none",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  passwordToggler: {
    marginRight: 15,
  },
});
