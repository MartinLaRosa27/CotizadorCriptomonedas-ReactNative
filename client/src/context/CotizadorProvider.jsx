import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";
const cotizadorContext = createContext();

export const CotizadorProvider = (props) => {
  // --------------------------------------------------------------------
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [cotizacion, setCotizacion] = useState(null);
  const [criptomonedas, setCriptomonedas] = useState(null);

  // --------------------------------------------------------------------
  const obtenerCriptomonedas = async () => {
    await axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then((res) => {
        setCriptomonedas(res.data.Data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // --------------------------------------------------------------------
  const cotizarPrecio = async () => {
    console.log(moneda);
    console.log(criptomoneda);
    if (moneda.length <= 0 || criptomoneda.length <= 0) {
      Alert.alert(
        "No se pudo obtener la cotización",
        "Por favor, verifique los datos ingresados"
      );
      return;
    }
    obtenerCotizacion();
  };

  // --------------------------------------------------------------------
  const obtenerCotizacion = async () => {
    setCotizacion(null);
    await axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${criptomoneda}&tsyms=${moneda}`
      )
      .then((res) => {
        setCotizacion(res.data[criptomoneda][moneda]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // --------------------------------------------------------------------
  useEffect(() => {
    obtenerCriptomonedas();
  }, []);

  // --------------------------------------------------------------------
  return (
    <cotizadorContext.Provider
      value={{
        moneda,
        criptomoneda,
        criptomonedas,
        cotizacion,
        setCriptomoneda,
        cotizarPrecio,
        setMoneda,
        setCotizacion,
      }}
    >
      {props.children}
    </cotizadorContext.Provider>
  );
};

export default cotizadorContext;
