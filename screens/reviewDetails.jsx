import React, { useState } from 'react'
import { StyleSheet,View,Text,TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather"
import { TextInput,Button } from 'react-native-paper';


const Stack = createNativeStackNavigator()
export default function ReviewDetails({props,route,navigation}){
    
    // const {itemID}=route.params
    // const id =parseInt(itemID)
    const [name,setName]=useState(route.params.name)
    const [Age,setAge]=useState(route.params.Age)
    const [surname,setSurname]=useState(route.params.surname)
    const [location,setLocation]=useState(route.params.location)
    const [gender,setGender]=useState(route.params.gender)

    const handleupdate =()=>{

        setName('')
        setAge('')
        setGender('')
        setLocation('')
        setSurname('')
    }


    return(
        <View style={styles.container}>
            <ScrollView>
            {/* <Text style={{fontWeight:'bold',fontSize:20}}>Name</Text> */}
            {/* <Text style={{fontSize:20}}> 
            {navigation.getParam('name')}
            
            
            {route.params.name}
            </Text> */}
            <TextInput
            value={name}
            onChangeText={(e)=>setName(e)}
            mode="outlined"
            label="Name"
            placeholder='Name.....'
            style={{borderWidth:1,
                borderColor:'#ddd',
                padding:10,
                fontSize:18,
                borderRadius:6,
                width:'60%',
                backgroundColor:'white'}}/>
            {/* <Text style={{fontWeight:'bold',fontSize:20}}>Age</Text> */}
            {/* <Text style={{fontSize:20}}>
            {navigation.getParam('Age')}
            {route.params.Age}
            </Text> */}
            
            <TextInput
            value={Age}
            onChangeText={(e)=>setAge(e)}
            mode="outlined"
            label="Age"
            placeholder='Age.....'
            keyboardType='numeric'
            style={{borderWidth:1,
                borderColor:'#ddd',
                padding:10,
                fontSize:18,
                borderRadius:6,
                width:'60%',
                backgroundColor:'white'}}
                />
                {/* <View>
                    <Icon name='edit' />
                </View> */}
                
            {/* <Text style={{fontWeight:'bold',fontSize:20}}>Surname</Text> */}
            {/* <Text style={{fontSize:20}}>
            {navigation.getParam('surname')}
            
            </Text> */}
            <TextInput
            value={surname}
            onChangeText={(e)=>setSurname(e)}
            mode="outlined"
            label="Surname"
            placeholder='Surname.....'
            style={{borderWidth:1,
                borderColor:'#ddd',
                padding:10,
                fontSize:18,
                borderRadius:6,
                width:'60%',
                backgroundColor:'white'}}/>
            {/* <Text style={{fontWeight:'bold',fontSize:20}}>Location</Text> */}
            {/* <Text style={{fontSize:20}}>
            {navigation.getParam('location')}
            {route.params.location}
            </Text> */}
            <TextInput
            value={location}
            onChangeText={(e)=>setLocation(e)}
            mode="outlined"
            label="Location"
            placeholder='Location.....'
            style={{borderWidth:1,
                borderColor:'#ddd',
                padding:10,
                fontSize:18,
                borderRadius:6,
                width:'60%',
                backgroundColor:'white'}}/>
            {/* <Text style={{fontWeight:'bold',fontSize:20}}>Gender</Text> */}
            {/* <Text style={{fontSize:20}}>
            {navigation.getParam('gender')}
            {route.params.gender}
            </Text> */}
            <TextInput
            value={gender}
            onChangeText={(e)=>setGender(e)}
            mode="outlined"
            label="Gender"
            placeholder='Gender.....'
            style={{borderWidth:1,
                borderColor:'#ddd',
                padding:10,
                fontSize:18,
                borderRadius:6,
                width:'60%',
                backgroundColor:'white'}}/>
                <Button 
                           style={styles.submitButton}
                           mode="contained"
                           compact={false}
                           
                           contentStyle={styles.button}
                           icon="account-plus"
                           onPress={()=>handleupdate()}>
                               Update
                           </Button>
            {/* <TouchableOpacity style={{padding:14,borderRadius:10,
                backgroundColor:'gainsboro',width:90}}
                onPress={()=>handleupdate()}
                >
                <Text>Update</Text>
            </TouchableOpacity> */}
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    // container:{
    //     backgroundColor:'grey',
    //     borderRadius:7,
    //     marginVertical:10,
    //     alignItems:'center',
        
    //     // flexDirection:'row'
        
            
    // }
    //,
    submitButton: {
        margin: 10,
        height: 50,
        justifyContent: 'center'
      }
})
