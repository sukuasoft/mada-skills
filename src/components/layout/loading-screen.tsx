import Image from 'next/image';
import icon from '@/assets/icon.png';
import Loading from '../features/loading';


export default function LoadingScreen (){

return (
    <div className="fixed top-0 left-0 w-full z-[100000] h-screen bg-primary  text-black flex justify-center
    items-center flex-col">
        <Image className=' brightness-0 invert' src={icon} width={150} alt="" />
        <Loading className='mt-4 text-white'/>
    </div>
)

}