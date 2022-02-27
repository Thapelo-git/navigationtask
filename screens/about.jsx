import React from 'react'
import { StyleSheet,View,Text,Image,SafeAreaView, ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function About(){
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={{height:60,paddingTop:38,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'}}>
                <Text>Resume</Text>
            </View>
            <ScrollView>
            <View style={{height:100,paddingTop:48,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'}}>
                <Text style={{fontWeight:'bold',paddingTop:1,fontSize:20,lineHeight:24}}>Chaba Thapelo</Text>
            </View>
            
            <View style={{backgroundColor:'#fff',
        flex:1,flexDirection:'row'}}>
            <View style={{backgroundColor:'gainsboro',flex:1,
    alignItems:'center',borderRadius:40}}>
        {/* <Text style={{fontWeight:'bold',paddingTop:1,fontSize:40,lineHeight:84}}>
              Thapelo Chaba
            </Text> */}
         <Image
            style={{width:150,height:150,borderRadius:50,borderColor:'white'}}
            source={require('../assets/picc.png')}/>
            <View style={{backgroundColor:'gainsboro',borderRadius:7,
        marginVertical:10,borderBottomWidth:0.5}}>
        <Text style={{
        fontSize:20,paddingTop:3}}>Contacts</Text>

            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        marginLeft:15}}>
            <View>
            <Icon   name="phone" size={20} color='blue'/>
            </View>
            <Text style={{marginLeft:10}}>Phone Number : 0766465828</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        marginLeft:15}}>
            <Ionicons   name="location" size={15} color='blue'/>
            <Text style={{marginLeft:10}}>Address : Moletjie Ga-Makgwakgwana 0709</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        marginLeft:15}}>
            <Icon   name="email" size={15} color='blue'/>
            
            <Text style={{marginLeft:10}}>Email : chabathapelo1@gmail.com</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        marginLeft:15}}>
            <Icon   name="facebook" size={15} color='blue'/>
            
            <Text style={{marginLeft:10}}>Facebook : thapelo chaba</Text>
            </View>
            <View style={{backgroundColor:'gainsboro',borderRadius:7,
        marginVertical:10,borderBottomWidth:0.5}}>
        <Text style={{
        fontSize:20,paddingTop:3}}>Profile</Text>
            </View>
            
            <Text>
            Thapelo is a flexible,posses excellent time keeping skills .
             I am an self-motivated,responsible and hard working person.
              I am a mature team worker and adaptable to all challenging 
              situations.
               I am able to work well both 
            in a team environment as well as using own initiative. 
            </Text>

        </View>
           
            
        <View style={{backgroundColor:'white',flex:1,height:600,alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,borderBottomWidth:0.5}}>
        <Text style={{
        fontSize:20,paddingTop:3}}>Qualification</Text>
            </View>
           <View style={{padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:15,paddingTop:3,color:'gray'}}>
            National senior certificate</Text>
            <Text>
            Selamodi secondary school
              
            </Text>
            <Text>2011-2015</Text>
            <Text style={{fontWeight:'bold',fontSize:15,paddingTop:3 ,color:'gray'}}>
            National Diploma Information
              Technology</Text>
            <Text>
            Tshwane University of Technology
             
            </Text>
            <Text>2016-2019</Text>
            <Text style={{fontWeight:'bold',fontSize:15,paddingTop:3 ,color:'gray'}}>
            Certificate of completing the online
             bootcamp | AWS stream</Text>
             </View>
            <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,borderBottomWidth:0.5}}>
        <Text style={{
        fontSize:20,paddingTop:3}}>Languages</Text>
            </View>
            <Text style={{fontWeight:'bold',paddingTop:3}}>
            Sepedi, English</Text>
            {/* <Text style={{fontWeight:'bold'}}>
            English</Text> */}
            {/* <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,borderBottomWidth:0.5}}>
        <Text style={{
        fontSize:20,paddingTop:3}}>Interests</Text>
       
            </View> */}
            {/* <Icon name="computer" size={10} color='black'/>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            reading</Text> */}
            
            <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10,borderBottomWidth:0.5}}>
        <Text style={{
        fontSize:20,paddingTop:3}}>Skills</Text>
       
            </View>
            <Text style={{fontWeight:'bold',paddingTop:3}}>
            Html, css, javascript</Text>
            <Text style={{fontWeight:'bold',paddingTop:3}}>
            React native, React js</Text>
            <Text style={{fontWeight:'bold',paddingTop:3}}>
            c++ c#
            </Text>
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
        // padding:24
        
        // justifyContent:'center'
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },
})