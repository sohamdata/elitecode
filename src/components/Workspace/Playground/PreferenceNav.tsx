import dynamic from "next/dynamic";
import { AiOutlineExpandAlt, AiOutlineSetting } from "react-icons/ai";
const CustomTooltip = dynamic(() => import('../../CustomToolTip/CustomToolTip'), { ssr: false });

interface PreferenceNavProps { };

const PreferenceNav = (props: PreferenceNavProps) => {
    return (
        <div className='pt-2 h-11 w-full flex justify-between items-center bg-dark-layer-2 overflow-x-hidden'>
            <div className="px-3 py-1.5 bg-dark-layer-1 rounded-lg text-xs text-white font-medium hover:bg-neutral-700 cursor-pointer">
                JavaScript
            </div>
            <div className="mx-3 flex items-center space-x-2">
                <div className="p-1 rounded-md text-slate-400 hover:bg-neutral-700 cursor-pointer">
                    <CustomTooltip
                        id="tooltip-settings"
                        content="Settings"
                        child={<AiOutlineSetting />}
                    />
                </div>
                <div className="p-1 rounded-md text-slate-400 hover:bg-neutral-700 cursor-pointer">
                    <CustomTooltip
                        id="tooltip-fs"
                        content="FullScreen"
                        child={<AiOutlineExpandAlt />}
                    />
                </div>
            </div>
        </div>
    );
}

export default PreferenceNav;
