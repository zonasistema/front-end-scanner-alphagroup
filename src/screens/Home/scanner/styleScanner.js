import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e8ee",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    overflow: "scroll",
  },
  maintext: {
    // fontSize: 18,
    // margin: 50,
    fontSize: windowWidth * 0.04, // Ajuste del tamaño de fuente en función del ancho de la ventana
    margin: windowWidth * 0.1,
    alignSelf: "center",
  },

  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    // height: 230,
    marginTop: windowHeight * 0.01,
    height: windowHeight * 0.3,
    // width: "100%",
    width: windowWidth * 0.9,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "transparent",
    // marginBottom: 10,
    marginBottom: windowHeight * 0.01,
    margin: windowHeight * 0.015,
  },

  title: {
    // fontSize: 18,
    fontSize: windowWidth * 0.04,
    backgroundColor: "#e4e8ee",
    fontWeight: "bold",
  },

  button: {
    position: "relative",
    verticalAlign: "bottom",
  },
});

export default styles;
