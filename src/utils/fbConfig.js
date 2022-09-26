// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDikfmWXqTJraEoEwwNWcCZ1lxsHVhLdD8",
    authDomain: "react-ecommerce-d8e40.firebaseapp.com",
    projectId: "react-ecommerce-d8e40",
    storageBucket: "react-ecommerce-d8e40.appspot.com",
    messagingSenderId: "579435294795",
    appId: "1:579435294795:web:1117e4c57c4efbff499dce"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export async function fbFetch() {
    const fbData = await getDocs(collection(db, "item"));
    const mappedFbData = fbData.docs.map(d => ({
        id: d.id,
        ...d.data()
    }))
    return mappedFbData;
}