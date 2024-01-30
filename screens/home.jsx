import React from 'react';
import { View, Text, Image } from 'react-native';

function Footer() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 20 }}>
      <View style={{ position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
        <View style={{ width: 100, height: 100, backgroundColor: '#3498db', borderRadius: 50, overflow: 'hidden' }}>
          {/* Remplacez 'your-image-url.jpg' par le chemin de votre propre image */}
          <Image source={require('.//pdp.png')} style={{ width: '100%', height: '100%' }} />
          <View style={{ position: 'absolute', width: 358, height: 0.2, backgroundColor: '#333', bottom: 120, left: '50%', transform: [{ translateX: -179 }] }} />
        </View>
      </View>
    </View>
  );
}

export default Footer;