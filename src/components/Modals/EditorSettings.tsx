import { IoClose } from 'react-icons/io5';
import useLocalStorage from '@/utils/hooks/useLocalStorage';

interface SettingsModalProps {
    onClose: () => void;
    onFontSizeChange: (fontSize: string) => void;
}

const EditorSettings = ({ onClose, onFontSizeChange }: SettingsModalProps) => {
    const [fontSize, setFontSize] = useLocalStorage('editor-fontSize', "14px");

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseInt(event.target.value, 10);
        onFontSizeChange(`${newSize}px`);
        setFontSize(`${newSize}px`);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-50 z-40'
                onClick={onClose}
            ></div>
            <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-50'>
                <div className='relative mx-6 w-full bg-dark-layer-1 rounded-lg'>
                    <div className='mb-4 flex justify-between items-center p-2 border-b-2 border-slate-500'>
                        <h1 className='ml-4 my-2 text-gray-200 text-lg font-semibold'>Settings</h1>
                        <button
                            type='button'
                            className='bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center hover:bg-brand-orange-s hover:text-white text-white'
                            onClick={onClose}
                        >
                            <IoClose className='w-5 h-5' />
                        </button>
                    </div>
                    <div className="flex p-4 mb-5 items-center justify-around">
                        <div className="flex-col text-brand-orange font-bold">
                            <div>Font Size</div>
                            <div className="text-xs text-gray-300">Preffered font size for code editor</div>
                        </div>
                        <select
                            id="fontSize"
                            value={parseInt(fontSize, 10)}
                            onChange={handleFontSizeChange}
                            className="py-2 px-10 rounded-md bg-neutral-500 text-gray-100 outline-none cursor-pointer"
                        >
                            <option value={12}>12px</option>
                            <option value={14}>14px</option>
                            <option value={16}>16px</option>
                            <option value={18}>18px</option>
                            <option value={20}>20px</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorSettings;
