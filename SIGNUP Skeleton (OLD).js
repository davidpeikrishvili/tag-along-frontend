
import React from 'react';
import { View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Sign Up</Text>
            </View>
            <View style = {styles.footer}>
                <Text style ={styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <TextInput
                        placeholder='Your Email'
                        style = {styles.Input}
                        autoCapitalize="none"
                    />
                </View>
                <Text style = {styles.text_footer}>Password</Text>
                <View style = {styles.action}>
                <TextInput
                        placeholder='Password'
                        style = {styles.Input}
                        secureTextEntry
                    />
                </View>
                
                <Text style = {styles.text_footer}>Repeat Password</Text>
                <View style = {styles.action}>
                <TextInput
                        placeholder='Repeat Password'
                        style = {styles.Input}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style = {[styles.signIn,{borderColor:'#009387',borderWidth:3, marginTop: 15}]}>

                <Text style = {[styles.textSign, {color: '#000'}]}>Sign Up </Text>

                </TouchableOpacity>






            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   
    //Color of the top part
    container:{
        flex:1,
        backgroundColor:'rgba(128,0,128,.5)'
    },
    header:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal:150,
        paddingBottom:.5,
    },
    footer: {
        flex:3,
        backgroundColor:'rgba(220,220,220,.9)',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    //Sign Up Text For the Top Part
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    //Text For the Footer Part
    text_footer: {
        color: '#05375a',
        fontSize: 20
    },
    //Lines between the text
    action: {
        flexDirection: 'row',
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(220,220,220,1)',
        paddingBottom: 2
    },
    //Change Color, etc... of input text
    Input: {
        flex: 1,
        marginTop:3,
        paddingLeft: 13,
        color: 'rgb(0,0,0)',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
   //Change the settings of the Login / Register Buttons
   userButton:{
    backgroundColor:'rgba(0,205,255,.7)',
    padding:12,
    width:'40%'
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}



});
