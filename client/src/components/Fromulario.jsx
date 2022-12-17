import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useCotizador } from "../hook/useCotizador";
const { stylesFromulario } = require("../../styles");

export const Fromulario = () => {
  // --------------------------------------------------------------------
  const {
    moneda,
    setMoneda,
    criptomonedas,
    criptomoneda,
    setCriptomoneda,
    cotizarPrecio,
    cotizacion,
    setCotizacion,
  } = useCotizador();

  // --------------------------------------------------------------------
  const modificarMoneda = (moneda) => {
    setMoneda(moneda);
    setCotizacion(null);
  };

  // --------------------------------------------------------------------
  const modificarCriptomoneda = (criptomoneda) => {
    setCriptomoneda(criptomoneda);
    setCotizacion(null);
  };

  // --------------------------------------------------------------------
  return (
    <View style={stylesFromulario.containerFromulario}>
      <Text style={stylesFromulario.label}>Moneda</Text>
      <Picker selectedValue={moneda} onValueChange={(e) => modificarMoneda(e)}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={stylesFromulario.label}>Criptomoneda</Text>
      {criptomonedas !== null && (
        <Picker
          selectedValue={criptomoneda}
          onValueChange={(e) => modificarCriptomoneda(e)}
        >
          <Picker.Item label="- Seleccione -" value="" />
          {criptomonedas.map((criptomoneda) => {
            return (
              <Picker.Item
                key={criptomoneda.CoinInfo.id}
                label={criptomoneda.CoinInfo.FullName}
                value={criptomoneda.CoinInfo.Name}
              />
            );
          })}
        </Picker>
      )}
      <View>
        <TouchableHighlight
          style={stylesFromulario.btnCotizar}
          onPress={() => cotizarPrecio()}
        >
          <Text style={stylesFromulario.btnTextoCotizar}>Cotizar</Text>
        </TouchableHighlight>
      </View>
      <View>
        {cotizacion === null && moneda !== "" && criptomoneda !== "" && (
          <View>
            <ActivityIndicator size="large" color="#5E49E2" />
          </View>
        )}
        {cotizacion !== null && (
          <View>
            <Text style={stylesFromulario.resultadoCotizacion}>
              1 {criptomoneda} es igual a
              <Text style={stylesFromulario.negrita}> {cotizacion} </Text>
              {moneda}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
