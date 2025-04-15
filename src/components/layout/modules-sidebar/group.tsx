import ModuleItem from "./item";

export default function ModuleGroup(){
    return (
        <div>
           <h1 className="font-bold mb-2">HTML</h1>
           <div className="flex flex-col gap-2 ml-2">
            <ModuleItem  current={true}/>
            <ModuleItem />
            <ModuleItem />


           </div>
           
        </div>
    )
}