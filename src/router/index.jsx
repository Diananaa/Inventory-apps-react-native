import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from 'react-native-toast-notifications';

// page
import Login from '../pages/Auth/Login';
import Hello from "../pages/Hello";
import { CreateInventory, EditInventory, ListInventory } from '../pages/Inventory';
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ToastProvider>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen header name="ListInventory" component={ListInventory} options={{ headerShown: false }} />
            <Stack.Screen header name="EditInventory" component={EditInventory} options={{ headerShown: false }} />
            <Stack.Screen header name="CreateInventory" component={CreateInventory} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Hello} />
          </Stack.Navigator>
        </ToastProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
