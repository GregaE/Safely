import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { homeNavigationType } from '../types/types';

export default function Home() {

  const navigation = useNavigation<homeNavigationType>();

  function shareLocation() {
    return
  }

  function callEmergency() {
    return
  }

  function ringAlarm() {
    return
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Settings"
        color="#841584"
        accessibilityLabel="Navigate to settings"
      />
      <Button
        onPress={shareLocation}
        title="Share Location"
        color="#841584"
        accessibilityLabel="Share location with emergency contact"
      />
      <Button
        onPress={callEmergency}
        title="Emergency Call"
        color="#841584"
        accessibilityLabel="Call authorities"
      />
      <Button
        onPress={ringAlarm}
        title="Alarm"
        color="#841584"
        accessibilityLabel="Ring alarm"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});