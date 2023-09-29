import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
const WelcomeScreen = ({ navigation }) => {

    const [active, setActive] = useState(false);

    const [activeSignup, setActiveSignUp] = useState(false);

    // const handleClick = () => {
    //     setActive(!active);
    // };

    // const handleClickSignUp = () => {
    //     setActiveSignUp(!activeSignup)
    // };
  
    return (
        <View style={{ height: '100%' }}>

            <LinearGradient
                colors={['#3746cb', '#03f0ff',]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                style={styles.linearGradient}>

                <Image
                    style={styles.logo}
                    source={require('../assests/icons/ringpeIcon.png')}
                />

                <Text style={{ fontSize: 30, color: 'white', textAlign: 'center', marginTop: 60,fontWeight:'bold' }}>Welcome To RingPe</Text>
                <View style={{ marginTop: 220 }}>


                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreens')}
                        style={[styles.button, { backgroundColor: "#2596be", }]}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('MobileNoScreen')}
                        style={[styles.button, { backgroundColor: "#147c84", }]}>
                        <Text style={[styles.buttonText, { color: 'black' }]}>SIGN UP</Text>
                    </TouchableOpacity>


                </View>
            </LinearGradient>
        </View>
    )
}
export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        marginTop: 52,
        width: 140,
        height: 120,
        marginLeft: -2,
      },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%',
    },
    button: {
        borderWidth: 2,
        borderRadius: 22,
        borderColor: '#2596be',
        height: 48,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontWeight: '12',

    }
});