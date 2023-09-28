import Routes from './src/routes'
import { StatusBar } from 'expo-status-bar'
import AuthProvider from './src/contexts/auth'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#192436' style='light' translucent={false} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}
