type CodeBlockProps = {
    children: React.ReactNode;
}
export default function CodeBlock ({children}:CodeBlockProps){
    return (
        <div className="bg-[#F5F5F5] p-4 rounded-md overflow-x-auto">
            <pre className="text-xs">
                <code>
                    {children}
                </code>
            </pre>
        </div>
    )

}