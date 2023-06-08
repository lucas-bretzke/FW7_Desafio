import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#192436' style='light' translucent={false} />
      <Routes />
    </>
  );
}