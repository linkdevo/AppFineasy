import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from 'react-native-vector-icons';
import LottieView from "lottie-react-native";

export default function CheckIN() {
    let animation = React.createRef()

    function startAnimation() {
        animation.current.play()
    }

    return (
    <View style={style.container}>
        <TouchableOpacity onPress={startAnimation}>
          <Feather name="play" size={60} color="black" />
        </TouchableOpacity>

        <LottieView
          source={require('../../assets/check.json')}
          style={{
            width: 200,
            height: 200,
          }}
          loop={false}
          ref={animation}
          />
        <StatusBar style="auto" />
    </View>
    )
    
}