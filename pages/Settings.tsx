import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { settingsNavigationType } from '../types/types';
import * as Contacts from 'expo-contacts';
import { ContactInterface } from '../types/types';
import DropdownComponent from '../components/Dropdown';

export default function Settings() {

  const [status, setStatus] = useState("hello");
  const [contacts, setContacts] = useState<ContactInterface[]>([]);

  const navigation = useNavigation<settingsNavigationType>();

  useEffect(() => {
    const fetchContactList = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setStatus(status)
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          let filteredArray = data.reduce(function(filtered: ContactInterface[], contact) {
            if (contact.name && contact.phoneNumbers && contact.phoneNumbers[0].number) {
              const filteredContact = { id: contact.id, name: contact.name, phone: contact.phoneNumbers[0].number }
              filtered.push(filteredContact);
            }
            return filtered;
          }, []);
          setContacts(filteredArray)
        }
      }
    };
    fetchContactList()
  }, [])

  // function renderContacts() {
  //   return contacts.map(contact => <View><Text>{contact.name}</Text><Text>{contact.phone}</Text></View>)
  // }

  return (
    <View style={styles.container}>
      <Text>{status}</Text>
      <DropdownComponent contacts={contacts} />
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