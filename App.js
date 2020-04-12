import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TextInput, Alert} from 'react-native';
import { Button, ThemeProvider, Header, CheckBox, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Constants } from 'expo';

import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import getDirections from 'react-native-google-maps-directions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

global.resultat = '';

global.coord={
  latitude: 40,
  longitude: 40
};

global.filtres = [];

global.resp;

global.i

global.llista = [];

function Funciodificil() {
  for(global.i=0; global.i<global.resp.lenght; ++global.i){
    global.llista.push({
      latitude: global.resp[i].coords.latitude,
      longitude: global.resp[i].coords.longitude
    },);
  }
}

class gmapsDirections extends Component {

  constructor(){
    super();
  }

  handleGetDirections = () => {
    const data = {
      source: {
        latitude: global.coord.latitude,
        longitude: global.coord.longitude
      },
      destination: {
        latitude: 41.385163,
        longitude: 2.165262
      },

      waypoints: [
        {
          latitude: 41.388548,
          longitude: 2.167401
        }
      ]

    }
    getDirections(data)
  }
}

class LoginScreen extends Component{
  constructor(props) {
   
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }

  UserLoginFunction() {
    const {
      navigation,
      navigate
    } = this.props

    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
 

fetch('https://albertboschrovira.com/hackovid/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.text())
      .then((responseJson) => {
        if (responseJson=='"Benvigut!"') {
          navigation.navigate('Main') ;
          }
          else{
            Alert.alert(responseJson);
          }
              
        }).catch((error) => {
          console.error(error);
        });
  }
 
  render() {

    const {
      navigation,
      navigate
    } = this.props
    return (
 
<View style={styles.MainContainer}>

        <Text style= {{ fontSize: 20, color: "#7e9606", textAlign: 'center', marginBottom: 15 }}>Inicia sessió</Text>
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Introdueix el teu email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Introdueix la contrasenya"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}

          secureTextEntry={true}
        />
        <Button buttonStyle={styles.but}
        title="Fes click per iniciar sessió" 
        onPress={() => this.UserLoginFunction()}
        color="#2196F3" />

</View>
            
    );
  }

}

class RegisterScreen extends Component {
 
  constructor(props) {
   
      super(props)
   
      this.state = {
   
        UserName: '',
        UserEmail: '',
        UserPassword: ''
   
      }
   
    }

    
   
    UserRegistrationFunction() {
   
   
   const { UserName }  = this.state ;
   const { UserEmail }  = this.state ;
   const { UserPassword }  = this.state ;
   
   
   
  fetch('https://albertboschrovira.com/hackovid/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      name: UserName,
   
      email: UserEmail,
   
      password: UserPassword
   
    })
   
  }).then((response) => response.text())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
   
        }).catch((error) => {
          console.error(error);
        });
   
   
    }
   
    render() {

      const {
        navigation,
        navigate
      } = this.props
  
      return (
   
  <View style={styles.MainContainer}>
  
          <Text style= {{ fontSize: 20, color: "#7e9606", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
    
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder="Enter User Name"
   
            onChangeText={UserName => this.setState({UserName})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder="Enter User Email"
   
            onChangeText={UserEmail => this.setState({UserEmail})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder="Enter User Password"
   
            onChangeText={UserPassword => this.setState({UserPassword})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
  
            secureTextEntry={true}
          />
   
          <Button buttonStyle={styles.but}
          title="Click Here To Register" 
          onPress={() => this.UserRegistrationFunction()}
          color="#2196F3" />

  </View>
              
      );
    }
  }

class HomeScreen extends Component {

  constructor() {
    super();
    this.state={
      x: {
        latitude: 41.38879,
        longitude: 2.15899,
        latitudeDelta: 0,
        longitudeDelta: 0.1
      }
    }
  }

  render(){

    const {
      navigation,
      jumpTo
    } = this.props

    return(
      alert('Arrossega el marcador al punt d\'inici de la ruta'),
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
        >
          <Marker draggable
            coordinate={this.state.x}
            onDragEnd={(e) => global.coord = e.nativeEvent.coordinate }
          />
        </MapView>
        <View style={[styles.start, {top: 10}]}>
          <Button
            icon={
              <MaterialCommunityIcons
                name="basket"
                size={20}
                color="white"
              />
            }
            title="  Què vols comprar?"
            buttonStyle={[styles.but, {width: 370, height: 50}]}
            onPress={() => navigation.jumpTo('Llista de comerços')}
          />
        </View>
      </View>
    )
  }
}

class MyTabs extends Component {
  render(){
    return(
      <Tab.Navigator tabBarOptions={{
        activeBackgroundColor: '#aecf0a',
        inactiveBackgroundColor: '#b0b0b0',
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff'
        }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color='#ffffff' size={size} />
          )
        }}
        />
        <Tab.Screen
        name="Llista de comerços"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color='#ffffff' size={size} />
          )
        }}
        />
        <Tab.Screen
        name="Recollida d'aliments"
        component={DonaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color='#ffffff' size={size} />
          )
        }}
        />
      </Tab.Navigator>
    );
  }
}

