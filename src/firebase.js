import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9X73-N51WgPkPxVyVPP8VyezIThnAJNg",
  authDomain: "ebay-video-game-flipper.firebaseapp.com",
  projectId: "ebay-video-game-flipper",
  storageBucket: "ebay-video-game-flipper.firebasestorage.app",
  messagingSenderId: "101594680250",
  appId: "1:101594680250:web:f211cf8b6581d135c82b83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, onAuthStateChanged, signOut };