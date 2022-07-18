import { Lesson } from "./Lesson";

export function Sidebar(){
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl border-b border-gray-500 mb-6 pb-6 block ">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
                <Lesson 
                availableAt={new Date("10-10-2022")} 
                type="live" 
                title="Abertura do evento Ignite Labs"  />
                
            </div>
        </aside>
    )
}