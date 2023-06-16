import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { auth } from '@/firebase/firebase';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

interface Props {
    onClose: () => void;
};

const UserProfile: React.FC<Props> = ({ onClose }) => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);

    const handleSignout: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        try {
            const success = await signOut();
            if (success) {
                alert('You have signed out');
                onClose();
            }
        } catch (error: any) {
            alert(error.message);
        }
    }

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    return (
        <>
            <div
                className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-50'
                onClick={onClose}
            ></div>
            <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
                <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                    <div className='relative mx-6 w-full bg-dark-layer-1 rounded-lg shadow'>
                        <div className='flex justify-end p-2'>
                            <button
                                type='button'
                                className='bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center hover:bg-brand-orange-s hover:text-white text-white'
                                onClick={onClose}
                            >
                                <IoClose className='w-5 h-5' />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <img src="/pfp.png" alt="profile image" className="rounded-full h-20 w-20" />
                            <p className="text-lg text-brand-orange-s">
                                <span className="font-semibold">Email: </span>
                                {user?.email}
                            </p>
                            <button
                                className="py-2 mt-2 w-1/2 rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300"
                                onClick={handleSignout}
                            >
                                {loading ? "Loading..." : "Sign out"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;