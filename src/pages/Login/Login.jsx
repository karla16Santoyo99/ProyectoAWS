import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput,  TouchableOpacity} from "react-native";
import { styles } from "./Login.styles";


 export default function Login({onPress}){
  
     return(
         <View style={styles.container}>
             <Text style={styles.titulo}>Books</Text>
             <Text style={styles.subtitulo} > Bienvenido</Text>
            

            
                 <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>
                    Siguiente
                </Text>
             </TouchableOpacity>
                 

            <StatusBar style="auto"/>
         </View>
     );
 }