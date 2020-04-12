import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Header, CheckBox } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Constants } from 'expo';

import MapView from 'react-native-maps';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return(
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: 41.38879,
          longitude: 2.15899,
          latitudeDelta: 0,
          longitudeDelta: 0.1
        }}
      />
      <View style={[styles.start, {top: 30}]}>
        <Button
          icon={
            <MaterialCommunityIcons
              name="basket"
              size={20}
              color="white"
            />
          }
          title="  Que vols comprar?"
          buttonStyle={[styles.but, {width: 220}]}
          onPress={() => navigation.jumpTo('Llista de comerços')}
        />
        <Button
          buttonStyle={styles.but}
          title="Esborrar filtres"
        />
      </View>
    </View>
  )
}

function ListScreen() {
  return(
    <View style={styles.center}>
      <Text>Hello!</Text>
    </View>
  )
}

function MyTabs() {
  return(
    <Tab.Navigator tabBarOptions={{
      activeBackgroundColor: '#ebebeb',
      activeTintColor: '#7e9606'
      }}>
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color='#aecf0a' size={size} />
        )
      }}
      />
      <Tab.Screen
      name="Llista de comerços"
      component={ListScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="basket" color='#aecf0a' size={size} />
        )
      }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  start: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  end: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    width: 100
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  but: {
    backgroundColor: '#aecf0a'
  }
});
