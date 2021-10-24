import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { Modal, Portal, Provider } from 'react-native-paper';





export default function Home() {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
    
    

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
          <Provider>
                <Portal>
          <View style={{marginTop:'10%', flexDirection:'row', marginHorizontal:'7.5%', justifyContent:'space-between', marginBottom:'5%'}}>
            <Icon name="menu" type="feather" color="#000" size={30} style={{alignSelf:'flex-start'}}></Icon>
            <Text style={{fontFamily:'A', fontSize:20, marginTop:'1.5%', color:"#000"}}>Home</Text>
            <Icon name="settings" type="feather" color="#000" size={25} style={{alignSelf:'flex-end',}}></Icon>
          </View>
            <View style={{ alignSelf:'center', marginTop:'2.5%', backgroundColor:'#664bd5', width:'90%', borderRadius:10 }}>
              <ImageBackground source={require('../assets/bg.jpg')} style={{width:'100%'}} imageStyle={{opacity:0.08}}>
              <View style={{marginHorizontal:'5%', marginTop:'7.5%', marginBottom:'6.5%'}}>
                <Image source={require('../assets/chef.jpg')} style={{width:150, height:150, resizeMode:'cover', borderRadius:200, alignSelf:'center'}}></Image>
                <Text style={{fontFamily:'A', fontSize:25, color:'#FFF', textAlign:'left', marginLeft:'5%',marginTop:'5%', alignSelf:'center'}}>Maria Rodriguez</Text>
                <Text style={{fontFamily:'A', fontSize:15, color:'#FFF', textAlign:'left', marginLeft:'5%', alignSelf:'center'}}>Orlando, FL</Text>
              </View>
           </ImageBackground></View>
           
                <View>
                <Text style={{fontFamily:'A', fontSize:19, marginTop:'5%', textAlign:'center'}}>FairHouseCoin generated</Text>
              
                </View>
                
                  <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor:'#FFF', paddingBottom:'5%', width:'90%', alignSelf:'center', borderRadius:10}}>
                    <Text style={{fontFamily:'A', fontSize:17, marginHorizontal:'10%', marginTop:'5%'}}>Component Score</Text>
                    <Text style={{fontFamily:'A', fontSize:17, marginHorizontal:'10%',color:'#664bd5'}}>Florida Credit Union</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#664bd5'}}>Gender Bias Score: 76%</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#664bd5'}}>Ethnicity Bias Score: 80%</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#664bd5'}}>Geolocation Score: 100%</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#664bd5'}}>Age Score: 87%</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#664bd5'}}>Credit History Score: 82%</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://flcu.org/Business?referral=MARIALENDSBA01');}}><View style={{backgroundColor:'#664bd5', width:'80%', alignSelf:'center', borderRadius:10, height:35, marginTop:'5%'}}>
                      <Text style={{textAlign:'center', color:'#FFF', fontFamily:'A', textAlignVertical:'center', marginTop:'2.5%'}}>Apply for a loan</Text></View></TouchableOpacity>
                  </Modal>
                </Portal>
                
              </Provider>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF',
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});