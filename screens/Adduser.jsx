import React,{useState} from 'react'

import Reviewform from './reviewform';
import { StyleSheet,View,Text, FlatList,TouchableOpacity ,SafeAreaView,Modal,
    LayoutAnimation } from 'react-native';
import { Button } from 'react-native-elements';
const Adduser = ({navigation}) => {
    const [reviews,setReviews]=useState([
        {name:'molobe',Age:3,surname:'the dancing side',
        location:'motinti',gender:'female',
        key:'1'},
        {name:'koketso',Age:2,surname:'the playing side',
        location:'tambo',gender:'male',key:'2',

        }
    ])
    
const addReview =(review)=>{
    review.key=Math.random().toString()
    setReviews((currentReviews)=>{
        return[review,...currentReviews]

    })
    // navigation.navigate('home',{reviews})
    
}
// const [isRender,setisRender]=useState(false)
// const renderItem =(item,index)=>{
// return(
//     <TouchableOpacity onPress={()=> navigation.navigate('home',item)}>
//                       <Text>{item.name}  {item.surname}</Text>
//                   </TouchableOpacity>
// )
// }
    return (
        <SafeAreaView>
        <Reviewform addReview={addReview}/>
        {/* <Button
        title='to home'
        onPress={()=>navigation.navigate('home',{reviews})}/>
        <FlatList 
              data={reviews}
              keyExtractor={(item)=>item.key.toString()}
              renderItem={renderItem}
              extraData={isRender}
              /> */}
        {/*  <TouchableOpacity onPress={()=> navigation.navigate('home',item)}>
                      <Text>{item.name}  {item.surname}</Text>
                  </TouchableOpacity> */}

        </SafeAreaView>
    )
}

export default Adduser
