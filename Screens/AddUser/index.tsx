import {Alert,Text,TextInput,TouchableOpacity,View,ScrollView} from "react-native";
import React, { useState } from "react";
import { useAppDispatch } from "../../Features/Slices/stateHook";
import {addUser,updateUser,} from "../../Features/Slices/User/UserSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";


const AddUser = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useAppDispatch();

  const isEdit = route.params?.type === 'edit' ? true: false;
  const userToEdit = route.params?.data;
  console.log(userToEdit)

  const [name, setName] = useState(isEdit ? userToEdit[0].name : "");
  const [email, setEmail] = useState(isEdit ? userToEdit[0].email : "");
  const [phone, setPhone] = useState(isEdit ? userToEdit[0].phone : "");
  const [address, setAddress] = useState(isEdit ? userToEdit[0].address : "");

  const handleSave = () => {
    if (
      name.trim().length > 0 && email.trim().length > 0 &&
      phone.trim().length > 0 && address.trim().length > 0
    ) {
      if (isEdit) {
        dispatch(
          updateUser({
            name: name,
            email: email,
            phone: phone,
            address: address,
            id: userToEdit[0].id,
          })
        );
      } else {
        const id = Math.random();
        dispatch(addUser({ id, name, email, phone, address }));
      }
      navigation.goBack();
    } else {
      Alert.alert("Please Fill All Data");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.InputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter User Name"
          value={name}
          onChangeText={(txt) => setName(txt)}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Enter User Email"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Enter User PhoneNumber"
          value={phone}
          onChangeText={(txt) => setPhone(txt)}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Enter User Address"
          value={address}
          onChangeText={(txt) => setAddress(txt)}
        />

        <TouchableOpacity style={styles.Btn} onPress={handleSave}>
          <Text style={styles.TxT}> Save User </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddUser;


