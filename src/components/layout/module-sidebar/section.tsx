import ModuleSidebarSectionItem from "./section-item";
import { ModuleSidebarSectionItemType } from "./section-item";

type ModuleSidebarSectionProps = {
    title:string;
    items:ModuleSidebarSectionItemType[]
}

export default function ModuleSidebarSection({title, items}: ModuleSidebarSectionProps){
    return (
        <div>
           <h1 className="font-bold mb-2">{title}</h1>
           <div className="flex flex-col gap-2 ml-2">
            {items.map((item => (
                <ModuleSidebarSectionItem key={item.slug} {...item} />
            )))}

           </div>
           
        </div>
    )
}