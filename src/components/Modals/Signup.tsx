import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';

interface Props { };

const Signup: React.FC<Props> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, mode: "login" }));
    }

    return (
        <form className="space-y-4 px-4 pb-4">
            <h1 className="text-center text-2xl text-white font-medium">Join EliteCode</h1>
            <div>
                <label htmlFor="username" className="my-2 block text-white">Username</label>
                <input type="username" name="username" id="username" placeholder="some_cool_username"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400 "
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="a uniquely insecure password"
                    className="p-1.5 text-black sm:text-sm placeholder-gray-400 rounded-md outline-none border-5 w-full"
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Confirm Password</label>
                <input type="password" name="password" id="password" placeholder="same uniquely insecure password"
                    className="p-1.5 text-black sm:text-sm placeholder-gray-400 rounded-md outline-none border-5 w-full"
                />
            </div>
            <div>
                <label htmlFor="email" className="my-2 block text-white">Email</label>
                <input type="email" name="email" id="email" placeholder="example@mail.com"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400 "
                />
            </div>
            <button type="submit" className="py-2 w-full rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300">Signup</button>
            <div>
                <p className="text-center text-white">Already have an account? <a href="#" className="text-brand-orange hover:underline"
                    onClick={handleClick}
                >Sign in</a></p>
            </div>
        </form>
    )
}

export default Signup;