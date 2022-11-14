import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Feather } from '@expo/vector-icons';

const Account = () => {
    return (
        <SafeAreaView className=" mt-8">
            <View style={styles.horizon}>
                <View className="flex-row items-center">
                    <Image source={require('../../../assets/images/user_1.png')} />
                    <View className="ml-4">
                        <Text style={styles.bold}>Afsar Hossen</Text>
                        <Text style={styles.regula} className="text-gray-400">email@email.com</Text>
                    </View>
                </View>
            </View>
            <View className="border-t mt-8 border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_1.png')} />
                    <Text style={styles.semi} className="ml-5">Order</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_2.png')} />
                    <Text style={styles.semi} className="ml-5">My Details</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_3.png')} />
                    <Text style={styles.semi} className="ml-5">Delivery Address</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_4.png')} />
                    <Text style={styles.semi} className="ml-5">Payment Methods</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_5.png')} />
                    <Text style={styles.semi} className="ml-5">Promo Cord</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_6.png')} />
                    <Text style={styles.semi} className="ml-5">Notifications </Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_7.png')} />
                    <Text style={styles.semi} className="ml-5">Help</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </View>
            <View className="border-gray-300 border-b flex-row justify-between">
                <TouchableOpacity style={styles.horizon} className="flex-row items-center h-14">
                    <Image source={require('../../../assets/images/icon_8.png')} />
                    <Text style={styles.semi} className="ml-5">About</Text>
                </TouchableOpacity>
                <View className=" justify-center items-center">
                    <Feather name="chevron-right" size={24} color="black" />
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
    horizon: {
        // flex: 1,
        marginHorizontal: 10
    },
    flex: {
        flex: 1,
    },
    bold: {
        fontFamily: 'Gilroy-Semi',
        fontSize: 18,
        fontWeight: '600'
    },
    semi: {
        fontFamily: 'Gilroy-Semi'
    }
})