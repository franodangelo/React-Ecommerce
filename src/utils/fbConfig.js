// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

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

export async function fbFetch(category) {
    let q;
    if (category) {
        q = query(collection(db, "item"), where("category", "==", category))
    } else {
        q = query(collection(db, "item"));
    }
    const fbData = await getDocs(q);
    const mappedFbData = fbData.docs.map(d => ({
        id: d.id,
        ...d.data()
    }))
    return mappedFbData;
}

export async function fbFetchSingularDoc(id) {
    const docRef = doc(db, "item", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const item = {
            id: docSnap.id,
            ...docSnap.data()
        }
        return item;
    } else {
        console.log("No such document!");
    }
}