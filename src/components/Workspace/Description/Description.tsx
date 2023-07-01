import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

interface DescriptionProps { };

const Description = (props: DescriptionProps) => {
    return (
        <div className='bg-dark-layer-1'>
            <div className='flex h-11 w-full items-center pt-3 bg-dark-layer-2 text-white overflow-x-hidden'>
                <div className="px-5 py-2 bg-dark-layer-1 rounded-t-lg text-xs">
                    Description
                </div>
            </div>

            <div className='flex px-0 py-4 overflow-y-auto'>
                <div className='px-5'>
                    <div className='w-full'>
                        <div className='flex'>
                            <div className='flex-1 text-lg text-white font-medium'>1. Two Sum</div>
                        </div>
                        <div className='flex items-center mt-2'>
                            <div
                                className="px-3 py-1 text-green-500 bg-green-700 rounded-3xl bg-opacity-50 text-xs"
                            >
                                Easy
                            </div>
                            <div className='p-1 ml-4 text-lg cursor-pointer'>
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
                            <p className='mt-3'>
                                Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                                <em> indices of the two numbers such that they add up to</em> <code>target</code>.
                            </p>
                            <p className='mt-3'>
                                You may assume that each input would have <strong>exactly one solution</strong>, and you
                                may not use thesame element twice.
                            </p>
                            <p className='mt-3'>You can return the answer in any order.</p>
                        </div>

                        <div className='mt-4 text-gray-300'>
                            <div>
                                <p className='font-bold text-white'>Example 1: </p>
                                <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                    <pre>
                                        <text className="font-medium text-white">Input:</text> nums = [2,7,11,15], target = 9
                                        <br />
                                        <text className="font-medium text-white">Output:</text> [0,1] <br />
                                        <text className="font-medium text-white">Explanation: </text>Because nums[0] + nums[1] == 9, we return [0, 1].
                                    </pre>
                                </div>
                            </div>

                            <div>
                                <p className='font-bold text-white '>Example 2: </p>
                                <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                    <pre>
                                        <text className="font-medium text-white">Input:</text> nums = [3,2,4], target = 6
                                        <br />
                                        <text className="font-medium text-white">Output:</text> [1,2] <br />
                                        <text className="font-medium text-white">Explanation: </text>Because nums[1] + nums[2] == 6, we return [1, 2].
                                    </pre>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-white '>Example 3: </p>
                                <div className="m-2 p-2 rounded-md bg-slate-200 bg-opacity-10">
                                    <pre>
                                        <text className="font-medium text-white">Input:</text> nums = [3,3], target = 6
                                        <br />
                                        <text className="font-medium text-white">Output:</text> [0,1] <br />
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className='my-5 text-white font-medium'>
                            <div className='text-md'>Constraints:</div>
                            <ul className='ml-5 list-disc'>
                                <li className='mt-2'>
                                    <code>2 ≤ nums.length ≤ 10</code>
                                </li>
                                <li className='mt-2'>
                                    <code>-10 ≤ nums[i] ≤ 10</code>
                                </li>
                                <li className='mt-2'>
                                    <code>-10 ≤ target ≤ 10</code>
                                </li>
                                <li className='mt-2 text-sm font-bold'>
                                    <code>Only one valid answer exists.</code>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
