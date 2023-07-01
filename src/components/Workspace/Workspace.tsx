import Split from 'react-split';
import Description from './Description/Description';
import Playground from './Playground/Playground';

type WorkspaceProps = {};

const Workspace = (props: WorkspaceProps) => {
    // @refresh reset
    return (
        <Split className="split" minSize={0}>
            <Description />
            <Playground />
        </Split>
    );
}

export default Workspace;
