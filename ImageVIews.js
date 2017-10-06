import React, {Component} from 'react';
import {Image,TextInput,View,StyleSheet,ScrollView, StatusBar,Text,TouchableWithoutFeedback
,Dimensions,Modal} from 'react-native';


export default class ImageElement extends Component {
constructor(props) {
    super(props)
    this.state={
 
    }

}
  render() {

    return (
                  

<Image source={
this.props.imgsource}  style={styles.image}></Image>

    );
   
  }
}
const styles = StyleSheet.create({
  image:{
      flex:1,
      width:null,
      alignSelf:'stretch'
  }
 
});
module.export =  ImageElement;