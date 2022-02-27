import React,{useState} from 'react'
import { StyleSheet,View,Text, FlatList,TouchableOpacity ,SafeAreaView,Modal,
    LayoutAnimation, Dimensions,Pressable,
    ScrollView} from 'react-native';
import { Header,Button } from 'react-native-elements';
import Reviewform from './reviewform';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SwipeableFlatList,
  SwipeableQuickActions,
  SwipeableQuickActionButton,
} from 'react-native-swipe-list';
import { ListItem ,ImageBackground,Image} from 'react-native-elements';
//import { Tab } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import About from "../screens/about";
import WavyHeader from '../routes/WavyHeader.jsx';
import Contact from "../screens/Contact";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from './reviewDetails';


export default function Home({navigation}){
    
    const [modalOpen,setModalOpen]=useState(false)
    const [reviews,setReviews]=useState([])
    
    
const addReview =(review)=>{
    review.key=Math.random().toString()
    setReviews((currentReviews)=>{
        return[review,...currentReviews]

    })
}



    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
              <View style={styles.container1}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={160}
        customTop={130}
        customBgColor="#00cba9"
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={styles.headerContainer}>
      {/* <TouchableOpacity style={{backgroundColor:'blue',
           justifyContent:'flex-start',width:55,height:50,borderRadius:10,
           }} onPress={()=>setModalOpen(true)}>
                  <Icon name="add" size={30} color='black'
                   />
                  <Text>Adduser</Text>
                  </TouchableOpacity> */}
                  {/* <TouchableOpacity onPress={()=>setModalOpen(true)}>
        <Text style={styles.headerText}>Add User</Text>
        <Icon name="add" size={30} color='black'
                   />
        </TouchableOpacity> */}
        <Pressable onPress={()=>setModalOpen(true)} style={styles.logout}>
              <Text style={styles.logoutText}>
              Add User
              </Text>
          </Pressable>
      </View>
    </View>
          {/* <Image
          style={{width:'100%',height:'80%',flexDirection:'row',
        alignItems:'center',justifyContent:'center'}}
          source={require('../assets/pic2.png')}>
           </Image> */}
           <ScrollView>
               {/* <View style={{flexDirection:'row',width:'100%',
               borderRadius:20,justifyContent:'space-between',
               backgroundColor:'gainsboro',marginBottom:'100%'}}>
           <Icon name="groups" size={100} color='black' 
           style={{marginLeft:'30%'}}/>
           <TouchableOpacity style={{backgroundColor:'blue',
           justifyContent:'flex-start',width:55,height:50,borderRadius:10,
           }} onPress={()=>setModalOpen(true)}>
                  <Icon name="add" size={30} color='black'
                   />
                  <Text>Adduser</Text>
                  </TouchableOpacity>
                  </View> */}
        <View style={styles.container}> 
        {/* <FlatList 
              data={reviews}
              keyExtractor={(item)=>item.key.toString()}
              renderItem={renderItem}
              extraData={isRender}
              /> */}
        <Modal visible={modalOpen} animationType='slide' >
            <View style={styles.modalContent}>
            <TouchableOpacity
            style={{justifyContent:'flex-start',width:40,height:50,borderRadius:10,
        left:150}} 
            onPress={()=>setModalOpen(false)}>
                  <Icon name="close" size={30} color='black' />
                  </TouchableOpacity> 
            
            <Text>
            <Reviewform addReview={addReview}/>
            </Text>
            </View>
            </Modal>

            
            {/*  <FlatList 
              data={reviews}
              renderItem={({item})=>(<SafeAreaView>
                  <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
                      <Text>{item.name}  {item.surname}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setReviews(reviews.filter(itemm => itemm.key != item.key))}>
                  <Icon name="delete" size={30} color='red' />
                  </TouchableOpacity> 
                  </SafeAreaView>
              )}
              /> */}
        {reviews.length?(
            <SafeAreaView>
            <SwipeableFlatList
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{padding:20,paddingBottom:100}}
            keyExtractor={(item)=>item.key.toString()}
            data={reviews}
            renderItem={({item})=>(
                <View style={styles.listItem} >
                    
                    
                    
                
        {/* <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}  {item.surname}</Text> */}
        <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
        <Text style={{paddingTop:3,fontSize:10}}>double click and swipe left to delete</Text>
                     <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}  {item.surname}</Text>
                     {/* <Icon name="edit" size={30}/> */}
              </TouchableOpacity>
              
                {/* <Button style={{width:'100%'}} title={"View"} color ='pink' onPress={()=>navigation.navigate('ReviewDetails',item)}/> */}
                {/* <Button  style={{size:20}}title={"edit"} onPress={()=>onPressItem(item)}></Button> */}
                
                </View>
                
            // <SafeAreaView>
            //       <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
            //           <Text>{item.name}  {item.surname}</Text>
            //       </TouchableOpacity>
                  
            //       </SafeAreaView>
            )}
            // extraData={isRender}
            
                renderLeftActions={({item}) => (
                    <SwipeableQuickActions>
                     <SwipeableQuickActionButton
                     onPress={() => { setReviews(reviews.filter(itemm => itemm.key != item.key))
       
                       LayoutAnimation.configureNext(
                         LayoutAnimation.Presets.easeInEaseOut,
                       );
                     }}
                     
                  
                  
                    //  text="Delete"
                    //  textStyle={{fontWeight: 'bold', color: 'black',backgroundColor:'red'}}
                   
                    
                     />
                      <TouchableOpacity onPress={()=>setReviews(reviews.filter(itemm => itemm.key != item.key))}>
                  <Icon name="delete" size={40} color='red' />
                  </TouchableOpacity> 
                     
                     
                    
                     
                   </SwipeableQuickActions>)}
            /> 
            {/* <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={()=>setisModalVisible(false)}
            >
                <View style={styles.modalView}>
                <Text style={styles.text}>Change Text:</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={(text)=>setinputText(text)}
               defaultValue={inpuText} 
               editable={true}
               multiline={false}
               maxLength={200}/>
               <TouchableOpacity 
               onPress={()=>onPressSaveEdit()}
               style={styles.touchableSave}
               >
                   <Text>Save</Text>
               </TouchableOpacity>
                </View>
                  
            </Modal> */}
            </SafeAreaView>
        ):(
            <View style={{height:80,paddingTop:0,
                
                alignItems: 'center',
                justifyContent: 'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:30}}>No users...</Text>
            </View>
        )}
              

           
        </View>
        </ScrollView>
        
    
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        padding:14,
        flexDirection:'row',width:'100%',
               borderRadius:20,
               justifyContent:'space-between',
               backgroundColor:'gainsboro',
            //    marginBottom:0
            marginTop:260
         

    },
    container1: {
        flex: 1,
        backgroundColor: '#fff'
      },
      svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
      },
      headerContainer: {
        marginTop: 50,
        marginHorizontal: 10,
        alignItems:'center'
      },
      headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 80
      },
    modalContent: {
        width:'100%',
        // paddingTop:38,
        // height:'50%',
        // marginTop:20,
        // padding:14,
        // borderRadius:7,
        // flex:1,
        //   alignItems:'center',
        //   justifyContent:'center'

    },
    logout : {
        color: 'black',
        paddingTop:23,borderRadius: 10,
        width: '40%',
        backgroundColor: 'white',
        padding: 30,
        textAlign: "center",
        textTransform: "uppercase",
        alignItems:'center'
    },
    logoutText : {
        textTransform: "uppercase",
        color: 'black',
        fontWeight: "900",
        

    },
    listItem:{
        padding:10,
        backgroundColor:'#00cba9',
        flexDirection:'row',
        elevation:12,
        borderRadius:7,
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:600,
        borderRadius:30
        // marginVertical:10,
      },
      textInput:{
          width:'90%',
          height:70,
          borderColor:'blue',
          borderWidth:1,
          fontSize:25
      },
      modalView:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      touchableSave:{
          backgroundColor:'orange',
          paddingHorizontal:100,
          alignItems:'center',
          marginTop:20
      }
      
})
