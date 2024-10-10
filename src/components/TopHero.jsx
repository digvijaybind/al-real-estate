import DamacLogo from "../assets/images/group (1).svg";
import WalletIcon from "../assets/images/icn1_1.svg";
import PriceIcon from "../assets/images/icn1_2.svg";
import KeyIcon from "../assets/images/icn1_3.svg";
import HeroImage from "../assets/images/riverside_damac.jpg";

const TopHero = () => {
  return (
    <div className="text-start w-full">
      <p className="px-5 md:px-14 py-5 flex gap-4 text-xm md:text-base flex-wrap font-light mb-8">
        <span className="text-primary whitespace-nowrap">Main Page</span> ›{" "}
        <span className="text-primary whitespace-nowrap">Projects</span> ›
        <span className="whitespace-nowrap">Riverside from DAMAC Properties</span>
      </p>
      <div className="pl-8 w-full md:pl-40 grid grid-cols-2 pb-16 hero-bg bg-auto bg-no-repeat">
        <div className="col-span-2 md:col-span-1 pb-10">
          <img src={DamacLogo} alt="logo" className="w-6/12 md:w-4/12 mt-9" />
          <h2 className="mt-24 text-5xl font-medium text-[#333333]">
            Townhouses <br />
            in the Riverside complex <br />
            in Dubai Investments Park
          </h2>
          <button className="bg-primary text-white rounded-xl px-16 py-5 drop-shadow-xl text-[1.3rem] font-medium mt-16">
            Discover More
          </button>
          <div className="grid grid-cols-3 mt-16">
            <div className="grid grid-cols-12">
              <div className="col-span-3 pr-3 flex items-center">
                <img src={WalletIcon} alt="wallet" />
              </div>
              <div className="flex flex-col col-span-8">
                <h6 className="text-xl font-medium">AED 1,9M</h6>
                <p className="font-light text-sm">STARTING PRICE</p>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-3 pr-3 flex items-center">
                <img src={PriceIcon} alt="wallet" />
              </div>
              <div className="flex flex-col col-span-8">
                <h6 className="text-xl font-medium">Easy 70/30</h6>
                <p className="font-light text-sm">PAYMENT PLAN</p>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-3 pr-3 flex items-center">
                <img src={KeyIcon} alt="wallet" />
              </div>
              <div className="flex flex-col col-span-8">
                <h6 className="text-xl font-medium">Update soon</h6>
                <p className="font-light text-sm">HANDOVER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-3 col-span-2 md:col-span-1">
          <img
            src={HeroImage}
            alt="building"
            className="rounded-s-[80px] w-full h-full object-cover object-left"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHero;
