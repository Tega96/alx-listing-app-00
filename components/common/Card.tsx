import { PROPERTYLISTINGSAMPLE } from '@/constants'
import Image from 'next/image';
import Pill from './Pill';
import Star from '@/public/assets/icons/star.svg'
import Bed from '@/public/assets/icons/bed.svg'
import Bathtub from '@/public/assets/icons/bathtub.svg'
import People from '@/public/assets/icons/people.svg'


const Card: React.FC = () => {
    return (

        // {
        //     PROPERTYLISTINGSAMPLE.map((p) => (
                <div className="flex flex-col w-[378.56px] h-[422.7px] gap-[17.37px]">
                    <div className="flex flex-col w-[378.56px] h-[299.36px] gap-[17.37px]">
                        <Image src={''} alt={''} className="rounded-xl w-full h-[255px]"/>
                        <div className="flex flex-row h-[27px] w-[318px] gap-[9.55px] mt-4">
                            <Pill text="Top villa" />
                            <Pill text="Self CheckIn" />
                            <Pill text="Free Reschedule" />
                        </div>
                    </div>
                    <div className="flex justify-between h-[51.6px] w-[378.56px]">
                        <div className="h-[51.6px] w-[227px] gap-[2.6px]">
                            <h3 className="h-[28px] w-[277px] font-Quicksand font-semibold text-[22px] text-[#161117] leading-loose tracking-tighter">Cidigoe</h3>
                            <p className="w-[277px] h-[21px] font-medium text-[17px] leading-loose text-[#929292] tracking-tighter">sisneiem</p>
                        </div>
                        <div className="flex justify-center items-center gap-[4.34px] w-[55.16px] h-[21px]">
                            <Image src={Star} alt="rating star" className="w-[19.8px] h-[18.85px]" />
                            <p className="font-medium text-[17px] leading-loose tracking-tighter">4.76</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-[378.56px] h-[37px]">
                        <div className="grid grid-cols-3 w-[156px] h-[37px] rounded-full border py-[8.68px] px-[20.84px] gap-[11.29px]">
                            <div className="flex gap-[6.82px] w-[34.58px] h-[19.76px]">
                                <Image src={Bed} alt="bed" />
                                <p className="text-[12.95px] font-medium tracking-tighter leading-loose text-[#161117] font-Quicksand">4</p>
                            </div>
                            <div className="flex gap-[6.82px] w-[34.58px] h-[19.76px]">
                                <Image src={Bathtub} alt="bathtub" />
                                <p className="text-[12.95px] font-medium tracking-tighter leading-loose text-[#161117] font-Quicksand">4</p>
                            </div>
                            <div className="flex gap-[6.82px] w-[34.58px] h-[19.76px]">
                                <Image src={People} alt="people" />
                                <p className="text-[12.95px] font-medium tracking-tighter leading-loose text-[#161117] font-Quicksand">4</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
        //     ))
        // }
        
    )
}
export default Card;
