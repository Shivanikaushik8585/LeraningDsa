import React from 'react'
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai'

interface Props {
    
}

const PrefaceNav = (props: Props) => {
    return (
        <div className='flex items-center justify-between bg-black h-11 w-full '>
			<div className='flex items-center text-white'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
					<div className='flex items-center px-1'>
						<div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
					</div>
				</button>
			</div>

			<div className='flex items-center m-2'>
				<button
					className='text-white relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex  ml-auto p-1 mr-2 hover:bg-dark-fill-3 group'
					>
					<div className='h-4 w-4 text-white font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='absolute w-auto p-2 text-sm m-2  min-w-max translate-x-3  right-0 top-5 z-10 rounded-md shadow-md
		text-white bg-black  origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100'>Settings</div>
				</button>

				<button className=' relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex  ml-auto p-1 mr-2 hover:bg-gray group' >
					<div className='h-4 w-4 text-gray-500 font-bold text-lg'>
                        <AiOutlineFullscreen/>
						{/* {!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />} */}
					</div>
					<div className="absolute w-auto p-2 text-sm m-2  min-w-max translate-x-3  right-0 top-5 z-10 rounded-md shadow-md
		text-white bg-black  origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100">Full Screen</div>
				</button>
			</div>
			{/* {settings.settingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />} */}
		</div>
    )
}

export default PrefaceNav
