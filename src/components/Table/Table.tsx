import { MockProblems } from "@/MockProblems";
import { BsCheckCircle } from "react-icons/bs";

type Props = {};

const Table: React.FC<Props> = () => {
    return (
        <table className='w-full text-left max-w-[1200px] mx-auto text-sm text-gray-400'>
            <caption className='mb-4 text-2xl font-medium'>PROBLEMS</caption>
            <thead className='border-b uppercase'>
                <tr>
                    <th className='px-7 py-3 font-medium'>Status</th>
                    <th className='px-7 py-3 font-medium'>Title</th>
                    <th className='px-7 py-3 font-medium'>Difficulty</th>
                    <th className='px-7 py-3 font-medium'>Category</th>
                    <th className='px-7 py-3 font-medium'>Solution</th>
                </tr>
            </thead>
            <tbody>
                {MockProblems.map((problem, index) => (
                    <tr key={problem.id} className='border-b'>
                        <td className="py-4 pl-7 text-green-700"><BsCheckCircle size={20} /></td>
                        <td className="py-4"><a href={`https://leetcode.com/problems/${problem.id}`} target="_blank" rel="noopener noreferrer">{problem.title}</a></td>
                        <td className="py-4">{problem.difficulty}</td>
                        <td className="py-4">{problem.category}</td>
                        <td className="py-4">{!problem.videoId ? 'Coming Soon' : <a href={`https://www.youtube.com/watch?v=${problem.videoId}`} target="_blank" rel="noopener noreferrer">Solution</a>}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Table;