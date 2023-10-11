import Routes from './src/routes'
import AuthProvider from './src/contexts/auth'
import { StatusBar } from 'expo-status-bar'

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
