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



export default class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = {

   
  

      Images: [

        require('./any.jpg'),
        require('./pic2.jpeg'),
        require('./pic3.png'),
        require('./pic4.jpeg'),
        require('./pic5.jpeg'),
        require('./pic6.jpeg'),
        require('./pic7.jpeg'),
        require('./pic8.jpeg'),
        require('./pic9.jpeg'),
        require('./pic10.jpeg'),
        require('./pic11.jpeg'),
        require('./pic12.jpeg'),
        require('./pic13.jpeg'),
        require('./pic14.jpeg'),



        //For network images use below code

        /* source={ uri: 
'https://static.pexels.com/photos/374074/pexels-photo-374074.jpeg'},

                  source={ uri: 
'https://static.pexels.com/photos/205316/pexels-photo-205316.png'},
  source={ uri: 
'https://static.pexels.com/photos/461077/pexels-photo-461077.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/196655/pexels-photo-196655.jpeg'},
source={ uri: 
'https://static.pexels.com/photos/392018/pexels-photo-392018.jpeg'},

                  source={ uri: 
'https://static.pexels.com/photos/169573/pexels-photo-169573.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/204611/pexels-photo-204611.jpeg'},
source={ uri: 
'https://static.pexels.com/photos/577585/pexels-photo-577585.jpeg'},

                  source={ uri: 
'https://static.pexels.com/photos/257897/pexels-photo-257897.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/572056/pexels-photo-572056.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/374631/pexels-photo-374631.jpeg'},
    source={ uri: 
'https://static.pexels.com/photos/450035/pexels-photo-450035.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/7357/startup-photos.jpg'},
  source={ uri: 
'https://static.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg'},
  source={ uri: 
'https://static.pexels.com/photos/374016/pexels-photo-374016.jpeg'}*/


        require('./pic15.png')





      ]
    }

  }
  render() {

    //here we are indexing the array Images and passing the values to the ImageElement class

    let images = this.state.Images.map((val, key) => {
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
