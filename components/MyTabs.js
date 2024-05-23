import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products';
import * as React from 'react';
import AddProduct from './AddProduct';
import ButtonComponent from './ButtonComponent';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={
      {tabBarActiveTintColor:"purple",
      tabBarInactiveTintColor:"blue"}
    }>
      <Tab.Screen name="Produits" component={Products} 
      options={{
      tabBarLabel:"products", 
      tabBarIcon:({color})=>(<Ionicons name="person" size={20} color={color}/>),
      tabBarBadge:"0"
      }}/>

      <Tab.Screen name="Valider" component={ButtonComponent}
      options={{
        tabBarIcon:({color})=>(<Ionicons name="card" size={20} color={color}/>),
      }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs