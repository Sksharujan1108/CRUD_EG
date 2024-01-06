import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
      // alignItems:'center',
    },
    InputView: {
      flexDirection: "column",
      marginTop: 20,
    },
    TextInput: {
      width: 300,
      paddingHorizontal: 30,
      paddingVertical: 10,
      backgroundColor: "white",
      marginVertical: 35, // next text box space
      borderRadius: 10,
      elevation: 20,
      alignSelf: "center",
      fontSize: 15,
    },
    Btn: {
      paddingHorizontal: 50,
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 40,
      backgroundColor: "black",
      // display: 'flex',
      alignSelf: "center",
      elevation: 20,
    },
    TxT: {
      color: "white",
      fontSize: 20,
    },
  });