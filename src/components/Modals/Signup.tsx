import { useState } from 'react';
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

interface Props { };

const Signup: React.FC<Props> = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, mode: "login" }));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }
    }

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form className="space-y-4 px-4 pb-4" onSubmit={handleSignUp}>
            <h1 className="text-center text-2xl text-white font-medium">Join EliteCode</h1>
            <div>
                <label htmlFor="username" className="my-2 block text-white">Username</label>
                <input type="username" name="username" id="username" placeholder="some_cool_username"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="a uniquely insecure password"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Confirm Password</label>
                <input type="password" name="password" id="password" placeholder="same uniquely insecure password"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email" className="my-2 block text-white">Email</label>
                <input type="email" name="email" id="email" placeholder="example@mail.com"
                    className="mb-4 p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
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
