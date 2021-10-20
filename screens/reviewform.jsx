import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup'

import { SafeAreaView } from 'react-navigation';

const reviewform = ({addReview}) => {
    const ReviewSchem = yup.object({
        name:yup.string().required().min(4),
        location:yup.string().required().min(4),
        gender:yup.string().required().test('is-num-1-100','gender must be Female/Male',
        (val)=>{
            return val == 'Female' || val == 'Male';
        }
        ),
        surname:yup.string().required().min(4),
        Age:yup.string().required().test('is-num-1-100','Age must be number 1- 100',
        (val)=>{
            return parseInt(val) < 101 && parseInt(val) > 0;
        }
        )
    })
    
    return (
        <>
        
           <View style={styles.container}>
               <Formik 
               initialValues={{name:'',surname:'',Age:'',location:'',gender:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                addReview(values)
               }}
               >

                   {(props)=>(
                       
                       
                       <View >
                           <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="Name"
                           placeholder='Enter name..'
                           onChangeText={props.handleChange('name')}
                           value={props.values.name}
                           onBlur={props.handleBlur('name')}
                           />
                           <Text style={{color:'tomato'}}>{props.touched.name && props.errors.name}</Text>
                            <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="Surname"
                           placeholder='Enter surname..'
                           onChangeText={props.handleChange('surname')}
                           value={props.values.surname}
                           onBlur={props.handleBlur('surname')}
                           />
                           <Text style={{color:'tomato'}}>{props.touched.surname && props.errors.surname}</Text>
                            <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="Age"
                           placeholder='Enter Age..'
                           onChangeText={props.handleChange('Age')}
                           value={props.values.Age}
                           keyboardType='numeric'
                           onBlur={props.handleBlur('Age')}
                           />
                           <Text style={{color:'tomato'}}>{props.touched.Age && props.errors.Age}</Text>
                            <TextInput 
                            multiline
                           style={styles.input}
                           mode="outlined"
                           label="Location"
                           placeholder='Enter Location..'
                           onChangeText={props.handleChange('location')}
                           value={props.values.location}
                           onBlur={props.handleBlur('location')}
                           />
                           <Text style={{color:'tomato'}}>{props.touched.location && props.errors.location}</Text>
                            <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="Gender"
                           placeholder='Enter Gender..'
                           onChangeText={props.handleChange('gender')}
                           value={props.values.gender}
                           onBlur={props.handleBlur('gender')}
                           />
                           <Text style={{color:'tomato'}}>{props.touched.gender && props.errors.gender}</Text>
                           {/* <Button  title='submit'  color='pink' onPress={props.handleSubmit}/> */}
                           <Button 
                           style={styles.submitButton}
                           mode="contained"
                           compact={false}
                           
                           contentStyle={styles.button}
                           icon="account-plus"
                           onPress={props.handleSubmit}>
                               register Account
                           </Button>
                           <Text style={{fontSize:10}}>double click to submit</Text>
                       </View>
                   )}
                    
                   </Formik>
                   {/*  */}
               
               </View> 
               
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        padding:24
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6,
        width:'100%',
        backgroundColor:'white'
    },
    submitButton: {
        margin: 10,
        height: 50,
        justifyContent: 'center'
      }
})

export default reviewform
