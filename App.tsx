import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Src/Navigation/AppNavigation';
import store from './Features/Slices/store';
import { Provider } from 'react-redux';



export default function App() {
  return (
    <Provider store = {store}>
      <AppNavigation />
    </Provider>
    // <ListCard/>
    
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
