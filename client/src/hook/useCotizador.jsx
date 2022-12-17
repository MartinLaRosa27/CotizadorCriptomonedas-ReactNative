import { useContext } from "react";
import cotizadorContext from "../context/CotizadorProvider";

export const useCotizador = () => {
  return useContext(cotizadorContext);
};
