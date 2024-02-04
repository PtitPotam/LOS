import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens/login_register';
import { Name } from './screens2/prenom';
import { ProfileScreen } from './screens4/settings';
import { Politique } from './screens8/policonf';
import { ChangePassword } from './screens9/changepasse';
import { ModifEmail } from './screens10/changeemail';
import { Compte } from './screens12/comptepage';
import { Inbox } from './screens13/message';
import { HomeScreen } from './screens11/Home';
import { SoireScreen } from './screens14/soiree'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{ headerShown : false }} name="Login" component={Login} />
        <Stack.Screen options ={{ headerShown : false }} name="Name" component={Name} />
        <Stack.Screen options ={{ headerShown : false }} name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen options ={{ headerShown : false }} name="Politique" component={Politique} />
        <Stack.Screen options ={{ headerShown : false }} name="ChangePassword" component={ChangePassword} />
        <Stack.Screen options ={{ headerShown : false }} name="ModifEmail" component={ModifEmail} />
      <Stack.Screen options ={{ headerShown : false }} name="Compte" component={Compte} />
      <Stack.Screen options ={{ headerShown : false }} name="Inbox" component={Inbox} />
      <Stack.Screen options ={{ headerShown : false }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options ={{ headerShown : false }} name="SoireScreen" component={SoireScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
  }
});

export default App;