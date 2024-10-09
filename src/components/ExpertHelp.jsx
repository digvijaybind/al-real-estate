import { HiPhone } from "react-icons/hi2";
import MPDLogo from "../assets/images/mpd-black-logo.svg";
import YuliaImg from "../assets/images/yulia_ph.jpg";
import { TiLocation } from "react-icons/ti";

const ExpertHelp = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#EFF2F7] to-white rounded-3xl border border-[#EFF2F7] px-48 py-20">
        <h2 className="w-full text-start text-4xl mb-14 font-medium">
          Our Expert Will Help You<br /> Buy The Best Property in{" "}
          <span className="text-primary">Dubai</span>
        </h2>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 border flex flex-col justify-center items-center rounded-xl bg-white p-10">
            <form className="w-full flex flex-col gap-5">
              <input className="border-b text-xl pb-2 placeholder:font-light" placeholder="Full name *" />
              <input className="border-b text-xl pb-2 placeholder:font-light" placeholder="Telephone number *" />
              <button className="bg-primary text-white rounded-xl px-6 py-4 drop-shadow-xl text-[1.3rem] font-medium mt-5">Request A Free Call</button>
            </form>
            <img src={MPDLogo} alt="logo" className="w-8/12 mt-8" />
          </div>
          <div className="col-span-8 rounded-xl grid grid-cols-2 bg-white border">
            <div className="h-full w-auto pl-16">
              <img src={YuliaImg} alt="Yulia" />
            </div>
            <div className="flex flex-col items-start p-8">
              <h4 className="text-[1.35rem] font-medium">Yulia Berezhnaya</h4>
              <p className="border-b w-full pb-8 mb-8 text-start font-light">
                Senior Sales Advisor
                <br />
                of Metropolitan Premium Properties
              </p>
              <div className="w-full flex items-start text-primary font-medium text-[1.15rem] mb-2">
                <div className="w-2/12 flex items-center">
                  <HiPhone />
                </div>
                <div className="w-10/12 flex items-center">+971544337766</div>
              </div>
              <div className="w-full flex items-start font-medium text-[1.15rem]">
                <div className="w-2/12 text-primary flex items-center">
                  <TiLocation className="text-2xl"/>
                </div>
                <div className="w-10/12 text-start">36-38 Floor, Al Salam Tecom Tower, Dubai, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertHelp;
