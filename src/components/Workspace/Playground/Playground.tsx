import { useState } from 'react';
import Split from 'react-split';
import PreferenceNav from "./PreferenceNav";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import PlaygroundFooter from './PlaygroundFooter';
import { Problem } from '@/utils/types/problem';

interface PlaygroundProps {
    problem: Problem,
};

const Playground = ({ problem }: PlaygroundProps) => {
    const [currCase, setcurrCase] = useState(1);

    return (
        <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
            <PreferenceNav />
            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={problem.starterCode}
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        style={{ fontSize: 14 }}
                    />
                </div>

                <div className="px-5 w-full overflow-auto">
                    <div className='relative'>
                        <div className="h-10 relative flex items-center text-white text-sm font-bold">Testcase</div>
                        <hr className="absolute bottom-0 h-0.5 border-none w-16 bg-white" />
                    </div>

                    <div className='flex mt-2 space-x-4'>
                        {problem.examples.map((testcase, index) => (
                            <div key={index} className="px-3 py-1.5 bg-neutral-700 rounded-lg text-white font-medium transition-all hover:bg-neutral-600 cursor-pointer"
                                onClick={() => setcurrCase(testcase.id)}>
                                Case {testcase.id}
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
                                    {problem.examples[currCase - 1].inputText}
                                </pre>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-white'>Output: </p>
                            <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                <pre>
                                    {problem.examples[currCase - 1].outputText}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </Split>
            <PlaygroundFooter />
        </div >
    )
}

export default Playground;
