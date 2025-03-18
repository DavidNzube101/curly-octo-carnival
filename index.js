/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './src/assets/language';

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
