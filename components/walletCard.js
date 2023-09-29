import { View, Text, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import { REACT_APP_BASE_URL } from "@env";
import { useIsFocused } from '@react-navigation/native';
const WalletCard = () => {
    const [name, setName] = useState('')
    const [userBal, setUserBal] = useState('')
    const isFocused = useIsFocused();
    useEffect(() => {
        fetch(`${REACT_APP_BASE_URL}/dashboard`)
            .then((response) => response.json())
            .then((json) => {
                let fullName = json.data.first_name
                setUserBal(json.balance[0].balance);
                setName(fullName)
                //  console.log('---', fullName)
            })
    }, [isFocused]);
    console.log(userBal);

    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderWidth: 1, borderRadius: 12, height: 190, marginTop: 10, backgroundColor: "#3f46c8", width: '98%', borderColor: "#3f46c8" }}>
                <Text style={{ color: 'white', fontSize: 30, margin: 35, fontWeight: '300', alignItems: 'center', marginTop: 34 }}>Hii {name}, </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 26, marginTop: 4, }}>Balance</Text>
                        {(userBal == null) ? (<Text style={{ color: 'white', fontSize: 30, marginLeft: 20, marginTop: 5, fontWeight: '300' }}>{'\u20B9'} 00.00  </Text>
                        ) : (<Text style={{ color: 'white', fontSize: 30, marginLeft: 20, marginTop: 5, fontWeight: '300' }}>{'\u20B9'} {userBal}</Text>)}
                    </View>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

export default WalletCard

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