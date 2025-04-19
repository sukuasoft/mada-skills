'use client'
type RichContentProps = {
   content:any
}
export default function RichContent ({content}:RichContentProps) {
    console.log(content);
    
    return (
        <div>
          Content
        </div>
    )

}