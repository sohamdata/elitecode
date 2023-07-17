import { useState } from 'react';
import Split from 'react-split';
import PreferenceNav from "./PreferenceNav";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import PlaygroundFooter from './PlaygroundFooter';
import { Problem } from '@/utils/types/problem';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { problems } from '@/utils/problems';

interface PlaygroundProps {
    problem: Problem;
    onSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground = ({ problem, onSuccess }: PlaygroundProps) => {
    const [user] = useAuthState(auth);
    const [currCase, setcurrCase] = useState(0);
    const [userCode, setUserCode] = useState(problem.starterCode);
    const currProblem = problem.id;

    const handleSubmit = async () => {
        if (!user) {
            toast.error('You must be logged in to submit');
            return;
        }

        try {
            const callBackFunction = new Function(`return ${userCode}`)();
            const testCode = problems[currProblem].handlerFunction(callBackFunction);
            if (testCode) {
                toast.success('Your code passed all test cases');
                onSuccess(true);
                setTimeout(() => {
                    onSuccess(false);
                }, 3000);
            }
        } catch (error: any) {
            if (error.toString().includes('AssertionError')) {
                toast.error(`One or more test cases failed. See console (ctrl+shift+j) for more details.`);
            } else {
                toast.error(`Runtime Error: See console (ctrl+shift+j) for more details.`);
            }
        }
    }

    const onCodeChange = (code: string) => {
        setUserCode(code);
    }

    return (
        <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden z-0">
            <PreferenceNav />
            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={userCode}
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        style={{ fontSize: 14 }}
                        onChange={onCodeChange}
                    />
                </div>

                <div className="px-5 w-full overflow-auto pb-12">
                    <div className='relative'>
                        <div className="h-10 relative flex items-center text-white text-sm font-bold">Testcase</div>
                        <hr className="absolute bottom-0 h-0.5 border-none w-16 bg-white" />
                    </div>

                    <div className='flex mt-2 space-x-4'>
                        {problem.examples.map((testcase, index) => (
                            <div key={index} className={`px-3 py-1.5 
                                ${currCase === index && 'bg-neutral-600'}
                            rounded-lg text-white font-medium transition-all hover:bg-neutral-700 cursor-pointer`}
                                onClick={() => setcurrCase(index)}>
                                Case {index + 1}
                            </div>
                        ))
                        }
                        <div className="px-3 py-1.5 rounded-lg text-white font-medium transition-all hover:bg-neutral-700 cursor-pointer">
                            &#43;
                        </div>
                    </div>

                    <div className='mt-4 text-gray-300 text-sm'>
                        <div>
                            <p className='font-bold text-white'>Input: </p>
                            <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                <pre>
                                    {problem.examples[currCase].inputText}
                                </pre>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-white'>Output: </p>
                            <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                <pre>
                                    {problem.examples[currCase].outputText}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </Split>
            <PlaygroundFooter onSubmit={handleSubmit} />
        </div >
    )
}

export default Playground;
