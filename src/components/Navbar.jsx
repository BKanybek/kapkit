import { FaWhatsapp } from 'react-icons/fa';
import { PiTelegramLogo } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
const Navbar = () => {
    return (
        <div className='absolute z-10 w-full h-[100px] flex justify-between items-center px-20'>
            <div>
                <ul className='flex gap-4'>
                    <li className=' text-white cursor-pointer'>О нас</li>
                    <li className=' text-white cursor-pointer'>Услуги</li>
                    <li className=' text-white cursor-pointer'>Контакты</li>
                </ul>
            </div>
            <h1 className='text-3xl text-white'>КАПКИТ</h1>
            <div className="flex gap-4">
                <div className="rounded-full bg-white p-1">
                    <FaWhatsapp className="text-black cursor-pointer"/>
                </div>
                <div className="rounded-full bg-white p-1">
                    <LuPhoneCall className="text-black cursor-pointer"/>
                </div>
                <div className="rounded-full bg-white p-1">
                    <PiTelegramLogo className="text-black cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;