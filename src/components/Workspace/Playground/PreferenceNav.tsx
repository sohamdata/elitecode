import dynamic from "next/dynamic";
import { useState } from "react";
import { AiOutlineExpandAlt, AiOutlineSetting, AiOutlineShrink } from "react-icons/ai";
const CustomTooltip = dynamic(() => import('../../CustomToolTip/CustomToolTip'), { ssr: false });

interface PreferenceNavProps {
    onShowSettings: () => void;
};

const PreferenceNav = ({ onShowSettings }: PreferenceNavProps) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen();
        }
        else {
            document.documentElement.requestFullscreen();
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className='pt-2 h-11 w-full flex justify-between items-center bg-dark-layer-2 overflow-x-hidden z-50'>
            <div className="px-3 py-1.5 bg-dark-layer-1 rounded-lg text-xs text-white font-medium hover:bg-neutral-700 cursor-pointer">
                JavaScript
            </div>
            <div className="mx-3 flex items-center space-x-2">
                <div className="p-1 rounded-md text-slate-400 hover:bg-neutral-700 cursor-pointer">
                    <button onClick={onShowSettings}>
                        <CustomTooltip
                            id="tooltip-settings"
                            content="Settings"
                            child={<AiOutlineSetting />}
                        />
                    </button>
                </div>
                <div className="p-1 rounded-md text-slate-400 hover:bg-neutral-700 cursor-pointer">
                    <button onClick={handleFullScreen}>
                        <CustomTooltip
                            id="tooltip-fs"
                            content={!isFullScreen ? 'Fullscreen' : 'Exit Fullscreen'}
                            child={!isFullScreen ? <AiOutlineExpandAlt /> : <AiOutlineShrink />}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PreferenceNav;
