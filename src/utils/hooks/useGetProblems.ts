import { useState, useEffect } from "react";
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from "@/firebase/firebase";
import { ProblemDoc } from "../types/problem";

const useGetProblems = () => {
    const problemsCollectionRef = collection(firestore, 'problems');
    const problemsQuery = query(problemsCollectionRef, orderBy('order', 'asc'));
    const [value, loading, error] = useCollection(problemsQuery, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    const [probsArray, setProbsArray] = useState<ProblemDoc[]>([]);

    useEffect(() => {
        if (value) {
            const newArray: ProblemDoc[] = [];
            value.forEach((doc) => {
                newArray.push(doc.data() as ProblemDoc);
            });
            setProbsArray(newArray);
        }
    }, [loading]);

    return { probsArray, loading, error };
};

export default useGetProblems;
