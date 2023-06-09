import { useEffect, useState } from 'react';
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';

interface Props { };

const Signup: React.FC<Props> = () => {
    const router = useRouter();
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

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password || !email) return alert("we need all fields to send you spam mails.");
        try {
            const newUser = await createUserWithEmailAndPassword(email, password);
            if (!newUser) return;
            router.push("/");
        } catch (error: any) {
            alert(error.message);
            setEmail("");
        }
    }

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    return (
        <form className="space-y-4 px-4 pb-4" onSubmit={handleSignUp}>
            <h1 className="text-center text-2xl text-white font-medium">Join EliteCode</h1>
            <div>
                <label htmlFor="username" className="my-2 block text-white">Username</label>
                <input type="username" name="username" id="username" value={username} placeholder="some_cool_username"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Password</label>
                <input type="password" name="password" id="password" value={password} placeholder="a uniquely insecure password"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Confirm Password</label>
                <input type="password" name="password" id="password2" placeholder="same uniquely insecure password"
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                />
            </div>
            <div>
                <label htmlFor="email" className="my-2 block text-white">Email</label>
                <input type="email" name="email" id="email" value={email} placeholder="example@mail.com"
                    className="mb-4 p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400"
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="py-2 w-full rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300">
                {loading ? "contacting the FBI..." : "Sign Up"}
            </button>
            <div>
                <p className="text-center text-white">Already have an account? <a href="#" className="text-brand-orange hover:underline"
                    onClick={handleClick}
                >Sign in</a></p>
            </div>
        </form>
    )
}

export default Signup;
