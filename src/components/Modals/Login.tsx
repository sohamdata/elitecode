interface Props { };

const Login: React.FC<Props> = () => {
    return (
        <form action="submit" className="space-y-4 px-4 pb-4">
            <h1 className="text-center text-2xl text-white font-medium">Sign in to EliteCode</h1>
            <div>
                <label htmlFor="email" className="my-2 block text-white">Email</label>
                <input type="email" name="email" id="email" placeholder="example@mail.com"
                    className="p-1.5 text-black sm:text-sm placeholder-gray-400 rounded-md outline-none border-5 w-full"
                />
            </div>
            <div>
                <label htmlFor="password" className="my-2 block text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="a uniquely insecure password"
                    className="mb-4 p-1.5 text-black sm:text-sm placeholder-gray-400 rounded-md outline-none border-5 w-full"
                />
            </div>
            <button type="submit" className="py-2 w-full rounded-md bg-brand-orange font-medium text-white hover:bg-white hover:text-brand-orange transition duration-300">Log in</button>
        </form>
    )
}

export default Login;