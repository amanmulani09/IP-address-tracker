import DetailsIP from "@/components/DetailsIP";
import UserInput from "@/components/UserInput";

export default function Home(){
  return(
    <main>
   <header className="h-52 bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center self-center">
    <h1 className="text-center text-white text-2xl font-semibold">IP Address Tracker</h1>
    <UserInput />
    <DetailsIP />
   </header>
   <div>
    
   </div>
    </main>
  )
}