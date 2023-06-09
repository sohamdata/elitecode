import Link from "next/link";

type Props = {};

const Topbar: React.FC<Props> = () => {
    return (
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24 bg-dark-layer-2">
            <Link href="/" className="flex items-center justify-center h-20">
                <img src="/logo.png" alt="EliteCode" className="h-10" />
            </Link>

            <div className="flex items-center justify-center gap-4 sm:gap-8">
                <a href="https://github.com/sohamdata/elitecode/" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-white text-sm font-medium hover:bg-brand-orange transition duration-300"
                    >Premium</button>
                </a>
                <Link href="/auth">
                    <button
                        className="bg-gray-700 px-2 py-1 sm:px-4 rounded-lg text-white text-sm font-medium hover:bg-white hover:text-brand-orange transition duration-300"
                    >Sign In</button>
                </Link>
            </div>
        </div >
    )
}

export default Topbar;
