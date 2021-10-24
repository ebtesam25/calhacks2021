import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';




export default function Register3({}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
    if (!fontLoaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#664bd5",  height:'12.5%'}}>
            <Text style={{fontFamily:'A', fontSize:20, marginHorizontal:'10%', color:"#FFF", alignSelf:'center', marginTop:'10%', textAlignVertical:'center'}}>Registration</Text>
            </View>
            <View style={{ marginTop: '5%'}}>
            <Svg height="50" width="100%" viewBox="0 0 50 50" style={{marginLeft:'-20%'}}>
            <Circle cx="15" cy="15" r="8" stroke="#664bd5" strokeWidth="5" fill="#664bd5" />
            <Line x1="25" y1="15" x2="50" y2="15" stroke="#664bd5" strokeWidth="5" />
            <Circle cx="60" cy="15" r="8" stroke="#664bd5" strokeWidth="5" fill="#664bd5" />
            <Line x1="70" y1="15" x2="100" y2="15" stroke="#664bd5" strokeWidth="5" />
            <Circle cx="110" cy="15" r="8" stroke="#664bd5" strokeWidth="5" fill="#664bd5" />
            <Line x1="120" y1="15" x2="150" y2="15" stroke="#664bd5" strokeWidth="5" />
            <Circle cx="160" cy="15" r="8" stroke="#664bd5" strokeWidth="5" fill="#FFF" />
            <Line x1="170" y1="15" x2="200" y2="15" stroke="#8a79d4" strokeWidth="5" />
            <Circle cx="210" cy="15" r="8" stroke="#8a79d4" strokeWidth="5" fill="#FFF" />
            </Svg>
            <Text style={{fontFamily:'A', fontSize:20, marginHorizontal:'10%', color:"#664bd5", textAlign:'center'}}>Business Identity</Text>
            <Text style={{fontFamily:'A', fontSize:13, marginHorizontal:'10%', color:'#664bd5', textAlign:'center'}}>Please enter the following information to continue.</Text>
           
              <View style={{marginTop:'.5%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                 <View style={{marginHorizontal:'10%', marginTop:'5%'}}>
             
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Business Name</Text>
                <TextInput style={{borderColor:'#664bd5', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#664bd5'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%', marginBottom:'2.5%'}}>Business Type</Text>
                <DropDownPicker
                    items={[
                        {label: 'Sole Proprietorship', value: 'n'},
                        {label: 'Limited Liability COmpany (LLC)', value: 'a'},
                        {label: 'Corporation', value: 'afam'},
                        {label: 'Nonprofit Organization', value: 'h'}

                    ]}
                    defaultValue={'Select'}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    globalTextStyle={{color:"#664bd5", fontFamily:'A'}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                   
                />
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%', marginBottom:'2.5%'}}>Industry</Text>
                <DropDownPicker
                    items={[
                        {label: 'Aerospace', value: 'n'},
                        {label: 'Agriculture', value: 'a'},
                        {label: 'Computer', value: 'afam'},
                        {label: 'Construction', value: 'h'},
                        {label: 'Education', value: 'h'},
                        {label: 'Electronics ', value: 'h'},
                        {label: 'Energy ', value: 'h'},
                        {label: 'Entertainment ', value: 'h'},
                        {label: 'Food ', value: 'h'},
                        {label: 'Healthcare ', value: 'h'},
                        {label: 'Hospitality ', value: 'h'},
                        {label: 'Manufacturing ', value: 'h'},
                        {label: 'Mining ', value: 'h'},
                        {label: 'Music ', value: 'h'},
                        {label: 'News and Media ', value: 'h'},
                        {label: 'Pharmaceutical ', value: 'h'},


                    ]}
                    defaultValue={'Select'}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    globalTextStyle={{color:"#664bd5", fontFamily:'A'}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                   
                />
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Business Tax ID Number</Text>
                <TextInput  style={{borderColor:'#664bd5', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#664bd5'}}></TextInput>
               
               </View>    
                <TouchableOpacity onPress={()=>navigation.navigate('Register4')}><Text style={{fontFamily:'A', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#664bd5', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:0, marginTop:'15%'}}>
                    NEXT
                 </Text></TouchableOpacity>

                
              </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});