import { useState } from 'react';
import Split from 'react-split';
import Description from './Description/Description';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Head from 'next/head';

type WorkspaceProps = {
    problem: Problem,
};

const Workspace = ({ problem }: WorkspaceProps) => {
    const [success, setSuccess] = useState(false);
    return (
        <>
            <Head>
                <title>{problem.title}</title>
            </Head>
            <Split className="split" minSize={0}>
                <Description problem={problem} />
                <Playground problem={problem} onSuccess={setSuccess} />
                {success && <div className="absolute z-10 top-0 left-0 w-full h-full bg-green-900 bg-opacity-20 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-5">
                        <div className="text-2xl font-bold text-center">Congratulations!</div>
                        <div className="text-center">You have successfully completed this problem</div>
                    </div>
                </div>
                }
            </Split>
        </>
    );
}

export default Workspace;
