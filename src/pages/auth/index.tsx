import AuthModal from '@/components/Modals/AuthModal'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { authModalState } from '@/atoms/authModalAtom'
import { useRecoilValue } from 'recoil'

interface AuthPageProps { };

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState);
    return (
        <div className="bg-gradient-to-b from-gray-500 to-black h-screen">
            <Navbar />
            <div className="flex flex-col justify-center items-center h-5/6 pointer-events-none select-none">
                <img src="/hero.png" alt="AC" style={{ transform: "scale(0.7)" }} />
            </div>
            {authModal.isOpen && <AuthModal />}
        </div>
    )
}

export default AuthPage;