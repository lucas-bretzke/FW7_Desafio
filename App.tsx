import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='black' style='light' translucent={true} />
      <Routes />
    </>
  );
}