import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../Features/Slices/stateHook";
import { styles } from "./styles";

interface PropType{
  name:string,
  email:string,
  phonenumber:number | any,
  address:string,
  index: number; // Add index as a prop
  onEdit: (index: number) => void; // Add onEdit prop

  onDelete: (index: any) => void;
  
}

const ListCard = ({name, email, phonenumber, address, index, onEdit, onDelete}: PropType) => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    onEdit(index); // Call the onEdit function with the index

  };

  const handleDelete = () => {
    onDelete(index);
  }


  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={styles.Txt}> Name: {name} </Text>
          <Text style={styles.Txt}> Email: {email}</Text>
          <Text style={styles.Txt}> PhoneNumber: {phonenumber} </Text>
          <Text style={styles.Txt}> Address: {address} </Text>
        </View>

        <View style = {{flexDirection: 'column', justifyContent: 'space-around'}} >
          <TouchableOpacity style = {styles.btnView}
            onPress = {handleEdit} >
              <Text style = {styles. btnTxt}> Edit </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.btnView} 
            onPress ={handleDelete} >
              <Text style = {styles. btnTxt}> Delete </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default ListCard;

