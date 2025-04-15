import Link from "next/link";

type  SidebarModuleLinkProps = {
    tutorial: string;
    module:string;
    href:string;
}
export default function SidebarModuleLink({tutorial, module, href}:SidebarModuleLinkProps) {
    return (
        <div className="text-sm flex gap-4 items-center pr-4 border-r border-solid border-[#eee]">
            <p className="font-bold">{tutorial}</p>
            <Link href={href} className="bg-primary-light text-primary px-4 py-1 rounded-md  text-xs">{module}</Link>
        </div>
    )
}