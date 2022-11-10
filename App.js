import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Alert, StyleSheet, Platform, Button } from 'react-native';


// View -> UI View
export default function App() {
  const handlePress = () => {
    console.log("text pressed")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button color="grey" title='Click Me' 
      onPress={()=>Alert.alert('Oops', 'Button Clicked',[
        {text: 'Go back' , onPress: () => console.log('sure go back')},
        {text: 'Go ahead', onPress: () => console.log('lets gooo')}
      ])}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
