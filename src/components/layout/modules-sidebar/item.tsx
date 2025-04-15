type ModuleItemProps = {
    current?:boolean
}


export default function ModuleItem ({current=false}:ModuleItemProps) {
    return (
        <div className="flex gap-2 text-sm">
            <div className={`w-1 ${current ? 'bg-primary' : 'bg-[#eee]'}`}></div>

            <p className={`${current ? 'text-primary': '  text-zinc-700'}`}>Tag Básicas</p>


        </div>
    );
}