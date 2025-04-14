import Link from "next/link";

type NavbarLinkProps = {
    children: React.ReactNode;
    href:string;
    current?:boolean;
}

export default function NavbarLink({children, href, current=false}:NavbarLinkProps) {
  return (
    <div className="flex items-center">
      <Link
        href={href}
        className={`${current ? 'text-primary':  'text-zinc-600 hover:text-zinc-800'} flex gap-1 items-center`}
      >
        {children}
      </Link>
    </div>
  );
}