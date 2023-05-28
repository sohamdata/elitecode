import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

type AuthPageProps = {}

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <div className="bg-gradient-to-b from-gray-500 to-black h-screen">
            <div className="mx-auto max-w-7xl">
                <Navbar />
            </div>
        </div>
    )
}

export default AuthPage;