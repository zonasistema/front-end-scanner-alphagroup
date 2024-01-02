import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Users } from "./components/JSON/Json";
import MainNavigation from "./navigation/mainNavigation";
import { getData } from "./redux/actions/action";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  const [user, setUser] = useState("");
  const [findUser, setFindUser] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    const userFind = Users.find((u) => u.name === user.toLowerCase());
    !userFind ? setError("No existe ese ususario") : setFindUser(userFind.name);
  };

  return (
    <>
      <StatusBar style="dark" />
      {findUser ? (
        <MainNavigation />
      ) : (
        <>
          <View style={{ alignItems: "center", marginTop: 100 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#000",
                borderBottomWidth: 1,
                borderBottomColor: "grey",
              }}
            >
              Inicio de sesion
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: "20%",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <TextInput
              placeholder="Alphagroup..."
              onChangeText={(text) => setUser(text)}
              value={user}
              style={{
                fontSize: 22,
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                width: "100%",
              }}
              onSubmitEditing={handleSumbit}
            />
            <TouchableOpacity onPress={(e) => handleSumbit(e)}>
              <Feather
                name="send"
                size={24}
                color="black"
                style={{
                  fontSize: 28,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
      {!findUser && error && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, color: "#f00" }}>{error}</Text>
        </View>
      )}
    </>
  );
};

export default Main;
