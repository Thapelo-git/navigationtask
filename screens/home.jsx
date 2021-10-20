import React,{useState} from 'react'
import { StyleSheet,View,Text, FlatList,TouchableOpacity ,SafeAreaView,Modal,
    LayoutAnimation, 
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

import Contact from "../screens/Contact";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from './reviewDetails';





// 
export default function Home({navigation}){
    
    const [modalOpen,setModalOpen]=useState(false)
    const [reviews,setReviews]=useState([])
    // {name:'molobe',Age:3,surname:'the dancing side',
    //     location:'motinti',gender:'female',
    //     key:'1'},
    //     {name:'koketso',Age:2,surname:'the playing side',
    //     location:'tambo',gender:'male',key:'2',

    //     }
    
const addReview =(review)=>{
    review.key=Math.random().toString()
    setReviews((currentReviews)=>{
        return[review,...currentReviews]

    })
}
// const [isRender,setisRender]=useState(false)
// const [isModalVisible,setisModalVisible] =useState(false)
// const [inpuText,setinputText]=useState();
// const [editItem,seteditItem]= useState();

// const onPressItem=(item)=>{
//     setisModalVisible(true);
//     setinputText(item.text)
//     seteditItem(item.key)
// }

// const renderItem =(item,index)=>{
// return(
//     <TouchableOpacity style={styles.item}onPress={()=> navigation.navigate('home',item)}>
//                       <Text style={styles.text}>{item.name}  </Text>
//                   </TouchableOpacity>
// )
// }


    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
          <Image
          style={{width:'100%',height:'100%',flexDirection:'row',
        alignItems:'center',justifyContent:'center'}}
          source={require('../assets/pic2.png')}>
           <ScrollView>
               <View style={{flexDirection:'row',width:'100%',
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
                  </View>
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
            style={{backgroundColor:'gainsboro',justifyContent:'flex-start',width:40,height:50,borderRadius:10}} 
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
                     <Icon name="edit" size={30}/>
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
                     
                  
                  
                     text="Delete"
                     textStyle={{fontWeight: 'bold', color: 'black',backgroundColor:'red'}}
                   
                    
                     />
                      {/* <TouchableOpacity onPress={()=>setReviews(reviews.filter(itemm => itemm.key != item.key))}>
                  <Icon name="delete" size={30} color='red' />
                  </TouchableOpacity>  */}
                     
                     
                    
                     
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
        </Image>
    
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        padding:24,
        flexDirection:'row',width:'100%',
               borderRadius:20,
               justifyContent:'space-between',
               backgroundColor:'gainsboro',
               marginBottom:'60%'

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

    },listItem:{
        padding:10,
        backgroundColor:'pink',
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
