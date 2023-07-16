import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { auth } from '@/firebase/firebase';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Router from 'next/router';

interface UserProfileProps {
    onClose: () => void;
};

const UserProfile = ({ onClose }: UserProfileProps) => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSignout: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        setShowConfirmation(true);
    }
    const handleConfirmSignout = async () => {
        try {
            const success = await signOut();
            if (success) {
                toast.success('You have signed out');
                onClose();
                Router.reload();
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
    }, [error]);

    return (
        <>
            <div
                className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-50 z-10'
                onClick={onClose}
            ></div>
            <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-20'>
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
                            <Image
                                src="/pfp.png"
                                alt="profile image"
                                width={100}
                                height={100}
                                className="hover:opacity-80 transition duration-300"
                            />
                            <p className="text-lg">
                                <span className="font-semibold text-brand-orange-s">Email: </span>
                                <span className="text-white">{user?.email}</span>
                            </p>
                            {showConfirmation ? (
                                <>
                                    <button
                                        className="py-2 mt-2 w-1/2 rounded-md bg-red-500 font-medium text-white hover:bg-white hover:text-red-500 transition duration-300"
                                        onClick={handleConfirmSignout}
                                    >
                                        Confirm Sign Out
                                    </button>
                                    <button
                                        className="py-2 mt-2 w-1/2 rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300"
                                        onClick={() => onClose()}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="py-2 mt-2 w-1/2 rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300"
                                    onClick={handleSignout}
                                >
                                    {loading ? "Loading..." : "Sign out"}
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
