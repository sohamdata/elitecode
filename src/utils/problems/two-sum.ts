import assert from "assert";
import { Problem } from "../types/problem";

const startCodeTwoSum = `function twoSum(nums, target) {
  // Your code here
};`;

const handlerTwoSum = (fun: any) => {
    try {
        const nums = [
            [2, 7, 11, 15],
            [3, 2, 4],
            [3, 3],
        ];
        const targets = [9, 6, 6];
        const answers = [
            [0, 1],
            [1, 2],
            [0, 1],
        ];
        for (let i = 0; i < nums.length; i++) {
            const result = fun(nums[i], targets[i]);
            assert.deepStrictEqual(result, answers[i]);
        }
        return true;

    } catch (err: any) {
        console.log('error: twoSum: ', err);
        throw new Error(err);
    }
};

export const twoSum: Problem = {
    id: "two-sum",
    title: "1. Two Sum",
    problemStatement: `<p class='mt-3'>
    Given an array of integers <code>nums</code> and an integer <code>target</code>, return
    <em> indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
    You may assume that each input would have <strong>exactly one solution</strong>, and you
    may not use thesame element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
    examples: [
        {
            id: 0,
            inputText: "nums = [2,7,11,15], target = 9",
            outputText: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
            id: 1,
            inputText: "nums = [3,2,4], target = 6",
            outputText: "[1,2]",
            explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
        },
        {
            id: 2,
            inputText: "nums = [3,3], target = 6",
            outputText: "[0,1]",
        },
    ],
    constraints: `<li class='mt-2'>
    <code>2 ≤ nums.length ≤ 10</code>
</li>
<li class='mt-2'>
    <code>-10 ≤ nums[i] ≤ 10</code>
</li>
<li class='mt-2'>
    <code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm font-bold'>
    <code>Only one valid answer exists.</code>
</li>`,
    handlerFunction: handlerTwoSum,
    starterCode: startCodeTwoSum,
    order: 1,
    starterFunctionName: "function twoSum(",
};
