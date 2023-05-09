import { StyleSheet, TextInput } from "react-native"

export default function InputContainer({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder ? placeholder : "No placeholder"}
      placeholderTextColor={"#fff"}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
})
