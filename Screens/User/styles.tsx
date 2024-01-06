import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "pink",
    },
    list: {
      justifyContent: "space-between",
      width: "90%",
      height: 130,
      padding: 10,
      borderWidth: 1,
      alignSelf: "center",
      marginTop: 100,
      borderRadius: 10,
      flexDirection: "row",
    },
    Txt: {
      fontSize: 18,
    },
    btnView: {
        width: 50,
        height: 30,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 18,
    },
    btnTxt: {
        fontSize: 15,
  
    },
    Btn: {
        // width: '100%',
        marginTop: 30,
        marginLeft: 320,
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: 'black',
        elevation: 20,
    },
  });