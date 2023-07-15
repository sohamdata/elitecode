import { Problem } from "@/utils/types/problem";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import useGetProblemById from "@/utils/hooks/useGetProblemById";
import useProblemStatus from "@/utils/hooks/useProblemStatus";
import { toast } from "react-hot-toast";

interface DescriptionProps {
    problem: Problem,
};

const Description = ({ problem }: DescriptionProps) => {

    const { currProblem, loading, error } = useGetProblemById(problem.id);
    const { user, liked, disliked, starred, solved, loading: statusLoading, setData } = useProblemStatus(problem.id);
    // const data = { liked, disliked, starred, solved, loading: statusLoading, setData };
    // console.log(data);

    const handleLike = async () => {
        if (!user) {
            toast.error('If you like this problem that much, you should login first');
            return;
        }
        // firebase transactions
        // not liked (and not dislied) -> like+1
        if (!liked && !disliked) {
            return;
        }
        // already liked -> like-1
        if (liked) {
            return;
        }
        // disliked -> like+1, dislike-1
        if (disliked) {
            return;
        }

    }

    const difficultyClassMap = {
        Easy: 'text-green-500 bg-green-700',
        Medium: 'text-yellow-500 bg-yellow-700',
        Hard: 'text-red-500 bg-red-700',
    };

    return (
        <div className='bg-dark-layer-1'>
            <div className='flex h-11 w-full items-center pt-3 bg-dark-layer-2 text-white overflow-x-hidden'>
                <div className="px-5 py-2 bg-dark-layer-1 rounded-t-lg text-xs">
                    Description
                </div>
            </div>

            <div className='flex px-0 py-4 h-[calc(100vh-6rem)] overflow-y-auto'>
                <div className='px-5'>
                    <div className='w-full'>
                        <div className='flex'>
                            <div className='flex-1 text-lg text-white font-medium'>{problem.title}</div>
                        </div>
                        {currProblem && (
                            <div className='flex items-center mt-2'>
                                <div
                                    className={`px-3 py-1 rounded-3xl bg-opacity-50 text-xs ${difficultyClassMap[currProblem.difficulty as ('Easy' | 'Medium' | 'Hard')]}`}
                                >
                                    {currProblem.difficulty}
                                </div>
                                <div className='p-1 ml-4 text-lg cursor-pointer'>
                                    <BsCheck2Circle className={`${solved ? 'text-green-500' : 'text-orange-500'}`} />
                                </div>
                                <div className='p-1 ml-4 flex items-center rounded-md hover:bg-dark-layer-2 text-md text-gray-300 cursor-pointer' onClick={handleLike} >
                                    <AiFillLike className={`${liked ? 'text-green-500' : ''}`} />
                                    <span className='ml-1 text-xs'>{currProblem.likes}</span>
                                </div>
                                <div className='p-1 ml-4 flex items-center rounded-md hover:bg-dark-layer-2 text-md text-gray-300 cursor-pointer'>
                                    <AiFillDislike className={`${disliked ? 'text-red-400' : ''}`} />
                                    <span className='ml-1 text-xs'>{currProblem.dislikes}</span>
                                </div>
                                <div className='px-2 py-1 ml-4 text-lg rounded-md hover:bg-dark-layer-2 text-gray-300 cursor-pointer'>
                                    <TiStarOutline className={`${starred ? 'text-yellow-500' : ''}`} />
                                </div>
                            </div>
                        )}
                        {loading && (
                            <div className='flex items-center mt-2'>
                                <div
                                    className={`px-3 py-1 rounded-3xl bg-opacity-50 text-xs text-green-500 bg-green-700`}
                                >
                                    very easy
                                </div>
                                <div className='p-1 ml-4 text-lg cursor-pointer text-orange-500'>
                                    <BsCheck2Circle />
                                </div>
                                <div className='p-1 ml-4 flex items-center rounded-md hover:bg-dark-layer-2 text-md text-gray-300 cursor-pointer'>
                                    <AiFillLike />
                                    <span className='ml-1 text-xs'>0</span>
                                </div>
                                <div className='p-1 ml-4 flex items-center rounded-md hover:bg-dark-layer-2 text-md text-gray-300 cursor-pointer'>
                                    <AiFillDislike />
                                    <span className='ml-1 text-xs'>0</span>
                                </div>
                                <div className='px-2 py-1 ml-4 text-lg rounded-md hover:bg-dark-layer-2 text-gray-300 cursor-pointer'>
                                    <TiStarOutline />
                                </div>
                            </div>
                        )
                        }

                        <div className='text-white text-sm'>
                            <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
                        </div>

                        <div className='mt-4 text-gray-300'>
                            <div>
                                {problem.examples.map((example, index) => (
                                    <div key={index}>
                                        <p className='font-bold text-white'> Example {example.id + 1}: </p>
                                        {example.img && (
                                            <img src={example.img} alt="example" className="mt-3" />
                                        )}
                                        <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                            <pre>
                                                <span className="font-medium text-white">Input:</span> {example.inputText}
                                                <br />
                                                <span className="font-medium text-white">Output:</span> {example.outputText} <br />
                                                {example.explanation && (
                                                    <div>
                                                        <span className="font-medium text-white">Explanation: </span> {example.explanation}
                                                    </div>
                                                )}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='my-5 pb-5 text-white font-medium'>
                            <div className='text-md'>Constraints:</div>
                            <ul className='ml-5 list-disc'>
                                <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Description;
