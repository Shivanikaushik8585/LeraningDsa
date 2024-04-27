
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


	const firebaseConfig = {
		apiKey: "AIzaSyCeD47Z6aC39z3UHCXQNkDs2opIxFkMwq0",
		authDomain: "leetcode-2563d.firebaseapp.com",
		projectId: "leetcode-2563d",
		storageBucket: "leetcode-2563d.appspot.com",
		messagingSenderId: "1090468864144",
		appId: "1:1090468864144:web:ba9c23415d5f594ca17815"
	  };
	  

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };