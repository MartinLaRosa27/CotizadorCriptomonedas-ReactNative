import { Platform, StyleSheet } from "react-native";

module.exports.styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
});

module.exports.stylesHeader = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === "ios" ? 50 : 35,
    backgroundColor: "#5E49E1",
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
    color: "#FFF",
    marginBottom: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

module.exports.stylesFromulario = StyleSheet.create({
  containerFromulario: {
    marginHorizontal: "2.5%",
  },
  label: {
    fontSize: 22,
    marginVertical: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  btnCotizar: {
    backgroundColor: "#5E49E2",
    padding: 10,
    marginTop: 20,
  },
  btnTextoCotizar: {
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
  },
  resultadoCotizacion: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 20,
  },
  negrita: {
    color: "#5E49E2",
    fontWeight: "bold",
  },
});
