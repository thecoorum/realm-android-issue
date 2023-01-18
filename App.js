import 'expo-dev-client'

import App from './src/App'
import { RealmProvider } from './src/db'

const Root = () => (
  <RealmProvider>
    <App />
  </RealmProvider>
)

export default Root
