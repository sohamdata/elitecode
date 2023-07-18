import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
// import dynamic from "next/dynamic";
// const Workspace = dynamic(() => import("@/components/Workspace/Workspace"), { ssr: false });

interface ProblemPageProps {
    problem: Problem,
};

const ProblemPage = ({ problem }: ProblemPageProps) => {
    return (
        <>
            <Topbar problemPage />
            <Workspace problem={problem} />
        </>
    )
}

export default ProblemPage;

export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key }
    }))

    return {
        paths,
        fallback: false
    }
}

interface GetStaticPropsParams {
    params: {
        pid: string;
    }
}

export async function getStaticProps({ params }: GetStaticPropsParams) {
    const { pid } = params;
    const problem = problems[pid];
    problem.handlerFunction = problem.handlerFunction.toString();

    if (!problem) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            problem
        }
    }
}
