import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from './src/components/Appbar';
import { CreateMemoButton } from './src/components/CreateMemoButton';
import { MemoList } from './src/components/MemoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      {/* <MemoList /> */}
      <CreateMemoButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
