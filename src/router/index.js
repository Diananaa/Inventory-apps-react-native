import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToastProvider } from 'react-native-toast-notifications';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '../redux/store';
import * as Sentry from "@sentry/react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

// page
import { Provider } from 'react-redux';
import Login from '../pages/Auth/Login';
import Home from '../pages/Home';
import { CreateInventory, DetailInventory, ListInventory, UpdateInventory } from '../pages/Inventory';
import SplashScreen from '../pages/Splashscreen';
import { CreateSupplier, ListSupplier, UpdateSupplier } from '../pages/Supplier';
import { useRef } from 'react';
import Realmss from '../pages/Realmss';
import SettingsScreen from '../pages/Component/SettingsScreen';
import HomeScreen from '../pages/Component/HomeScreen';
import CustomDrawerContent from '../pages/Component/CustomDrawerContent';
import { Image, Text, TouchableOpacity } from 'react-native';
import { ICMenuBox, ICMenuBoxActive } from '../assets/mza/icon';
import { createModalStack, ModalProvider } from 'react-native-modalfy';
import MessageSentModal from '../pages/Component/modal/MessageSentModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoginScreen } from '../pages/Component';



const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const queryClient = new QueryClient()
// Sentry.init({
//   dsn: "https://c492d57b14ada1a3e639ddff27c53bf4@o4506476830064640.ingest.sentry.io/4506516703150080",
//   integrations: [
//     new Sentry.ReactNativeTracing({
//       routingInstrumentation,
//       // ... other options
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   enableAutoSessionTracking: true,
// });

const modalConfig = {
  MessageSentModal
};
const defaultOptions = {
  backBehavior: 'none', // to disable back button & outside touches
  disableFlingGesture: true, // optionally: to disable fling-to-close gesture
  backdropOpacity: 0.7,
  // animateInConfig: {
  //   easing: Easing.inOut(Easing.exp),
  //   duration: 900,
  // },
  // animateOutConfig: {
  //   easing: Easing.inOut(Easing.exp),
  //   duration: 900,
  // },
  // transitionOptions: (animatedValue) => ({
  //   transform: [
  //     {
  //       translateY: animatedValue.interpolate({
  //         inputRange: [0, 1, 2],
  //         outputRange: [screenHeight, 0, screenHeight],
  //       }),
  //     },
  //     {
  //       scale: animatedValue.interpolate({
  //         inputRange: [0, 1, 2],
  //         outputRange: [0, 1, 0.9],
  //       }),
  //     },
  //   ],
  // }),
};
const stack = createModalStack(modalConfig, defaultOptions);

const Router = () => {
  const navigation = useRef();

  return (
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <NavigationContainer
            ref={navigation}
            onReady={() => {
              routingInstrumentation.registerNavigationContainer(navigation);
            }}
          >
            <Stack.Navigator>
              <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen header name="RealmsPage" component={Realmss} options={{ headerShown: false }} />
              <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
              <Stack.Screen header name="CreateInventory" component={CreateInventory} options={{ headerShown: false }} />
              <Stack.Screen header name="CreateSupplier" component={CreateSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="ListSupplier" component={ListSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="ListInventory" component={ListInventory} options={{ headerShown: false }} />
              <Stack.Screen header name="UpdateInventory" component={UpdateInventory} options={{ headerShown: false }} />
              <Stack.Screen header name="UpdateSupplier" component={UpdateSupplier} options={{ headerShown: false }} />
              <Stack.Screen header name="DetailInventory" component={DetailInventory} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </ToastProvider>
      </QueryClientProvider > */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ModalProvider stack={stack}>
          <NavigationContainer  >
            <Drawer.Navigator
              initialRouteName="Home"
              defaultStatus='open'
              screenOptions={{
                drawerPosition: 'right',
                overlayColor: 0,
                drawerActiveTintColor: 'white',
                activeBackgroundColor: 'white',
                drawerStyle: {
                  width: 80,
                }
              }}
              drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
              <Drawer.Screen name="Home"
                options={({ navigation }) => ({
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                      <Text style={{ marginRight: 20 }}>MENU</Text>
                    </TouchableOpacity>
                  )
                })}
                component={HomeScreen} />

              <Drawer.Screen name="menu"
                options={({ navigation }) => ({
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                      <Text style={{ marginRight: 20 }}>MENU</Text>
                    </TouchableOpacity>
                  )
                })}
                component={SettingsScreen} />
              <Drawer.Screen name="login"
                options={({ navigation }) => ({
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                      <Text style={{ marginRight: 20 }}>Login</Text>
                    </TouchableOpacity>
                  )
                })}
                component={LoginScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </ModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default Router
