import { BsChevronUp } from "react-icons/bs";

type FooterProps = {};

const PlaygroundFooter = (props: FooterProps) => {
    return (
        <div className="absolute z-10 bottom-0 w-full bg-dark-layer-1">
            <div className="mx-5 my-2.5 flex justify-between">
                <div className="flex flex-1 flex-nowrap items-center">
                    <div className="flex items-center px-3 py-1 bg-neutral-700 rounded-lg text-sm text-white font-medium transition-all hover:bg-neutral-600 cursor-pointer">
                        Console
                        <BsChevronUp className="ml-2" />
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center px-3 py-1 bg-neutral-500 rounded-lg text-sm text-white font-medium transition-all hover:bg-neutral-600 cursor-pointer">
                        Run
                    </div>
                    <div className="flex items-center px-3 py-1 bg-green-700 rounded-lg text-sm text-white font-medium transition-all hover:bg-green-800 cursor-pointer">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaygroundFooter;
