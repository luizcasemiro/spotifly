import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from './pages/Main';
import Search from './pages/Search';
import Library from './pages/Library';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: navigation => ({
          title: 'Início',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="ios-home" size={25} color={tintColor} />
          ),
        }),
      },
      Search: {
        screen: Search,
        navigationOptions: navigation => ({
          title: 'Buscar',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="ios-search" size={25} color={tintColor} />
          ),
        }),
      },
      Library: {
        screen: Library,
        navigationOptions: navigation => ({
          title: 'Sua Biblioteca',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="ios-musical-notes" size={25} color={tintColor} />
          ),
        }),
      },
    },
    {
      tabBarOptions: {
        showLabel: true,
        activeTintColor: '#ffffff',
        inactiveTintColor: '#919297',
        style: {
          backgroundColor: '#222326',
          height: 50,
          borderTopColor: '#161719',
          borderTopWidth: 2,
        },
        tabStyle: {
          marginTop: 5,
        },
        labelStyle: {
          color: '#FFF',
          fontSize: 10,
        },
      },
    }
  )
);

const styles = StyleSheet.create({
  icon: {},
});
