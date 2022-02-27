import React from 'react'
import { StyleSheet,View,Text,ImageBackground,SafeAreaView,
TextInput} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';
import * as yup from 'yup'
const Contact = () => {
    const ReviewSchem = yup.object({
        phonenumber:yup.string().required().min(10).max(10),
        location:yup.string().required().min(4),
        gender:yup.string().required().test('is-num-1-100','gender must be Female/Male',
        (val)=>{
            return val == 'Female' || val == 'Male';
        }
        ),
        email:yup.string().required().min(4),
        Age:yup.string().required().test('is-num-1-100','Age must be number 1- 100',
        (val)=>{
            return parseInt(val) < 101 && parseInt(val) > 0;
        }
        )
    })
    return (
        <SafeAreaView>
            <View style={styles.container}>
            
            <LottieView style={styles.hotel}
       source={require('../screens/animation1.json')} autoPlay loop/>
          </View>
          <Formik 
               initialValues={{phonenumber:'',email:'',Age:'',location:'',gender:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                addReview(values)
               }}
               >

                   {(props)=>(
            <View style={{padding:38,height:'50%',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',top:10}}>

            
             {/* <ImageBackground
          style={{width:'100%',height:'100%',
        alignItems:'center',justifyContent:'center',marginVertical:10}}
          source={require('../assets/pic.png')}> */}
            
        {/* <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Contacts</Text> */}
 <View style={styles.inputContainer}>
        
            <Icon name='phone'
            style={{color:'blue',textAlign:'center',
        fontSize:18}}
            />
       
            <TextInput
             style={styles.inputs}
             placeholder='Phone Number : 0766465828'
             keyboardType='numeric'
             onChangeText={props.handleChange('phonenumber')}
             value={props.values.phonenumber}
             onBlur={props.handleBlur('phonenumber')}
             />
        
        </View>
        <Text style={{color:'tomato'}}>{props.touched.phonenumber && props.errors.phonenumber}</Text>
             <View style={styles.inputContainer}>
        
        <Icon name='house'
        style={{color:'blue',textAlign:'center',
    fontSize:18}}
        />
   
        <TextInput
         style={styles.inputs}
         placeholder='Address : Moletjie Ga-Makgwakgwana 0709'
         
         onChangeText={props.handleChange('location')}
         value={props.values.location}
         onBlur={props.handleBlur('location')}
         />
    </View>
    <Text style={{color:'tomato'}}>{props.touched.location && props.errors.location}</Text>
    <View style={styles.inputContainer}>
        
        <Icon name='email'
        style={{color:'blue',textAlign:'center',
    fontSize:18}}
        />
   
        <TextInput
         style={styles.inputs}
         placeholder='Email : chabathapelo1@gmail.com'
         
         onChangeText={props.handleChange('email')}
         value={props.values.email}
         onBlur={props.handleBlur('email')}
         />
    </View>
    <Text style={{color:'tomato'}}>{props.touched.email && props.errors.email}</Text>
    <View style={styles.inputContainer}>
        
        <Icon name='facebook'
        style={{color:'blue',textAlign:'center',
    fontSize:18}}
        />
   
        <TextInput
         style={styles.inputs}
         placeholder='Facebook : thapelo chaba'
         
        //  onChangeText={props.handleChange('phonenumber')}
        //  value={props.values.phonenumber}
        //  onBlur={props.handleBlur('phonenumber')}
         />
    </View>
        
            </View>
            )}
                    
            </Formik>
            {/* </ImageBackground> */}
        </SafeAreaView>
    )
}

export default Contact
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:90,
        marginTop:-20,
        // backgroundColor: '#fff',
      },
      hotel: {
        width:150,
        height:150,
        
      },
      inputs:{
        borderBottomColor:'black',
        
         flex:0.8,
        paddingLeft:10,
        
    },
    inputContainer:{
        borderRadius:10,
        height:48,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        
        backgroundColor:'#fff',
        elevation:2,
        

    },
})
