import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";

interface ProblemPageProps { };

const ProblemPage: React.FC<ProblemPageProps> = () => {
    return (
        <>
            <Topbar problemPage />
            <Workspace />
        </>
    )
}

export default ProblemPage;