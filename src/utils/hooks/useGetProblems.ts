// import { firestore } from "@/firebase/firebase";
// import { collection, query, getDocs, orderBy } from "firebase/firestore";

// const useGetProblems = async () => {
//     const q = query(collection(firestore, "problems"), orderBy("order", "asc"));

//     const querySnapshot = await getDocs(q);
//     const probsArray: any[] = [];
//     querySnapshot.forEach((doc) => {
//         // console.log(doc.id, " => ", doc.data());
//         probsArray.push({ id: doc.id, ...doc.data() });
//     });
//     return probsArray;
// };

// export default useGetProblems;
