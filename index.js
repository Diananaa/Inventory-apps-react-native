/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/router';
import {name as appName} from './app.json';
import './gesture-handler';

AppRegistry.registerComponent(appName, () => App);
