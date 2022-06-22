import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Inbox from '../pages/Inbox';
import Profile from '../pages/Profile';
import New from '../pages/New';
import Button from '../components/Button'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopColor: 'rgba(255, 255, 255, 0.3)'
          },
          tabBarActiveTintColor: '#fff'
        }}
      >
        <Tab.Screen
          name='Início'
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => <EntypoIcons name='home' size={size} color={color} />,
            headerShown: false
          }}

        />
        <Tab.Screen
          name='Descobrir'
          component={Discover}
          options={{
            tabBarIcon: ({ size, color }) => <FeatherIcons name='search' size={size} color={color} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name='New'
          component={New}
          options={{
            title: '',
            tabBarIcon: () => (<Button />),
            headerShown: false
          }}
        />
        <Tab.Screen
          name='Caixa de entrada'
          component={Inbox}
          options={{
            tabBarIcon: ({ size, color }) => <EntypoIcons name='chat' size={size} color={color} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name='Eu'
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <AntIcons name='user' size={size} color={color} />,
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};