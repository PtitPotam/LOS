import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens/login_register';
import { Name } from './screens2/prenom';
import { Blaze } from './screens3/nom';
import { ProfileScreen } from './screens4/settings';
import { EmailScreen } from './screens5/email';
import { Passe } from './screens6/mdp';
import { ConfirmPasse } from './screens7/configmdp';
import { Politique } from './screens8/policonf';
import { ChangePassword } from './screens9/changepasse';
import { ModifEmail } from './screens10/changeemail';
import { Compte } from './screens12/comptepage';
import { Inbox } from './screens13/message';
import { HomeScreen } from './screens11/Home';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options ={{ headerShown : false }} name="Inbox" component={Inbox} />
        <Stack.Screen options ={{ headerShown : false }} name="ConfirmPasse" component={ConfirmPasse} />
        <Stack.Screen options ={{ headerShown : false }} name="Login" component={Login} />
        <Stack.Screen options ={{ headerShown : false }} name="Name" component={Name} />
        <Stack.Screen options ={{ headerShown : false }} name="Blaze" component={Blaze} />
        <Stack.Screen options ={{ headerShown : false }} name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen options ={{ headerShown : false }} name="EmailScreen" component={EmailScreen} />
        <Stack.Screen options ={{ headerShown : false }} name="Passe" component={Passe} />
        <Stack.Screen options ={{ headerShown : false }} name="Politique" component={Politique} />
        <Stack.Screen options ={{ headerShown : false }} name="ChangePassword" component={ChangePassword} />
        <Stack.Screen options ={{ headerShown : false }} name="ModifEmail" component={ModifEmail} />
      <Stack.Screen options ={{ headerShown : false }} name="Compte" component={Compte} />
      <Stack.Screen options ={{ headerShown : false }} name="HhomeScreen" component={HomeScreen} />
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