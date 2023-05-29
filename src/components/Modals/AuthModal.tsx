import { IoClose } from 'react-icons/io5';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import { authModalState } from '@/atoms/authModalAtom';
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';

interface AuthModalProps { };

const AuthModal: React.FC<AuthModalProps> = () => {
    const authModalCurr = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, isOpen: false, mode: "login" }));
    }

    console.log(authModalCurr);
    console.log(setAuthModalState);

    return (
        <>
            <div
                className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-50'
                onClick={handleClick}
            ></div>
            <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
                <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                    <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
                        <div className='flex justify-end p-2'>
                            <button
                                type='button'
                                className='bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center hover:bg-brand-orange-s hover:text-white text-white'
                                onClick={handleClick}
                            >
                                <IoClose className='w-5 h-5' />
                            </button>
                        </div>
                        {authModalCurr.mode === "login" ? <Login /> : authModalCurr.mode === "signup" ? <Signup /> : <ForgotPassword />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthModal;