import Split from 'react-split';
import Description from './Description/Description';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';

type WorkspaceProps = {
    problem: Problem,
};

const Workspace = ({ problem }: WorkspaceProps) => {
    return (
        <Split className="split" minSize={0}>
            <Description problem={problem} />
            <Playground problem={problem} />
        </Split>
    );
}

export default Workspace;
