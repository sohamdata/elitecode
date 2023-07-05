import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomTooltip from "@/components/CustomToolTip/CustomToolTip";
import UserProfile from "../Modals/UserProfile";
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from "react-icons/bs";

type TopbarProps = {
    problemPage?: boolean;
};

const Topbar = ({ problemPage }: TopbarProps) => {
    const [user] = useAuthState(auth);
    const [showProfile, setShowProfile] = useState(false);
    const setAuthModalState = useSetRecoilState(authModalState);

    const closeProfileModal = () => {
        setShowProfile(false);
    };

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, isOpen: true, mode: "login" }));
    }

    return (
        <>
            <div className="flex items-center justify-between w-full px-7 bg-dark-layer-1">
                <Link href="/" className="flex items-center h-[3.1rem]">
                    <Image src="/logo.png" alt="EliteCode" width={32} height={32} />
                </Link>
                {problemPage && (
                    <div className="ml-28 flex items-center justify-center gap-2">
                        <div className="p-2 flex items-center justify-center rounded text-amber-500 hover:bg-zinc-700 cursor-pointer">
                            <FaChevronLeft />
                        </div>
                        <Link href="/" className="flex items-center whitespace-nowrap rounded font-medium max-w-[170px] text-amber-500 hover:text-sky-600 cursor-pointer">
                            <BsList />
                            <p className="ml-2">All Problems</p>
                        </Link>
                        <div className="p-2 flex items-center justify-center rounded text-amber-500 hover:bg-zinc-700 cursor-pointer">
                            <FaChevronRight />
                        </div>
                    </div>
                )}
                <div className="flex items-center justify-end space-x-4">
                    <a href="https://github.com/sohamdata/elitecode/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-brand-orange text-sm font-medium hover:bg-brand-orange hover:text-white transition duration-300"
                        >Premium</button>
                    </a>
                    {!user ?
                        (
                            <Link href="/auth" onClick={handleClick}>
                                <button
                                    className="bg-gray-700 px-4 py-1 rounded-lg text-white text-sm font-medium hover:bg-white hover:text-brand-orange transition duration-300"
                                >Sign In</button>
                            </Link>
                        )
                        :
                        (
                            <CustomTooltip
                                id="tooltip-profile"
                                content="Profile"
                                child={
                                    <Image
                                        src="/pfp.png"
                                        alt="profile image"
                                        width={32}
                                        height={32}
                                        className="hover:opacity-80 transition duration-300"
                                        onClick={() => setShowProfile(true)}
                                    />
                                }
                            />
                        )
                    }
                </div>
            </div >
            {showProfile && <UserProfile onClose={closeProfileModal} />}
        </>
    )
}

export default Topbar;
