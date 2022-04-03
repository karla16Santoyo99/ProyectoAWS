import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import { styles } from "./Settings.styles";
import {Authenticator} from 'aws-amplify-react-native';

export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            
            <Authenticator usernameAttributes="email">
            </Authenticator>
            
        </View>
    );

}