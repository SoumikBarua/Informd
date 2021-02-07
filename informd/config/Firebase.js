
import firebase from 'firebase'

import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase