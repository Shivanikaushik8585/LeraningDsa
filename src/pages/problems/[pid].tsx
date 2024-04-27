import Topbar from '@/components/Topbar/topbar'
import Workspace from '@/components/WorkSpace/Workspace'
import { problems } from '@/utils/problems'
import { Problem } from '@/utils/types/problem'
import React from 'react'
import { FcCallback } from 'react-icons/fc'

type ProblemPageProps = {
	problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  console.log(problem)
  return (
    <div>
      <Topbar problemPage/>
      <Workspace problem={problem}/>
       </div>
  )
}

export default ProblemPage 
export async function getStaticPaths() {
	const paths = Object.keys(problems).map((key) => ({
		params: { pid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

// getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}