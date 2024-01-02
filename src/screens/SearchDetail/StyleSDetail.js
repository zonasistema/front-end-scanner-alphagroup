import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  containerText: {
    flexDirection: "column",
    // margin: 30,
    margin: windowWidth * 0.03,
    width: windowWidth * 0.9,
    height: "auto",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },

  textApi: {
    fontSize: 17,
    fontWeight: 800,
    color: "#000",
    // marginBottom: 7,
  },

  titleText: {
    // color: "#555555",
    fontSize: 16,
    // fontWeight: 800,
    // borderBottomWidth: 1,
  },

  centerText: {
    alignItems: "center",
    marginBottom: 5,
  },

  vehicle: {
    color: "#000",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 800,
  },

  order: {
    color: "#000",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 800,
    borderWidth: 1,
    borderColor: "#000",
    height: "auto",
    width: "auto",
    borderRadius: 50,
  },

  text: {
    fontSize: 15,
  },
});
