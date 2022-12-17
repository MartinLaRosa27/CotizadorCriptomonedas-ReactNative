import React from "react";
import { Text } from "react-native";
const { stylesHeader } = require("../../styles");

export const Header = () => {
  return (
    <Text style={stylesHeader.encabezado}>Cotizador Criptomonedas 2022</Text>
  );
};
