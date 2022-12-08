import * as React from 'react';
import {
 
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  
  
   
} from 'react-native';
import{ NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Pressable,
  Center,
  ImageBackground,
  FormControl, 
  Input, 
  Button
} from 'native-base';






const App =() => { 
  return(<NativeBaseProvider>

    <View style={styles.container}>

    <View style = {styles.backgroundContainer}>
      <Image source = {require('./assets/bg.png')} style = {styles.backdrop} />
    </View>

    <View style={styles.metaContainer}>
    <View style = {styles.overlay}>
      <Image style = {styles.logo} source = {require('./assets/ppLogo.png')} />
      <Text style = {styles.welcome}>
        Sign in, Welcome back
      </Text>

  
      <View style = {styles.inputView}>
        <View>
        <Image source = {require("./assets/at.png")}
          style = {styles.imageStyle}/>
        </View>
        <View>
          <TextInput style= {styles.textInput}
                      placeholder={"Enter Email ID"}/>
        </View>
      </View>

      <View style = {styles.passwordinputView}>
        <View >
        <Image source = {require("./assets/lock.png")}
          style = {styles.imageStyle}/>
        </View>

          <View>
          <TextInput style= {styles.textInput}
                      placeholder={"Password"}/>
                      
          </View >
          <View>
          <Image source = {require("./assets/Frame.png")}
          style = {styles.imgStyle}/>
          </View>
      </View>

      <Button style = {styles.button}>
            Sign up
          </Button>
    </View>

   </View>
    
  </View>
  
</NativeBaseProvider>
  );
}
export default App;

 var styles = StyleSheet.create({
  backgroundContainer: {

    height: 800,
     width : 100,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  
    
  },
  container: {
  
    flex: 1,
    alignItems: 'center',
  },
  metaContainer: {
    paddingTop: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  overlay: {
    opacity: 0.9,
    
  },
  logo: {
    width: 70,
    height: 82,
    alignSelf: 'center',
    justifyContent: 'space-between'
   
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  welcome:{
    marginTop:50,
    fontSize: 15,
    marginLeft:65
  },
  inputView:{
    height:40,
    width: 310,
    marginTop:60,
    backgroundColor: "#F7F7F7",
    borderRadius:5,
    flexDirection:"row"
   },
  textInput:{
    height:50,
    flex:1,
    padding: 10,
  
  },
  passwordinputView:{
    height:40,
    width: 310,
    marginTop:20,
    backgroundColor: "#F7F7F7",
    borderRadius:5,
    flexDirection: "row"
  },
  imageStyle:{
      marginTop:10,
      height: 20,
      width:20,
      marginLeft:10
  },
  imgStyle:{
    marginTop:10,
    height: 20,
    width:20,
    left:160
  },
  button:{
      backgroundColor: "#047AFF",
      height:40,
      width: 310,
      alignItems: "center",
      borderRadius: 28,
      marginTop:25
     
  },
 
 

});




 