import React from 'react'
import Split from 'react-split'
import ProblemDesc from './problemDesc/ProblemDesc'
import PlayGround from './playground/PlayGround'
import { Problem } from '@/utils/types/problem'
type Props = {
  problem:Problem
}

function Workspace ({problem}: Props) {
  return (
    <Split
  className="split minSize={0}"
>

    <ProblemDesc promblem={problem} />
  
   <PlayGround promblem={problem}/>
</Split>
  )
}

export default Workspace