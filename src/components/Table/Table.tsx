import { MockProblems } from "@/MockProblems";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import YoutubeVideo from "../Modals/YoutubeVideo";

type Props = {};

const Table: React.FC<Props> = () => {
    return (
        <table className='w-full max-w-[1200px] text-left mx-auto text-sm text-gray-400'>
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
                        <td className="px-4 py-4 pl-7 text-green-700"><BsCheckCircle size={20} /></td>
                        <td className="px-4 py-4 hover:text-sky-500"><a href={`https://leetcode.com/problems/${problem.id}`} target="_blank" rel="noopener noreferrer">{problem.title}</a></td>
                        <td className={`px-4 py-4 ${problem.difficulty === "Easy" ? "text-green-600" : problem.difficulty === "Medium" ? "text-orange-500" : "text-red-500"}`}>{problem.difficulty}</td>
                        <td className="px-4 py-4">{problem.category}</td>
                        <td className="px-4 py-4">{!problem.videoId ? 'Coming Soon' : <a href={`https://www.youtube.com/watch?v=${problem.videoId}`} target="_blank" rel="noopener noreferrer"><AiFillYoutube size={20} className="hover:text-red-600" /></a>}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                {/* <YoutubeVideo /> */}
            </tfoot>
        </table>
    )
}

export default Table;
