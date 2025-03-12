import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAg6NJk-n6VJR5lvJlBmBxyvaa4ZrW7VKs',
  authDomain: 'budget-buddy-8fb8d.firebaseapp.com',
  projectId: 'budget-buddy-8fb8d',
  // storageBucket: 'budget-buddy-8fb8d.appspot.com',
  storageBucket: 'budget-buddy-8fb8d.firebasestorage.app',
  messagingSenderId: '402602002575',
  appId: '1:402602002575:web:745617e8245833a4be88fa',
  measurementId: 'G-8BLNBWPQJZ',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
