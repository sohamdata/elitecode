import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Props { };

const Login: React.FC<Props> = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClickSignup = () => {
        setAuthModalState((prev) => ({ ...prev, mode: "signup" }));
    }

    const handleClickForgotPassword = () => {
        setAuthModalState((prev) => ({ ...prev, mode: "forgotPassword" }));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "password":
                setPassword(value);
                break;
            case "email":
                setEmail(value.toLowerCase());
                break;
            default:
                break;
        }
    }

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!password || !email) {
            toast.error('we need all fields to send you spam mails.');
            return;
        }
        try {
            const newUser = await signInWithEmailAndPassword(email, password);
            if (!newUser) return;
            router.push("/");
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
    }, [error]);

    return (
        <>
            <form className="space-y-4 px-4 pb-4" onSubmit={handleSignIn}>
                <h1 className="text-center text-2xl text-white font-medium">Sign in to EliteCode</h1>
                <div>
                    <label htmlFor="email" className="my-2 block text-white">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@mail.com"
                        className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="my-2 block text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="a uniquely insecure password"
                        className="mb-4 p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="py-2 w-full rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300">
                    {loading ? "contacting the FBI..." : "Sign in"}
                </button>
                <button type="submit" className="w-full text-xs text-end text-white hover:text-brand-orange hover:underline"
                    onClick={handleClickForgotPassword}
                >Forgor password?</button>
                <div>
                    <p className="text-center text-white cursor-pointer">Don't have an account? <a className="text-brand-orange hover:underline"
                        onClick={handleClickSignup}
                    >Sign up</a></p>
                </div>
            </form>
        </>
    )
}

export default Login;
