import ModuleGroup from "./group";

export default function ModulesSidebar (){
    return (
        <aside className="bg-[#fafafa] h-full  overflow-y-auto px-6 py-4 w-[200px] border-r border-[#eaeaea]">
            <div className="flex flex-col gap-4">
            <ModuleGroup />
            <ModuleGroup />
            <ModuleGroup />

            </div>
        </aside>
    )
}