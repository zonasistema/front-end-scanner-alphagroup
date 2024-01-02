import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.04, // Ajuste del tamaño de fuente en función del ancho de la ventana
    backgroundColor: "#e7ebf0",
    padding: windowWidth * 0.012, // Ajuste del padding en función del ancho de la ventana
    borderRadius: windowWidth * 0.01, // Ajuste del radio de borde en función del ancho de la ventana
    borderWidth: 0.5,
    marginVertical: windowHeight * 0.002, // Ajuste del margen vertical en función del alto de la ventana
  },

  textApi: {
    fontSize: windowWidth * 0.035, // Ajuste del tamaño de fuente en función del ancho de la ventana
    fontWeight: "800", // Cambiado a string ya que solo se aceptan strings para 'fontWeight'
    color: "#555555",
  },

  titleText: {
    color: "#000",
    fontSize: windowWidth * 0.043, // Ajuste del tamaño de fuente en función del ancho de la ventana
    fontWeight: "800", // Cambiado a string ya que solo se aceptan strings para 'fontWeight'
  },

  container: {
    borderTopWidth: 1,
    borderBottomEndRadius: windowWidth * 0.03, // Ajuste del radio de borde en función del ancho de la ventana
    borderBottomStartRadius: windowWidth * 0.03, // Ajuste del radio de borde en función del ancho de la ventana
    width: "auto",
    height: "auto",
    marginBottom: windowHeight * 0.01, // Ajuste del margen inferior en función del alto de la ventana
    backgroundColor: "#fcfcfc",
    paddingVertical: windowHeight * 0.015, // Ajuste del padding vertical en función del alto de la ventana
    paddingHorizontal: windowWidth * 0.018, // Ajuste del padding horizontal en función del ancho de la ventana
  },
});

// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//   text: {
//     fontWeight: "bold",
//     fontSize: 15,

//     backgroundColor: "#e7ebf0",
//     padding: 5,
//     borderRadius: 5,
//     borderWidth: 0.5,
//     marginVertical: 1,
//   },

//   textApi: {
//     fontSize: 14,
//     fontWeight: 800,
//     color: "#555555",
//   },

//   titleText: { color: "#000", fontSize: 16, fontWeight: 800 },

//   container: {
//     borderTopWidth: 1,
//     borderBottomEndRadius: 15,
//     borderBottomStartRadius: 15,
//     width: "auto",
//     height: "auto",
//     marginBottom: 8,
//     backgroundColor: "#fcfcfc",
//     paddingVertical: 10,
//     paddingHorizontal: 7,
//   },
// });
