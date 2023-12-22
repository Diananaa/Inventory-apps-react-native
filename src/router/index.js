import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToastProvider } from 'react-native-toast-notifications';
import { QueryClient, QueryClientProvider } from 'react-query';


// page
import { Provider } from 'react-redux';
import Login from '../pages/Auth/Login';
import Hello from "../pages/Hello";
import { CreateInventory, EditInventory, ListInventory } from '../pages/Inventory';
import SplashScreen from '../pages/Splashscreen';
import { CreateSupplier, ListSupplier } from '../pages/Supplier';
import { store } from '../redux/store';
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
              <Stack.Screen header name="CreateInventory" component={CreateInventory} options={{ headerShown: false }} />
              <Stack.Screen header name="CreateSupplier" component={CreateSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="ListSupplier" component={ListSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="ListInventory" component={ListInventory} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen header name="EditInventory" component={EditInventory} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={Hello} />
            </Stack.Navigator>
          </ToastProvider>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
