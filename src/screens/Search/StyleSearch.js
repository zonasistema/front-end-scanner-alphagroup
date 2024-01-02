import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    width: "60%",
  },
  buttonSearch: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },

  calendar: {
    marginRight: -5,
    marginLeft: 7,
    justifyContent: "space-around",
  },

  containerText: {
    flexDirection: "column",
    margin: 30,
    width: "auto",
    height: 400,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  textApi: {
    fontSize: 17,
    fontWeight: 800,
    color: "#555555",
  },

  titleText: { color: "#000", fontSize: 16, fontWeight: 800 },
});
