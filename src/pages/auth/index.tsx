import AuthModal from '@/components/Modals/AuthModal'
import Navbar from '@/components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { authModalState } from '@/atoms/authModalAtom'
import { useRecoilValue } from 'recoil'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface AuthPageProps { };

const AuthPage: React.FC<AuthPageProps> = () => {
    const router = useRouter();
    const authModal = useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        if (user) {
            router.push("/");
        }
        if (!user && !loading) { setPageLoading(false) }
    }, [user, router, loading])

    if (pageLoading) return null;

    return (
        <div className="bg-gradient-to-b from-gray-500 to-black h-screen">
            <Navbar />
            <div className="flex flex-col justify-center items-center h-5/6 pointer-events-none select-none">
                <Image src="/hero.png" alt="AC" width={700} height={700} />
            </div>
            {authModal.isOpen && <AuthModal />}
        </div>
    )
}

export default AuthPage;