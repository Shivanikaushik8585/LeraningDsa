import React, { useState } from 'react';
import PrefaceNav from './PrefaceNav/PrefaceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
// import { Problem } from '@/mockProblem/problem';
import { Problem } from '@/utils/types/problem';
import { problems } from '@/mockProblem/problem';
interface PlayGroundProps {
  promblem:Problem;
}


const PlayGround = ({promblem}: PlayGroundProps): JSX.Element => {
  const[activeTestCase,setTestCase] = useState<number>(0);
  return <div className='flex flex-col bg-slate-800 relative overflow-x-hidden'>
        <PrefaceNav/>
 
        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value={promblem.starterCode}                        theme={vscodeDark}
                        extensions={[javascript()]}
                        style={{fontSize:16}}
					/>
				</div>
                <div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
                        {/* case1 */}
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>
                    
					
                    <div className='flex'>
                      {promblem.examples.map((example,idex)=>(

                        <div className='mr-2 items-start mt-2 text-white'  onClick={()=>{
                          setTestCase(idex)

                        }}key={example.id}>
                          <div className='flex flex-wrap items-center gap-y-4'>
                          <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-gray-400 hover:bg-blue-500 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ${activeTestCase===idex ?"bg-blue-500":""}`}>
                            Case {idex+1}
                          </div>
                          </div>
                          </div>
                        
                       
                      ))}
                     
                    </div>
                    <div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-slate-400 border-transparent text-white mt-2'>
                            {promblem.examples[activeTestCase].inputText}
							
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-slate-400 border-transparent text-white mt-2'>
							{promblem.examples[activeTestCase].outputText}
						</div>
					</div>
                    </div>
                    

              
 </Split>
                  
                  </div>
                  
}
// #endregion

export default PlayGround;