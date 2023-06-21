import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Tooltip } from 'react-tooltip';
import UserProfile from "../Modals/UserProfile";
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';

type Props = {
    problemPage?: boolean;
};

const Topbar: React.FC<Props> = ({ problemPage }) => {
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
            <div className="flex items-center justify-between sm:px-12 px-2 md:px-24 bg-dark-layer-1">
                <Link href="/" className="flex items-center justify-center h-20">
                    <Image src="/logo.png" alt="EliteCode" width={32} height={32} />
                </Link>
                {problemPage && <div className="text-white">problem</div>}
                <div className="flex items-center justify-center gap-4 sm:gap-8">
                    <a href="https://github.com/sohamdata/elitecode/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-brand-orange text-sm font-medium hover:bg-brand-orange hover:text-white transition duration-300"
                        >Premium</button>
                    </a>
                    {!user ?
                        (
                            <Link href="/auth" onClick={handleClick}>
                                <button
                                    className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-white text-sm font-medium hover:bg-white hover:text-brand-orange transition duration-300"
                                >Sign In</button>
                            </Link>
                        )
                        :
                        (
                            <div data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.email ?? ""}
                                data-tooltip-place="top"
                            >
                                <Tooltip id="my-tooltip" />
                                <Image
                                    src="/pfp.png"
                                    alt="profile image"
                                    width={32}
                                    height={32}
                                    className="hover:opacity-80 transition duration-300"
                                    onClick={() => setShowProfile(true)}
                                />
                            </div>
                        )
                    }
                </div>
            </div >
            {showProfile && <UserProfile onClose={closeProfileModal} />}
        </>
    )
}

export default Topbar;
