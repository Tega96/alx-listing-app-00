import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ text }) => {
    return (
        <button className="flex items-center justify-center w-auto h-[27px] rounded-full py-[6px] px-[13.89px] bg-[#f9f9f9] text-[#161117] font-medium text-[12.16px] tracking-tighter leading-loose">{text}</button>
    )
} 
export default Pill;