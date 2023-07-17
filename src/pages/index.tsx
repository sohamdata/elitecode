import Table from "@/components/Table/Table";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/utils/hooks/useHasMounted";

export default function Home() {
  const hasMounted = useHasMounted();
  if (!hasMounted) { console.log("not mounted"); return null; }
  return (
    <main className="bg-dark-layer-2 h-screen">
      <Topbar />
      <div className='mt-6 mx-5 px-4 sm:px-[10vw]'>
        <Table />
      </div>
      {/* <AddProblem /> */}
    </main>
  )
}
