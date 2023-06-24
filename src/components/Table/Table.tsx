import { useState } from "react";
import Link from "next/link";
import { MockProblems } from "@/MockProblems";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import YoutubeVideo from "../Modals/YoutubeVideo";

type TableProps = {};

const Table = (props: TableProps) => {
    const [ytmodal, setYtmodal] = useState(false);
    const [videoId, setVideoId] = useState("");

    const openVideoModal = (id: string) => {
        setVideoId(id);
        setYtmodal(true);
    };

    const closeVideoModal = () => {
        setVideoId("");
        setYtmodal(false);
    };

    return (
        <>
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
                            <td className="px-4 py-4 hover:text-sky-500">
                                <Link href={`/problems/${problem.id}`} prefetch={false}>
                                    {problem.title}
                                </Link>
                            </td>
                            <td className={`px-4 py-4 ${problem.difficulty === "Easy" ? "text-green-600" : problem.difficulty === "Medium" ? "text-orange-500" : "text-red-500"}`}>{problem.difficulty}</td>
                            <td className="px-4 py-4">{problem.category}</td>
                            <td className="px-4 py-4">{!problem.videoId ? 'Coming Soon' :
                                <AiFillYoutube
                                    size={20} className="hover:text-red-600 cursor-pointer"
                                    onClick={() => openVideoModal(problem.videoId as string)}
                                />
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {ytmodal && <YoutubeVideo videoId={videoId} onClose={closeVideoModal} />}
        </>
    )
}

export default Table;
