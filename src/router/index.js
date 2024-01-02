import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToastProvider } from 'react-native-toast-notifications';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '../redux/store';

// page
import { Provider } from 'react-redux';
import Login from '../pages/Auth/Login';
import Home from '../pages/Home';
import { CreateInventory, ListInventory, UpdateInventory } from '../pages/Inventory';
import SplashScreen from '../pages/Splashscreen';
import { CreateSupplier, ListSupplier, UpdateSupplier } from '../pages/Supplier';
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <ToastProvider>
            <Stack.Navigator>
              <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen options={{ headerShown: false }}  name="Home" component={Home} />
              <Stack.Screen header name="CreateInventory" component={CreateInventory} options={{ headerShown: false }} />
              <Stack.Screen header name="CreateSupplier" component={CreateSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="ListSupplier" component={ListSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="ListInventory" component={ListInventory} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen header name="UpdateInventory" component={UpdateInventory} options={{ headerShown: false }} />
              <Stack.Screen header name="UpdateSupplier" component={UpdateSupplier} options={{ headerShown: false }} />
            </Stack.Navigator>
          </ToastProvider>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
