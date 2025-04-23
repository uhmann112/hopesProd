import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";


export const addData = async (title,content) => {

        const docRef = await addDoc(collection(db, "hopes"), {
        title: title,
        content: content,
        });
        alert("Document written with title: ", docRef.id);

}



export const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "hopes"));
        let data = []
        querySnapshot.forEach((doc) => {
                data.push(doc.data())
        });
        return data
        }