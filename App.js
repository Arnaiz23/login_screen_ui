import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

import ButtonGoHome from "./src/components/ButtonGoHome"
import InputContainer from "./src/components/InputContainer"

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ButtonGoHome />

        <View style={styles.mainContainer}>
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
          >
            <FontAwesome5 name="shopping-bag" size={100} color="#29b68a" />
            <Text style={{ color: "#25a187", fontSize: 25 }}>
              Welcome back.
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 10,
            }}
          >
            <InputContainer placeholder={"Email"} />
            <InputContainer placeholder={"Password"} />
          </View>
        </View>

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2732",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 20,
  },
})
