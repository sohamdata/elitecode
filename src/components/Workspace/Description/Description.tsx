import { Problem } from "@/utils/types/problem";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

interface DescriptionProps {
    problem: Problem,
};

const Description = ({ problem }: DescriptionProps) => {
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
                        <div className='flex items-center mt-2'>
                            <div
                                className="px-3 py-1 text-green-500 bg-green-700 rounded-3xl bg-opacity-50 text-xs"
                            >
                                Easy
                            </div>
                            <div className='p-1 ml-4 text-lg cursor-pointer text-orange-500'>
                                <BsCheck2Circle />
                            </div>
                            <div className='p-1 ml-4 flex items-center rounded-md hover:bg-dark-layer-2 text-md text-gray-300 cursor-pointer'>
                                <AiFillLike />
                                <span className='ml-1 text-xs'>420</span>
                            </div>
                            <div className='p-1 ml-4 flex items-center rounded-md hover:bg-dark-layer-2 text-md text-gray-300 cursor-pointer'>
                                <AiFillDislike />
                                <span className='ml-1 text-xs'>69</span>
                            </div>
                            <div className='px-2 py-1 ml-4 text-lg rounded-md hover:bg-dark-layer-2 text-gray-300 cursor-pointer'>
                                <TiStarOutline />
                            </div>
                        </div>

                        <div className='text-white text-sm'>
                            <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
                        </div>

                        <div className='mt-4 text-gray-300'>
                            <div>
                                {problem.examples.map((example, index) => (
                                    <div key={index}>
                                        <p className='font-bold text-white'> Example {example.id}: </p>
                                        {example.img && (
                                            <img src={example.img} alt="example" className="mt-3" />
                                        )}
                                        <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                            <pre>
                                                <text className="font-medium text-white">Input:</text> {example.inputText}
                                                <br />
                                                <text className="font-medium text-white">Output:</text> {example.outputText} <br />
                                                {example.explanation && (
                                                    <div>
                                                        <text className="font-medium text-white">Explanation: </text> {example.explanation}
                                                    </div>
                                                )}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='my-5 text-white font-medium'>
                            <div className='text-md'>Constraints:</div>
                            <ul className='ml-5 list-disc'>
                                <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
