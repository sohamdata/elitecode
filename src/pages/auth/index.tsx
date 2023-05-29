import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

type AuthPageProps = {}

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <div className="bg-gradient-to-b from-gray-500 to-black h-screen">
            <Navbar />
            <div className="flex flex-col justify-center items-center h-5/6 pointer-events-none select-none">
                <img src="/hero.png" alt="AC" style={{ transform: "scale(0.7)" }} />
            </div>
        </div>

    )
}

export default AuthPage;