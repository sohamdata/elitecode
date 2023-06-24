import Split from 'react-split';
import Description from './Description/Description';

type WorkspaceProps = {};

const Workspace = (props: WorkspaceProps) => {
    return (
        <Split className="split" minSize={0}>
            <Description />
            <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa</div>
        </Split>
    );
}

export default Workspace;
