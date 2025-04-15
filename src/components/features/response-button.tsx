import {RadioGroupItem} from '@/components/ui/radio-group';

type ResponseButtonProps = {
    children: React.ReactNode, 
    option: string,
    selected?:boolean
}
export default function ResponseButton ({children, option, selected}:ResponseButtonProps){

    return (
          <label htmlFor={`rOpcao${option}`} className={`flex items-center space-x-2 px-4 py-2 ${selected ?
         'bg-primary-light' :  'bg-[#fafafa] hover:bg-[#eee]'
          } rounded-xl `}>
                    <RadioGroupItem value={`opcao${option}`} id={`rOpcao${option}`} />
                    <span >{children}</span>
                  </label>
    )

}