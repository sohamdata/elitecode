import { auth, firestore } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const useProblemStatus = (problemId: string) => {
    const [data, setData] = useState({ liked: false, disliked: false, starred: false, solved: false });
    const [user] = useAuthState(auth);

    const docRef = user ? doc(firestore, 'users', user.uid) : null;
    const [value, loading, error] = useDocument(docRef, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    useEffect(() => {
        const getData = async () => {
            if (user && value && value.exists()) {
                const userData = value.data();
                const { likedProblems, dislikedProblems, starredProblems, solvedProblems } = userData;
                setData({
                    liked: likedProblems.includes(problemId),
                    disliked: dislikedProblems.includes(problemId),
                    starred: starredProblems.includes(problemId),
                    solved: solvedProblems.includes(problemId),
                });

            }
        };
        if (user) getData();
        return () => {
            setData({ liked: false, disliked: false, starred: false, solved: false });
        }

    }, [loading, problemId, user]);

    return { ...data, loading, error, setData, user };
}

export default useProblemStatus;
