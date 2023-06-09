import Topbar from "@/components/Topbar/Topbar";
import { MockProblems } from "@/MockProblems";

export default function Home() {
  return (
    <main className="bg-dark-layer-2 h-screen">
      <Topbar />
      <div className='mt-6 mx-5 px-4 sm:px-[10vw]'>
        <table className='w-full text-left max-w-[1200px] mx-auto text-sm text-gray-400'>
          <caption className='mb-4 text-2xl font-medium'>PROBLEMS</caption>
          <thead className='border-b uppercase'>
            <tr>
              <th className='px-7 py-3 font-medium'>Status</th>
              <th className='px-7 py-3 font-medium'>Title</th>
              <th className='px-7 py-3 font-medium'>Difficulty</th>
              <th className='px-7 py-3 font-medium'>Category</th>
              <th className='px-7 py-3 font-medium'>Solution</th>
            </tr>
          </thead>
          <tbody>
            {MockProblems.map((problem, index) => (
              <tr key={index} className='border-b'>
                <td className="py-2">{null}</td>
                <td className="py-2"><a href={`https://leetcode.com/problems/${problem.id}`} target="_blank" rel="noopener noreferrer">{problem.title}</a></td>
                <td className="py-2">{problem.difficulty}</td>
                <td className="py-2">{problem.category}</td>
                <td className="py-2">{!problem.videoId ? 'Coming Soon' : <a href={`https://www.youtube.com/watch?v=${problem.videoId}`} target="_blank" rel="noopener noreferrer">Solution</a>}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </main>
  )
}
