import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD4dRtwDVD9isbVFSvmEc1RImU8uDKLn-Y",
  authDomain: "fivetoonedata.firebaseapp.com",
  projectId: "fivetoonedata",
  storageBucket: "fivetoonedata.appspot.com",
  messagingSenderId: "200268622291",
  appId: "1:200268622291:web:b42e3e4a71f3ed3a21e726",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
