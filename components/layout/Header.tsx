import Image from 'next/image';
import Briefcase from '@/public/assets/icons/work.svg'
import Button from '@/components/common/Button'
import Logo from '@/public/assets/icons/logo-black.png'


const Header: React.FC = () => {
    return (
        <header className="flex flex-col w-full h-[219px] sticky top-0 z-50 bg-red-100">
            <div className="flex flex-col justify-center items-center w-auto md:w-full h-[92px] md:h-[47px] border-y-1 border-[#37997d] bg-[#34967c]">
                <div className="flex justify-between items-center h-[30px] w-[584px]">
                    <Image src={Briefcase} alt="briefcase" />
                    <p className="text-semibold text-white text-[16px] font-Quicksand ">Overseas trip? Get the latest information on travel guides </p>
                    <Button 
                        text="More Info"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center bg-red-500 w-full h-[88px] border-y-1 border-[#ebebeb]">
                <div className="w-[58px] h-[30px] my-[28px] mx-[59.55px]">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="w-[737px] h-[58px] bg-green-400 my-[15px] rounded-full">
                    Search section here.
                </div>
                <div className="flex items-center justify-center gap-[8px] h-[45px] my-[22px] mx-[59.55px] ">
                    <Button text='Sign in' />
                    <Button text='Sign up' />
                </div>
            </div>
            <div className="flex justify-between items-center bg-green-500 h-[84px] w-full ">
                
            </div>
            Header File
        </header>
    )
}
export default Header;