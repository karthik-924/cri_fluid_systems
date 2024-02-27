import "./App.css";
import Logo from "./assets/logo.png";
import Award from "./assets/1.png";
import GrpPhoto from "./assets/2.png";
import Products from "./assets/3.png";
import { FaPhoneAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoGlobeOutline } from "react-icons/io5";

function App() {
  return (
    <div className="backgroundcolor max-w-screen font-noto-serif min-h-screen h-fit flex justify-center items-center">
      <div className="flex gap-5 flex-col justify-center items-center w-[98%]">
        <div className="flex justify-center items-center w-full">
          <img src={Logo} alt="logo" className="h-[150px]" />
        </div>
        <div className="flex w-full max-sm:flex-col gap-5 justify-center items-center h-fit">
          <img src={Award} alt="award" className="w-[28%] max-sm:w-[80%]" />
          <div className="flex flex-col gap-2 justify-center items-center w-[65%] max-sm:w-[90%]">
            <h1 className="text-base ml-[44px] font-bold w-full max-sm:ml-0">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h1>
            <ul className=" text-sm font-[540] ml-[58px] mr-1 list-disc max-sm:ml-0">
              <li className=" leading-4">
                C.R.I.&apos;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li className=" leading-4">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={GrpPhoto} alt="group" className="w-[95%] mt-2" />
            <p className="text-sm font-[540] ml-[54px] leading-4 w-full max-sm:ml-0">
              Government of India has awarded the{" "}
              <span className=" font-bold">
                &quot;National Energy Conservation Award 2018&quot;.
              </span>{" "}
              Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
              the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 items-center w-full">
          <p className="text-[15px] w-full max-sm:w-[95%]">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <div className="w-full flex flex-col gap-5 mt-5 max-sm:w-[95%] justify-center items-center">
            <img
              src={Products}
              alt="products"
              className="w-[70%] max-md:w-[80%] max-sm:w-[95%] max-md:h-[200px] max-sm:h-[150px]"
            />
            <p className="text-base">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </p>
          </div>
        </div>
        <hr className="w-full h-[3px] bg-[#f03434]" />
        <div className="flex flex-col justify-center items-center w-full max-sm:w-[95%]">
          <p className="text-base font-bold mb-5">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
          <p className="text-base text-center max-w-full leading-4">
            CHEMICALS & PROCESS{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            POWER{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            WATER & WASTE WATER{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            OILS & GAS{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            PHARMA{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            SUGARS & DISTILLERIES{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            PAPER & PULP{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            MARINE & DEFENCE{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            METAL & MINING{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            FOOD & BEVERAGE{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            PETROCHEMICAL & REFINERIES{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            SOLAR{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            BUILDING{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            HVAC{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            FIRE FIGHTING{""}
            <span className="text-[#f03434] items-center text-center">|</span>
            {""}
            AGRICULTURE & RESIDENTIAL.
          </p>
        </div>
        <div className="w-full bg-[#f03434] min-h-[100px] h-fit pb-2 flex justify-between pt-7 pl-28 pr-28 max-lg:pl-20 max-lg:pr-20 max-[900px]:pl-12 max-[900px]:pr-12 max-sm:flex-col max-sm:gap-5">
          <div className="flex h-[28px] items-end">
            <div className="w-6 rounded-full bg-white h-6 flex justify-center items-center">
              <FaPhoneAlt size={15} color="#f03434" />
            </div>
            <p className="text-white text-[13px] font-light ml-2">
              Toll free <span className="font-semibold">1800 200 1234</span>
            </p>
          </div>
          <div className="flex h-[28px] items-end">
            <div className="w-6 rounded-full bg-white h-6 flex justify-center items-center">
              <GrFacebookOption size={20} color="#f03434" />
            </div>
            <p className="text-white text-[13px] font-medium ml-2">
              www.facebook.com/cripumps
            </p>
          </div>
          <div className="flex h-[28px] items-end">
            <div className="w-[24px] rounded-full bg-white h-[24px] flex justify-center items-center">
              <IoGlobeOutline
                size={25}
                lightingColor={"#FFFFFF"}
                color="#f03434"
              />
            </div>
            <p className="text-white text-[13px] font-medium ml-2">
              www.crigroups.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
