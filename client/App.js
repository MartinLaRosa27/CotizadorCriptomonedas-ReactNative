import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, SafeAreaView, ScrollView } from "react-native";
import { Header } from "./src/components/Header";
import { Fromulario } from "./src/components/Fromulario";
import { CotizadorProvider } from "./src/context/CotizadorProvider";
const { styles } = require("./styles");

export default function App() {
  return (
    <CotizadorProvider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Header />
            <Image
              source={require("./src/assets/img/cryptomonedas.png")}
              style={styles.imagen}
            />
            <Fromulario />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </CotizadorProvider>
  );
}
