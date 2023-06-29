import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const WallerCard = ({ navigation,datas }) => {
    const register = () => {

       navigation.navigate('AddMoneyScreen')
    }
    return (
        <View style={{}}>
        <View style={{ borderWidth: 1, borderRadius: 12, height: 209, marginTop: 10, backgroundColor: "#3f46c8", width: '100%',borderColor:"#3f46c8" }}>
            <Text style={{ color: 'white', fontSize: 30, margin: 35, fontWeight: 'bold', alignItems: 'center', marginTop: 34 }}>Hi User , </Text>
            <View style={{ flexDirection: 'row' }}>
               <View style={{flexDirection:'row'}}>
                    <Text style={{ color: 'white', fontSize: 26, marginLeft: 65, marginTop: 0, }}>  Balance</Text>
                    <Text style={{ color: 'white', fontSize: 30, marginLeft: 20, marginTop: -2 }}>{'\u20B9'} 20000{datas}</Text>
                </View>
            </View>
        </View>
        <View>
        </View>
       
    </View>
    )
}

export default WallerCard

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 221,
        shadowRadius: 11,
        borderBottomLeftRadius: 222,
    },
}
)