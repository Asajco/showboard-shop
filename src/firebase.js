import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAvEE8eoTCe9XV3nKGpWxW_BZ4S8yzVev4',
  authDomain: 'snowboard-shop.firebaseapp.com',
  projectId: 'snowboard-shop',
  storageBucket: 'snowboard-shop.appspot.com',
  messagingSenderId: '286458811798',
  appId: '1:286458811798:web:3fa82f8f9225ed8c91f9b7',
  measurementId: 'G-M9L7SHHKJ2',
})

export const auth = app.auth()
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
