import Table from "@/components/Table/Table";
import AddProblem from "@/components/TempAddProblem/AddProblem";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
  return (
    <main className="bg-dark-layer-2 h-screen">
      <Topbar />
      <div className='mt-6 mx-5 px-4 sm:px-[10vw]'>
        <Table />
      </div>
      <AddProblem />
    </main>
  )
}
