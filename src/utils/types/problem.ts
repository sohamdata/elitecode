export type Example = {
    id: number,
    inputText: string,
    outputText: string,
    explanation?: string,
    img?: string,
};

export type Problem = {
    id: string;
    title: string;
    problemStatement: string;
    examples: Example[];
    constraints: string;
    order: number;
    starterCode: string;
    handlerFunction: ((fun: any) => boolean) | string;
    starterFunctionName: string;
};

export type ProblemDoc = {
    category: string;
    difficulty: string;
    dislikes: number;
    id: string;
    likes: number;
    link?: string;
    order: number;
    title: string;
    videoId?: string;
};
