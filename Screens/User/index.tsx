import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../Features/Slices/stateHook';
import ListCard from '../../Component/ListCard';
import { deleteUser, getUserData } from '../../Features/Slices/User/UserSlice';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation()
  const users = useAppSelector(getUserData)
  const dispatch = useAppDispatch()
  console.log(users)

  const handleEdit = (index: number) => {
    const data = users?.Data?.filter((item: any) => item.id === index);
    console.log(data, "**********************")
    navigation.navigate("AddUser", { type: "edit", data:data });
  }

  const handleDelete = (index: number) => {
    dispatch(deleteUser(index))
  }

  return (
    
    <View style = {styles.container}>
      <FlatList 
        data={users.Data} 
        renderItem={({item, index}) => (
         <TouchableOpacity>
            <ListCard name={item.name} 
              email={item.email} 
              phonenumber={item.phone} 
              address={item.address}

              index={item.id} // Pass the index as a prop
              onEdit={handleEdit} // Pass the handleEdit function as a prop
              onDelete={handleDelete}
            />
         </TouchableOpacity>   
        )}   
      />

      <TouchableOpacity style = {styles.Btn}
        onPress={() => {
          navigation.navigate('AddUser', {type: 'add'});
        }}>

        <Ionicons name="add-circle" size={28} color="white" />
      </TouchableOpacity>
      
    </View>
  )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    list: {
      width: '90%',
      backgroundColor: 'red',
      padding: 10,
      borderWidth: 1,
      alignSelf : 'center',
      marginTop: 40,
      borderRadius: 10,
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

    TxT: {
        color: 'white',
        fontSize: 28,

    },
})

