import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimentions";

const ButtonSucces = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity  disabled={true} style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSucces;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    width: "80%",
    height: windowHeight / 18,
    backgroundColor: "#759D34",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
