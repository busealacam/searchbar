import { StyleSheet, Text, TouchableHighlight, ScrollView } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchBar } from '@rneui/themed';
import React from 'react';
import { Avatar, ListItem } from '@rneui/base';


export default function App() {
  const [value, setValue] = React.useState("");
  const list_user = require("./users.json")
    
    return (
      <SafeAreaProvider>
        <HeaderRNE 
          leftComponent={{
            icon: 'menu',
            color: '#fff',
          }}
          centerComponent={{text: "Apprenants de La Manu", style: styles.heading}}/>
        <SearchBar
          platform="default"
          placeholder='type here'
          lightTheme
          onChangeText={newVal => setValue(newVal)}
          value={value}
        />
        <ScrollView>
          {
            list_user.map((user, index) => (
              <ListItem
                Component={TouchableHighlight}
                key={index}
              >
                <Avatar source={{ uri: user.img}} size="medium" rounded containerStyle={{ backgroundColor: "#BDBDBD" }}/>
                <ListItem.Content>
                  <ListItem.Title>
                    <Text> {user.name} </Text>
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    <Text>{user.desc}</Text>
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron size={30} color={"grey"}/>
              </ListItem>
            ))
            
          }
        </ScrollView>  
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
