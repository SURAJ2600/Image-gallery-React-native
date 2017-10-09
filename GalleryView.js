/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Image, Dimensions, TouchableWithoutFeedback,
  Text,
  View, ScrollView
} from 'react-native';

import ImageElement from './ImageVIews';



export default class Gallery extends Component {
 
  constructor(props) {
    super(props)
    this.state = {

   
  

  


    }

  }
  render() {

    //here we are indexing the array Images and passing the values to the ImageElement class

    let images = this.props.images.map((val, key) => {
      return <TouchableWithoutFeedback key={key} >
        <View style={styles.imagewrap}>
          <ImageElement imgsource={val}></ImageElement>
        </View>
      </TouchableWithoutFeedback>

    });
    return (
      <ScrollView >
        <View style={styles.container}>

          {images}


        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },

  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    width: (Dimensions.get('window').width / 3) - 5,
    height: (Dimensions.get('window').height / 5) - 12,
    backgroundColor: '#fff'



  },

});
