import React from "react";
import {View,TouchableOpacity,StyleSheet,Image,Text, SafeAreaView} from 'react-native';
import style from './style'

const PublicView =({navigation})=>{
   return(
    <SafeAreaView style={{flex: 1,backgroundColor:'#ccc'}}>
    <View>
        <Text>Login</Text>
    </View>
    </SafeAreaView>
   )
}
export default PublicView