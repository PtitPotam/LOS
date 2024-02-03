import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { Navbar } from  './screens2/nav';
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


export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>

    /*<View style={styles.container}>
      <Name />
    </View>

    /*<View style={styles.container}>
    <Blaze />
    </View>

    /*<View style={styles.container}>
     <ProfileScreen />
    </View>

    <View style={styles.container}>
    <EmailScreen />
    </View>

    /*<View style={styles.container}>
    <Passe />
    </View>

    /*<View style={styles.container}>
    <ConfirmPasse />
    </View>

   /*<View style={styles.container}>
    <Politique />
    </View>

    /*<View style={styles.container}>
    <ChangePassword />
    </View>

    /*<View style={styles.container}>
      <ModifEmail />
    </View>*/

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
  }
});
