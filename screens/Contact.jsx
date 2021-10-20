import React from 'react'
import { StyleSheet,View,Text,ImageBackground,SafeAreaView} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const Contact = () => {
    return (
        <SafeAreaView>
            <View style={{height:80,paddingTop:38,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'}}>

            </View>
             <ImageBackground
          style={{width:'100%',height:'100%',
        alignItems:'center',justifyContent:'center',marginVertical:10}}
          source={require('../assets/pic.png')}>
            
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Contacts</Text>

<View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,width:'50%'}}>
        <Icon   name="phone" size={30} color='green'/>
            <Text>Phone Number : 0766465828</Text>

            </View>
            <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,width:'50%'}}>
            <Icon   name="house" size={30} color='brown'/>
            <Text>Address : Moletjie Ga-Makgwakgwana 0709</Text>
            </View>
            <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,width:'50%'}}>
            <Icon   name="email" size={30} color='tomato'/>
            <Text>Email : chabathapelo1@gmail.com</Text>
        </View>
        <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,width:'50%'}}>
            <Icon   name="facebook" size={30} color='blue'/>
            <Text>Facebook : thapelo chaba</Text>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Contact
