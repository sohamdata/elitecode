import { auth } from '@/firebase/firebase';
import { useEffect, useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

interface ForgotPasswordProps { };

const ForgotPassword = (props: ForgotPasswordProps) => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return toast.error("not funny, please provide your email.");
        try {
            const success = await sendPasswordResetEmail(email);
            if (success) {
                toast.success("reset link sent to your email.");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
    }, [error]);

    return (
        <form className="space-y-4 px-4 pb-4" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl text-white font-medium">Password Reset</h1>
            <div>
                <p className="text-sm  bg-yellow-100 p-2 rounded-md">
                    That's awfully silly of you. Enter your email below and we'll send you a reset link.
                </p>
            </div>
            <div>
                <label htmlFor="email" className="my-2 block text-white">Email</label>
                <input type="email" name="email" id="email" placeholder="example@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-1.5 rounded-md outline-none border-5 w-full text-black sm:text-sm placeholder-gray-400 "
                />
            </div>
            <button type="submit" className="py-2 w-full rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300">
                {sending ? "sending..." : "Reset My Password"}
            </button>
        </form>
    )
};

export default ForgotPassword;
