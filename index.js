/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase from 'firebase'; 

AppRegistry.registerComponent(appName, () => App);

let config = {  
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  