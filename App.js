import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Options from './src/components/Options';
import { Button } from 'react-native-web';

function HomeScreen() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <DetailScreen/>
        </View>
    );
}

function DetailScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Configuration" onPress={() => navigation.navigate('Options')} />
        </View>
    );
}

const Nav = createNativeStackNavigator();

function App() {
    return (
        
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name='Home' component={HomeScreen} />
                <Nav.Screen name='Details' component={DetailScreen} />
                <Nav.Screen name='Options' component={Options} />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default App;