import Split from 'react-split';
import Description from './Description/Description';

type Props = {};

const Workspace: React.FC<Props> = () => {
    return (
        <Split className="split">
            <Description />
            <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa</div>
        </Split>
    );
}

export default Workspace;
