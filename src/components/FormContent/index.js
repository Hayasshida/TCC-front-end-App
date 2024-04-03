import React from "react";
import { Platform, View, Image } from "react-native";
import styles from "./styles";
import Form from "../Form";


export default function FormContent(){

    const isMobile = Platform.OS === 'android' || Platform.OS === 'ios'
    const renderImage = () =>{
        if(Platform.OS === 'web'){
            return <Image source={require('../img/mie-academics-logo.png')}/>
        }
        return null
    }

    return(
        <View
            style={[styles.content, isMobile ? styles.mobile : styles.web]}
        >
            {renderImage()}
            <Form/>
        </View>
    )
}