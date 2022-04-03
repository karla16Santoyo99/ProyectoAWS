import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity} from "react-native";
import { styles } from "./Home.styles";
import { list } from "../../services/service_libros"

export default function HomeScreen({onPress}){
    const [libros, setLibros] = useState([]);

    async function listar(){
        const onBooksFetched = await list();
        if(onBooksFetched) setLibros(onBooksFetched);
    }
    useEffect(()=>{
        listar();
    })
    return(
        
        <View style={styles.container}>
            <Text style={styles.textoTitulo}>
                Mis libros agregados
            </Text>
            {libros &&
                libros.map((libro, key) => (
                   <TouchableOpacity style ={styles.card}>
                    <View key={key}> 
                    <Text>{libro.titulo}</Text>
                    <Text>{libro.autor}</Text>
                    <Text>{libro.isbn}</Text>
                    <Text>{libro.descripcion}</Text>
                    </View>
                    </TouchableOpacity>
                    ))}
         
        </View>
    )
}