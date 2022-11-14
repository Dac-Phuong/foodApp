import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'

const Account = () => {
    return (
        <SafeAreaView  className=" mt-8">
            <View style={styles.horizon}>
                <View className="flex-row items-center">
                    <Image source={require('../../../assets/images/user_1.png')} />
                    <View className="ml-4">
                        <Text style={styles.bold}>Admin</Text>
                        <Text style={styles.regula}>email@email.com</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Account

const styles = StyleSheet.create({
    regula: {
        fontFamily: 'Gilroy-Regula',
        fontSize: 18
    },
    horizon:{
        // flex: 1,
        marginHorizontal: 10
    },
    flex:{
        flex: 1,
    },
    bold: {
        fontFamily: 'Gilroy-Semi',
        fontSize: 18
    }
})