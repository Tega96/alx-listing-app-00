import Card from '@/components/common/Card'
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center bg-[url('/assets/images/hero.png')] rounded-xl bg-cover w-[1608px] h-[481px] mt-[35px] ">
        <div className="w-[867px] h-[198px] mt-[82px]">
          <h2 className="text-white font-mono font-semibold text-[87px] text-center leading-none">Find your favorite place here</h2>
        </div>
        <div className="">
          <p className="text-white font-mono font-medium text-[24px] leading-loose tracking-tighter">The best prices for over 2 million properties worldwide</p>
        </div>
          
      </div>
      <div className="flex justify-between items-">
        <div className="">
          links
        </div>
        <div>
          filter search
        </div>
      </div>
      <div className="grid grid-cols-4 w-[1607.23] mt-[35px] gap-[31px]">
        {
          PROPERTYLISTINGSAMPLE.map(p => (
            <Card 
              name={p.name}
              state={p.address.state}
              city={p.address.city}
              country={p.address.country}
              rating={p.rating}
              category={p.category}
              price={p.price}
              bed={p.offers.bed}
              shower={p.offers.shower}
              occupants={p.offers.occupants}
              image={p.image}
              discount={p.discount}
            />
          ))

        }
      </div>
    </div>
  )
}
export default Home;
