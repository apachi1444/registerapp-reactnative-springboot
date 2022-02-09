// import axios from "axios";
// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import {
//   Alert,
//   Button,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// export default function App() {
//   const [name, setName] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [clients, setClients] = useState([]);
//   const onClickSubmit = () => {
//     const client = { name, lastname, email, pass };
//     axios
//       .post("http://localhost:8080/api/add", client)
//       .then(() => console.log("new client added"))
//       .then((err) => console.log(err));
//     setEmail("");
//     setName("");
//     setLastname("");
//     setPass("");
//   };
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/getAll")
//       .then((result) => setClients(result))
//       .then(console.log(clients));
//   });

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <TextInput
//           placeholder={"Name"}
//           style={styles.input1}
//           onChangeText={(val) => setName(val)}
//         />
//         <TextInput
//           placeholder={"LastName"}
//           style={styles.input1}
//           onChangeText={(val) => setLastname(val)}
//         />
//         <TextInput
//           placeholder={"email"}
//           keyboardType="email-address"
//           style={styles.input1}
//           onChangeText={(val) => setEmail(val)}
//         />
//         <TextInput
//           placeholder={"password"}
//           keyboardType="email-address"
//           style={styles.input1}
//           secureTextEntry={true}
//           onChangeText={(val) => setPass(val)}
//         />
//         <Button
//           title="Sign Up here"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//           onPress={onClickSubmit}
//         />
//         <Text>{pass}</Text>
//         <Text>{name}</Text>
//         <Text>{lastname}</Text>
//         <Text>{email}</Text>
//       </ScrollView>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 150,
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input1: {
//     width: 200,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "grey",
//     borderWidth: 2,
//     padding: 15,
//     margin: 10,
//   },
// });

// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyLogin from "./screens/MyLogin";
import MySignUp from "./screens/MySignUp";
import ProfileScreen from "./screens/ProfileScreen";
import TabBar from "./screens/TabBar";
import EditProfile from "./screens/EditProfile";
import EditPassword from "./screens/EditPassword";
import { Provider } from "react-redux";
import store from "./store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login-in">
          <Stack.Screen
            name="login-in"
            component={MyLogin}
            options={
              ({ headerShown: false },
              {
                title: "Crypto App",
                headerStyle: {
                  backgroundColor: "#a2513e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              })
            }
          />
          <Stack.Screen
            name="sign-up"
            component={MySignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="editProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="editPassword"
            component={EditPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tabBar"
            component={TabBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
