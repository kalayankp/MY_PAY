import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const FastTagForm = () => {
    return (
        <View>
            <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
                <View style={{ flexDirection: 'row', padding: 15, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 25, height: 30, }}
                            source={require('../../../assests/images/leftArrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>RingPe</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: '10%', backgroundColor: '#E8E8E8', marginTop: '1%', }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", padding: 5, marginLeft: 12 }}>FastTag </Text>
            </View>
            <View style={{ borderWidth: 1, borderRadius: 20, width: '90%', margin: "5%", padding: 10, borderColor: 'black', marginTop: '5%', height: '18%' }}>
                <Text style={{ marginLeft: 12 }}>vachile No</Text>
                <TextInput placeholder='987hg976g6a6' style={{ color: 'black', fontSize: 20, padding: 6, marginLeft: 12 }} />
            </View>

            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity
                    style={{ height: 62, margin: 20, marginTop: "12%", borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Fetch Bill</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

export default FastTagForm