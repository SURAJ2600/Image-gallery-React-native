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
import Gallery from './GalleryView';



export default class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = {

   
  

      Images: [

        require('./Imagess/any.jpg'),
        require('./Imagess/pic2.jpeg'),
        require('./Imagess/pic3.png'),
        require('./Imagess/pic4.jpeg'),
        require('./Imagess/pic5.jpeg'),
        require('./Imagess/pic6.jpeg'),
        require('./Imagess/pic7.jpeg'),
        require('./Imagess/pic8.jpeg'),
        require('./Imagess/pic9.jpeg'),
        require('./Imagess/pic10.jpeg'),
        require('./Imagess/pic11.jpeg'),
        require('./Imagess/pic12.jpeg'),
        require('./Imagess/pic13.jpeg'),
        require('./Imagess/pic14.jpeg'),

        require('./Imagess/pic15.png')



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







      ]
    }

  }
  render() {

    
  
    return (
      <ScrollView >
        <View style={styles.container}>

          
          <Gallery images={this.state.Images}/>


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
