import { IoClose } from "react-icons/io5";
import Youtube from "react-youtube";

type Props = {
    videoId: string;
    onClose: () => void;
};

const YoutubeVideo: React.FC<Props> = ({ videoId, onClose }) => {
    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-black opacity-50' onClick={onClose}></div>
            <div className='w-full sm:w-[800px] absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%]'>
                <div className='rounded-lg shadow-lg relative'>
                    <div className='flex justify-end p-2'>
                        <button
                            type='button'
                            className='bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center hover:bg-brand-orange-s hover:text-white text-white'
                            onClick={onClose}
                        >
                            <IoClose className='w-5 h-5' />
                        </button>
                    </div>
                    <div className='relative w-full' style={{ paddingBottom: "56.25%" }}>
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
