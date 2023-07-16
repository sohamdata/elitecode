import { useState, useEffect } from "react";
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { firestore } from "@/firebase/firebase";
import { ProblemDoc } from "../types/problem";

const useGetProblemById = (pid: string) => {
    const docRef = doc(firestore, 'problems', pid);

    const [value, loading, error] = useDocument(docRef, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    const [currProblem, setCurrProblem] = useState<ProblemDoc | null>();

    useEffect(() => {
        if (!loading && !error && value) {
            if (value.exists()) {
                setCurrProblem(value.data() as ProblemDoc);
            } else {
                console.log('No such document!');
                setCurrProblem(null);
            }
        }
    }, [loading]);

    return { currProblem, loading, error, setCurrProblem };
};

export default useGetProblemById;
