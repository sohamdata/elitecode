import Link from "next/link";
import Image from "next/image";
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Tooltip } from 'react-tooltip';

type Props = {};

const Topbar: React.FC<Props> = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24 bg-dark-layer-1">
            <Link href="/" className="flex items-center justify-center h-20">
                <img src="/logo.png" alt="EliteCode" className="h-10" />
            </Link>

            <div className="flex items-center justify-center gap-4 sm:gap-8">
                <a href="https://github.com/sohamdata/elitecode/" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-brand-orange text-sm font-medium hover:bg-brand-orange hover:text-white transition duration-300"
                    >Premium</button>
                </a>
                {!user ?
                    <Link href="/auth">
                        <button
                            className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-white text-sm font-medium hover:bg-white hover:text-brand-orange transition duration-300"
                        >Sign In</button>
                    </Link>
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
                                className="cursor-pointer hover:opacity-80 transition duration-300"
                            />
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Topbar;
