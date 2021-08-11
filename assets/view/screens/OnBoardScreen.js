import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/color';
import {useFonts} from 'expo-font';
import Lacquer from '../../../assets/consts/fonts/fonts/Lacquer-Regular.ttf';
import { PrimaryButton } from '../../components/Button';

const OnBoardScreen = ({navigation}) => {

    const [loaded]=useFonts({Lacquer})

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.nude11 }}>
            <View style={{ height: 400 }}>
                <Image
                    style={{
                        width: '100%',
                        resizeMode: 'contain',
                        top: -900,
                    }}
                    source={require('../../../assets/assets/IceCubeGoals.jpg')}
                />
            </View>
            <View style={style.textContainer}>
                <View>
                    <Text style={{ fontSize: 40, textAlign: 'center', marginTop: -140, fontFamily: 'Lacquer' }}>
                        street☯gypsy
                    </Text>
                    <Text
                     style={{
                        marginTop: -15,
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Lacquer',
                    }}>
                        for the unique and curious
                    </Text>
                </View>
                <View style={style.indicatorContainer}>
                    <View style={style.currentIndicator} />
                    <View style={style.indicator} />
                    <View style={style.indicator} />
                </View>
                <PrimaryButton
                 onPress={() => navigation.navigate('Home')}
                 title="Get Started"
                 />
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: "space-between",
        paddingBottom: 50,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.nude12,
        marginHorizontal: 10,
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.nude12,
        marginHorizontal: 10,
    },

});

export default OnBoardScreen;