class DonaScreen extends Component {
  render() {
    return(
      <View>
         <SectionList style={{ top: -1 }}
          sections={[
            {title: 'Aprop teu:', data: [
              'Producte: *****\nBotiga: *****',
              'Producte: *****\nBotiga: *****',
              'Producte: *****\nBotiga: *****',
            ]},
            {title: 'Tots:', data: [
              'Producte: *****\nBotiga: *****',
              'Producte: *****\nBotiga: *****',
              'Producte: *****\nBotiga: *****',
              'Producte: *****\nBotiga: *****',
              'Producte: *****\nBotiga: *****',
            ]}
          ]}
          renderItem={ ({item}) =>
          <View style={styles.list}>
            <Text style={styles.item}>{item}</Text>
            <Button
              buttonStyle={[styles.but, {top: 10, height: 50, width: 100}]}
              title='Reservar'
              onPress={() => alert('Producte reservat!\nTens 1h per a recollir el producte')}
            />
          </View>
          }
          renderSectionHeader={ ({section}) => <Text style={styles.seched}>{section.title}</Text> }
          keyExtractor={ (item, index) => index }
        />
      </View>
    );
  }
}

class SignIn extends Component {
  render(){
    return(
      <Tab.Navigator tabBarOptions={{
        activeBackgroundColor: '#ebebeb',
        activeTintColor: '#7e9606'
        }}>
        <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color='#aecf0a' size={size} />
          )
        }}
        />
        <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" color='#aecf0a' size={size} />
          )
        }}
        />
      </Tab.Navigator>
    );
  }
}

class ListScreen extends Component {

  constructor() {
    super();
    obj = new gmapsDirections();
    this.state={
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false
    }
  }

  direccions = () => {
    if(this.state.one) global.filtres.push('Fruiteries i verduleries');
    if(this.state.two) global.filtres.push('Fleques i pastisseries');
    if(this.state.three) global.filtres.push('Supermercats');
    if(this.state.four) global.filtres.push('Herbolaris');
    if(this.state.five) global.filtres.push('Peixateries');
    if(this.state.six) global.filtres.push('Menjar preparat');
    if(this.state.seven) global.filtres.push('Carnisseries');

      const { latitude }  = this.state;
      const { longitude }  = this.state;
      const { activities } = this.state;
   
  
      fetch('https://local-market-vid.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          latitude: global.coord.latitude,
       
          longitude: global.coord.longitude,
  
          activities: global.filtres
       
        })
       
      }).then((response) => response.json())
            .then((responseJson) => {
      // Showing response message coming from server after inserting records.
                global.resp=responseJson;
            }).catch((error) => {
              console.error(error);
            });

    //Funciodificil();

    obj.handleGetDirections();
  }

  render() {

    const {
      navigation,
      jumpTo
    } = this.props

    return(
      <View style={[styles.center, {top: 0}]}>
          <CheckBox
            checkedColor='#aecf0a'
            title='Fruiteries i verduleries'
            textStyle={styles.check}
            checked={this.state.one}
            onPress={() => this.setState({one: !this.state.one})}
          />
          <CheckBox
            checkedColor='#aecf0a'
            title='Fleques i pastisseries'
            textStyle={styles.check}
            checked={this.state.two}
            onPress={() => this.setState({two: !this.state.two})}
          />
          <CheckBox
            checkedColor='#aecf0a'
            title='Supermercats'
            textStyle={styles.check}
            checked={this.state.three}
            onPress={() => this.setState({three: !this.state.three})}
          />
          <CheckBox
            checkedColor='#aecf0a'
            title='Herbolaris'
            textStyle={styles.check}
            checked={this.state.four}
            onPress={() => this.setState({four: !this.state.four})}
          />
          <CheckBox
            checkedColor='#aecf0a'
            title='Peixateries'
            textStyle={styles.check}
            checked={this.state.five}
            onPress={() => this.setState({five: !this.state.five})}
          />
          <CheckBox
            checkedColor='#aecf0a'
            title='Menjar preparat'
            textStyle={styles.check}
            checked={this.state.six}
            onPress={() => this.setState({six: !this.state.six})}
          />
          <CheckBox
            checkedColor='#aecf0a'
            title='Carnisseries'
            textStyle={styles.check}
            checked={this.state.seven}
            onPress={() => this.setState({seven: !this.state.seven})}
          />
          <View style={styles.start}>
            <Button
              buttonStyle={[styles.but, {width: 220, height: 51}]}
              title="Crear ruta"
              onPress={this.direccions}
            />
            <Text>     </Text>
            <Button
              buttonStyle={[styles.but, {height: 51}]}
              title="Esborrar filtres"
              onPress={() => this.setState({
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false
              })}
            />
          </View>
        </View>
    )
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name ="SignIn"
          component = {SignIn}
          options={{
            headerTitle: props => <Icon name='people' color='#ffffff' />,
            headerStyle: {
              backgroundColor: '#aecf0a',
            },
          }}
        />
        <Stack.Screen
          name = "Main"
          component = {MyTabs}
          options={{
            headerTitle: 'Benvingut/da',
            headerStyle: {
              backgroundColor: '#aecf0a',
            },
            headerTintColor: '#ffffff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  },
  check: {
    top: 10,
    width: 300,
    height: 51,
    fontSize: 20,
    fontWeight: 'normal',
    color: '#7e9606'
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    color: '#7e9606',
    padding: 10,
    fontSize: 20,
    height: 100
  },
  seched: {
    backgroundColor: '#c0c0c0',
    color: '#ffffff',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  MainContainer: {
    justifyContent: 'center',
    flex:1,
    margin: 10
  },
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: '#aecf0a', 
     
    // Set border Radius.
    borderRadius: 5 ,
     
    // Set border Radius.
    //borderRadius: 10 ,
  }
});