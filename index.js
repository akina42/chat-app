/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase from 'firebase'; 

AppRegistry.registerComponent(appName, () => App);

let config = {  
    apiKey: "AIzaSyBG7En4aB6zbc3NcdEmzdK8QrlfXrQwho4",
    authDomain: "chat-app-6e366.firebaseapp.com",
    databaseURL: "https://chat-app-6e366.firebaseio.com",
    projectId: "chat-app-6e366",
    storageBucket: "chat-app-6e366.appspot.com",
    messagingSenderId: "1015195853741",
    appId: "1:1015195853741:web:1a7cc08f632b537a"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  