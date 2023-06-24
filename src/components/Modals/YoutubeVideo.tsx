import { IoClose } from "react-icons/io5";
import Youtube from "react-youtube";

type YTProps = {
    videoId: string;
    onClose: () => void;
};

const YoutubeVideo = ({ videoId, onClose }: YTProps) => {
    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-black opacity-10 z-10' onClick={onClose} ></div>
            <div className='fixed inset-0 flex items-center justify-center'>
                <div className='w-full sm:w-[800px]'>
                    <div className='flex justify-end p-2'>
                        <button
                            type='button'
                            className='bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center hover:bg-brand-orange-s hover:text-white text-white'
                            onClick={onClose}
                        >
                            <IoClose className='w-5 h-5' />
                        </button>
                    </div>
                    <div className='pb-[500px] relative w-full'>
                        <Youtube
                            videoId={videoId}
                            loading="lazy"
                            iframeClassName='w-full h-full'
                            className='absolute top-0 left-0 w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default YoutubeVideo;
