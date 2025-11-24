import Image from 'next/image'
import Link from 'next/link'
import ALX_Logo from '@/public/assets/icons/logo.svg'






const Footer: React.FC = () => {
    return (
        <footer className="w-full h-[441px] bg-[#222222]">
            <div className="w-full h-[29px] bg-[#34967c]"></div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[640.45px] h-[161.6px] mt-[64.96px] ml-[59.55px] gap-[27px] overflow-hidden">
                    <Image src={ALX_Logo} alt="Logo" className="w-[58.73px] h-[30.6px] text-[#FFFFFF]" />
                    <p className="text-white text-[16px] font-medium font-Quicksand">ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
                </div>
                <div className="flex w-[793px] h-[222px] mt-[67px] mr-[59.55px] gap-[155px]">
                    <nav className="flex flex-col w-[157px] h-[187px] gap-[30px]">
                        <h3 className="text-[#CACACA] font-semibold text-[25px] font-Quicksand ">Explore</h3>
                        <ul className="flex flex-col gap-[9px] w-[157px] h-[157px]">
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Apartment in Dubai</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Hotels in New York</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Villa in Spain</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Mansion in Indonesia</Link>
                        </ul>
                    </nav>
                    <nav className="flex flex-col w-[157px] h-[187px] gap-[30px]">
                        <h3 className="text-[#CACACA] font-semibold text-[25px] font-Quicksand ">Company</h3>
                        <ul className="flex flex-col gap-[9px] w-[81px] h-[166px]">
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">About us</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Blog</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Career</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Customers</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Brand</Link>
                        </ul>
                    </nav>
                    <nav className="flex flex-col w-[169px] h-[161px] gap-[30px]">
                        <h3 className="text-[#CACACA] font-semibold text-[25px] font-Quicksand ">Help</h3>
                        <ul className="flex flex-col gap-[9px] w-[169px] h-[105px]">
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Support</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Cancel booking</Link>
                            <Link href="#" className="font-medium text-[16px] text-[#cacaca] ">Refunds Process</Link>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex justify-center">
                <hr className=" w-[1608px] h-[0px]  mt-[30.5px] text-white" />
                div.
            </div>
        </footer>
    )
}
export default Footer;