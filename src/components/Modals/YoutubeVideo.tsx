import { IoClose } from "react-icons/io5";
import Youtube from "react-youtube";

type Props = {
    videoId: string;
    onClose: () => void;
};

const YoutubeVideo: React.FC<Props> = ({ videoId, onClose }) => {
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-50' onClick={onClose}></div>
            <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
                <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                    <div className='rounded-lg shadow relative w-full mx-6'>
                        <div className='flex justify-end p-2'>
                            <button
                                type='button'
                                className='bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center hover:bg-brand-orange-s hover:text-white text-white'
                                onClick={onClose}
                            >
                                <IoClose className='w-5 h-5' />
                            </button>
                        </div>
                        <div className='relative w-full'>
                            <Youtube
                                videoId={videoId}
                                loading="lazy"
                                iframeClassName='w-full min-h-[500px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default YoutubeVideo;
