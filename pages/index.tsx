import Card from '@/components/common/Card'
import Image from 'next/image';



const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-400">
      <div className="flex flex-col items-center bg-[url('/assets/images/hero.png')] rounded-xl bg-cover w-[1608px] h-[481px] mt-[35px] ">
        <div className="w-[867px] h-[198px] mt-[82px]">
          <h2 className="text-white font-mono font-semibold text-[87px] text-center leading-none">Find your favorite place here</h2>
        </div>
        <div className="">
          <p className="text-white font-mono font-medium text-[24px] leading-loose tracking-tighter">The best prices for over 2 million properties worldwide</p>
        </div>
          
      </div>
      <Card />
    </div>
  )
}
export default Home;