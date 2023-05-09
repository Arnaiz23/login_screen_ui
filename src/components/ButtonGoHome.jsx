import { TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

export default function ButtonGoHome() {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: Constants.statusBarHeight + 20,
        left: 20,
      }}
    >
      <FontAwesome5 name="arrow-left" size={20} color="#fff" />
    </TouchableOpacity>
  )
}
