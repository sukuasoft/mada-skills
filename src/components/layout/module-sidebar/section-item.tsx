import Link from "next/link";

export interface ModuleSidebarSectionItemType {
    title:string;
    moduleSlug:string;
    slug:string;
    section:string;
    current?:boolean
}

type ModuleSidebarSectionItemProps = ModuleSidebarSectionItemType &{
}



export default function ModuleSidebarSectionItem ({current=false, title, moduleSlug, slug, section}:ModuleSidebarSectionItemProps) {
    return (
        <Link href={`/${section}/${moduleSlug}/${slug}`} className="flex gap-2 text-sm">
            <div className={`w-1 ${current ? 'bg-primary' : 'bg-[#eee]'}`}></div>

            <p className={`${current ? 'text-primary': '  text-zinc-700'}`}>{title}</p>


        </Link>
    );
}