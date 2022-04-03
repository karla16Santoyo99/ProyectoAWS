import React, {useState, useEffect} from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { create, onCreate } from "../../services/service_libros"
import { styles } from "./Libros.styles";

export default function LibrosScreen() {
  const [libro, setLibro] = useState({
    "titulo": null,
    "description": null,
    "autor": null,
    "isbn": null
  }); 

  const onTodoCreated = () =>{
    console.log("Se ha añadido un libro");
  }

  const createTodo = () =>{
    create(libro);
  }

  useEffect(() =>{
    let sub;
    (async function subscribe(){
      sub = await onCreate(onTodoCreated)
    })();
    return () =>{
      sub?.unsubscribe();
    }
  })
  return (
    <View style={styles.container}>
      <View>
        <Text  style={styles.textoTitulo}>Registra un Libro</Text>
      </View>
      <TextInput style={styles.textInput} placeholder={"Titulo"}
      onChangeText = {(text) =>{
        setLibro((current) => ({... current, titulo: text}));
      }} />
      <TextInput style={styles.textInput} placeholder={"Autor"}
      onChangeText = {(text) =>{
        setLibro((current) => ({... current, autor: text}));
      }} />
      <TextInput style={styles.textInput} placeholder={"ISBN"}
      onChangeText = {(text) =>{
        setLibro((current) => ({... current, isbn: text}));
      }} />
      <TextInput style={styles.textInput} placeholder={"Descripcion"}
      onChangeText = {(text) =>{
        setLibro((current) => ({... current, description: text}));
      }} />
      <TouchableOpacity style={styles.button} >
        <Text onPress={createTodo} >Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
