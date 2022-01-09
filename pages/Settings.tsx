import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { settingsNavigationType } from '../types/types';
import * as Contacts from 'expo-contacts';

export default function Settings() {

  const [status, setStatus] = useState("hello");
  const [contacts, setContacts] = useState<any>("hello");

  const navigation = useNavigation<settingsNavigationType>();

  useEffect(() => {
    const fetchData = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setStatus(status)
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        console.log(data)
        console.log(data[6].firstName)
        if(data[6].phoneNumbers !== undefined){
          console.log(data[6].phoneNumbers[0].number!)
        }
        // if (data.length > 0) {
        //   const contact = data[0];
        //   console.log(data)
        //   setContacts(contact)
        // }
      }
    };

    fetchData()
 }, [])

  return (
    <View style={styles.container}>
      <Text>{status}</Text>
      {/* <Text>{contacts}</Text> */}
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Home"
        color="#841584"
        accessibilityLabel="Navigate to home page"
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