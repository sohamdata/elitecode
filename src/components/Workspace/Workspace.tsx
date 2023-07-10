import Split from 'react-split';
import Description from './Description/Description';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Head from 'next/head';

type WorkspaceProps = {
    problem: Problem,
};

const Workspace = ({ problem }: WorkspaceProps) => {
    return (
        <>
            <Head>
                <title>{problem.title}</title>
            </Head>
            <Split className="split" minSize={0}>
                <Description problem={problem} />
                <Playground problem={problem} />
            </Split>
        </>
    );
}

export default Workspace;
