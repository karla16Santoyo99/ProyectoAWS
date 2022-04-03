import React, {useState} from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login"
import SettingsScreen from "./src/pages/Settings";
import HomeScreen from "./src/pages/Home";
import LibrosScreen from "./src/pages/Libros/Libros";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen
          options={{headerShown: false}}
          children={(props) =>(
            <LoginScreen {...props} onPress={() => setUser(true)} />
          )}
          name = "Login"
          />
        </Stack.Navigator>
      ) : (
      <Tab.Navigator 
      screenOptions={({route}) =>({
        tabBarIcon:({focused, color, size}) => {
          let iconName;

          if(route.name === "Home"){
            iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";

          }else if (route.name === "Settings"){
            iconName = "ios-list";
          }else if (route.name === "Libros"){
            iconName = "book";
          }
          return <Ionicons name={iconName} size={size} color={color} />

        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })} 
      >
        <Tab.Screen name=" Libros Agregados" component={HomeScreen}/>
        <Tab.Screen name="Agregar Libro" component={LibrosScreen}/>
        <Tab.Screen name="Información" component={SettingsScreen}/>
        
      </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}export default withAuthenticator(App);
