import Split from 'react-split';
import PreferenceNav from "./PreferenceNav";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python';

interface PlaygroundProps { };

const Playground = (props: PlaygroundProps) => {
    return (
        <div className="flex flex-col bg-dark-layer-1 relative">
            <PreferenceNav />
            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value="a = 1"
                        theme={vscodeDark}
                        extensions={[python()]}
                        style={{ fontSize: 14 }}
                    />
                </div>
                <div className='text-white'>real industry level programming here</div>
            </Split>
        </div >
    )
}

export default Playground;
