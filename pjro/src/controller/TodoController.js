import { collection, query, where, getDocs } from "firebase/firestore";
import { useRecoilState } from 'recoil';
import { db, firebase } from '../firebase';
import { todoListState } from '../recoil/Recoil';



// export const getAllTodos = async () =>{
//     const q = query(collection(db, "todo"));
//     let tmp=[]

//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//         tmp.push({id:doc.id , title:doc.data().title,done:doc.data().done})
        
//     });
//     return tmp
    
// }