import Link from 'next/link';
import React from 'react'
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';

interface NavbarProps { };

const Navbar: React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, isOpen: true }));
    }

    return (
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
            <Link href="/" className="flex items-center justify-center h-20">
                <img src="/logo.png" alt="EliteCode" className="h-10" />
            </Link>
            <button className="bg-brand-orange px-2 py-1 sm:px-4 rounded-lg text-white text-sm font-medium
            hover:bg-white hover:text-brand-orange transition duration-300"
                onClick={handleClick}
            >Sign In</button>
        </div >
    )
}

export default Navbar;

