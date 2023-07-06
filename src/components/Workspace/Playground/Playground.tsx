import Split from 'react-split';
import PreferenceNav from "./PreferenceNav";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python';
import PlaygroundFooter from './PlaygroundFooter';

interface PlaygroundProps { };

const Playground = (props: PlaygroundProps) => {
    const code = `def twoSum(nums, target):
  # write your code here
    `;
    return (
        <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
            <PreferenceNav />
            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={code}
                        theme={vscodeDark}
                        extensions={[python()]}
                        style={{ fontSize: 14 }}
                    />
                </div>

                <div className="px-5 w-full overflow-auto">
                    <div className='relative'>
                        <div className="h-10 relative flex items-center text-white text-sm font-bold">Testcase</div>
                        <hr className="absolute bottom-0 h-0.5 border-none w-16 bg-white" />
                    </div>

                    <div className='flex mt-2 space-x-4'>
                        <div className="px-3 py-1.5 bg-neutral-700 rounded-lg text-white font-medium transition-all hover:bg-neutral-600 cursor-pointer">
                            Case 1
                        </div>
                        <div className="px-3 py-1.5 bg-neutral-700 rounded-lg text-white font-medium transition-all hover:bg-neutral-600 cursor-pointer">
                            Case 2
                        </div>
                        <div className="px-3 py-1.5 bg-neutral-700 rounded-lg text-white font-medium transition-all hover:bg-neutral-600 cursor-pointer">
                            Case 3
                        </div>
                        <div className="px-3 py-1.5 rounded-lg text-white font-medium transition-all hover:bg-neutral-700 cursor-pointer">
                            &#43;
                        </div>
                    </div>

                    <div className='mt-4 text-gray-300 text-sm'>
                        <div>
                            <p className='font-bold text-white'>Input: </p>
                            <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                <pre>
                                    nums = [2,7,11,15], target = 9
                                </pre>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-white'>Output: </p>
                            <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                <pre>
                                    [0,1]
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
