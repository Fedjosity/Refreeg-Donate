import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function Paragraph() {
  return (
    <div className="px-10 py-10">
      <div>
        <h1 className="text-4xl font-bold uppercase">Support flood victims</h1>
        <br />
        <p className="bg-red-200 text-red-600 rounded-full px-3 py-1 inline-block">
          This cause is of high precedence
        </p>
      </div>
      <br />
      <div className="flex justify-between	">
        <div className="w-3/5	">
          <Image
            src="/image1.jpg"
            alt="Flood relief"
            width={850}
            height={100}
          />
          <div className="flex gap-4 mt-4">
            <button className="border rounded-full border-black px-[10px] py-[5px] flex items-center gap-2 hover:bg-[#e6eef8] hover:border-transparent hover:underline transition-all duration-300">
              <Image
                src="/Heart with Pulse.png"
                alt="Healthcare"
                width={20}
                height={20}
              />
              Healthcare
            </button>

            <button className="border rounded-full border-black px-[10px] py-[5px] flex items-center gap-2 hover:bg-[#e6eef8] hover:border-transparent hover:underline transition-all duration-300">
              <Image
                src="/Location.png"
                alt="Healthcare"
                width={20}
                height={20}
              />
              Abuja, Nigeria
            </button>
          </div>
          <br />
          <hr />

          <div className="inline-flex items-center gap-2">
            <Image
              src="/uniceflogo.png"
              alt="UNICEF Logo"
              width={50}
              height={50}
            />
            <h1 className="text-black text-lg font-semibold font-['Montserrat'] leading-snug">
              United Nations International Children's Emergency Funds
            </h1>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Paragraph 1</h2>
            <p className="text-2xl font-normal leading-9">
              The recent floods in Maiduguri have displaced thousands of
              families, leaving them without food, shelter, and basic
              necessities. We are raising $50,000 to provide emergency relief,
              including temporary housing, medical supplies, and food. Together,
              we can help rebuild their lives.
            </p>
            <h2 className="text-2xl font-bold">Paragraph 2</h2>
            <p className="text-2xl font-normal leading-9">
              The recent floods in Maiduguri have displaced thousands of
              families, leaving them without food, shelter, and basic
              necessities. We are raising $50,000 to provide emergency relief,
              including temporary housing, medical supplies, and food. Together,
              we can help rebuild their lives.
            </p>
            <h2 className="text-2xl font-bold">Paragraph 3</h2>
            <p className="text-2xl font-normal leading-9">
              The recent floods in Maiduguri have displaced thousands of
              families, leaving them without food, shelter, and basic
              necessities. We are raising $50,000 to provide emergency relief,
              including temporary housing, medical supplies, and food. Together,
              we can help rebuild their lives.
            </p>
          </div>
          <br />
          <br />
          <div className="flex gap-5">
            <button className="border border-black rounded-sm px-20 py-5 flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300">
              Share
              <Image src="/share.svg" alt="Share Icon" width={20} height={20} />
            </button>
            <button className="px-20 py-5 rounded-sm bg-[#433e3f] text-white flex items-center gap-2 hover:bg-black transition-colors duration-300">
              Donate
              <Image
                src="/chevron-right 2.png"
                alt="Donate Icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className="w-[38%] flex flex-col gap-10">
          <div className=" h-fit border border-[#726c6c] p-4 rounded-md shadow-lg">
            <div className="flex flex-col">
              <Progress
                value={50}
                trackColor="bg-gray-300"
                fillColor="bg-[#0070e0]"
              />
              <h1 className="text-[#0a0a0b] text-3xl font-medium font-['Montserrat'] leading-[48px]">
                ₦24,000.00 raised
              </h1>
              <p className="text-gray-700 mt-2">
                of <span className="font-bold">#2,000,000.00</span> goal
              </p>
            </div>
            <br />
            <div className="flex items-center gap-2">
              <p className="border rounded-full border-black px-[10px] py-[5px] flex items-center gap-2 hover:bg-[#e6eef8] hover:border-transparent hover:underline transition-all duration-300">
                2.4k Donations
              </p>
              <p className="border rounded-full border-black px-[10px] py-[5px] flex items-center gap-2 hover:bg-[#e6eef8] hover:border-transparent hover:underline transition-all duration-300">
                30% Funded
              </p>
              <p className="border rounded-full border-black px-[10px] py-[5px] flex items-center gap-2 hover:bg-[#e6eef8] hover:border-transparent hover:underline transition-all duration-300">
                10 days left
              </p>
            </div>
            <br />
            <div className="flex flex-col gap-3">
              <button className="w-full justify-center border border-[#0070e0] px-20 py-5 text-2xl font-bold text-[#0070e0] rounded-md flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Share
                <Image
                  src="/share.svg"
                  alt="Share Icon"
                  width={20}
                  height={20}
                />
              </button>
              <button className="w-full justify-center border bg-[#2a94ff] px-20 py-5 text-2xl font-bold text-white rounded-md flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Donate
                <Image
                  src={"/chevron-right 2.svg"}
                  alt="Donate icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          <div>
            <div className="border border-[#726c6c] p-7 rounded-md shadow-lg">
              <div className="flex items-center gap-10">
                <div className="bg-[#e6eef8] p-3 rounded-full inline-flex justify-center">
                  <Image
                    src="/Graph.png"
                    alt="Graphic-icon"
                    width={25}
                    height={25}
                  />
                </div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-[#0066CC] to-[#EF4387] text-transparent bg-clip-text">
                  300 People just donated
                </h2>
              </div>
              <br />
              <hr />
              <br />

              <div className="flex gap-3 hover:shadow-md transition-all duration-300 group">
                <div className="bg-[#e6eef8] p-2 rounded-full inline-flex items-center justify-center w-10 h-10">
                  <Image
                    src="/Heart.png"
                    alt="Heart-icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p>Salim Ibrahim</p>
                  <p>₦50,000</p>
                </div>
                <div>
                  <p className="bg-[#f2eaf4] text-[#7d568a] text-xs font-semibold p-1 rounded-md">
                    Recent Transaction
                  </p>
                </div>
                <div className="p-2 rounded-full inline-flex items-center justify-center w-10 h-10 ml-auto bg-transparent group-hover:bg-[#e6eef8] transition-colors duration-300">
                  <Image
                    src="/Applause.png"
                    alt="Applause-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <br />

              <div className="flex gap-3 hover:shadow-md transition-all duration-300 group">
                <div className="bg-[#e6eef8] p-2 rounded-full inline-flex items-center justify-center w-10 h-10">
                  <Image
                    src="/Heart.png"
                    alt="Heart-icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p>Salim Ibrahim</p>
                  <p>₦50,000</p>
                </div>
                <div>
                  <p className="bg-[#f2eaf4] text-[#7d568a] text-xs font-semibold p-1 rounded-md">
                    Recent Transaction
                  </p>
                </div>
                <div className="p-2 rounded-full inline-flex items-center justify-center w-10 h-10 ml-auto bg-transparent group-hover:bg-[#e6eef8] transition-colors duration-300">
                  <Image
                    src="/Applause.png"
                    alt="Applause-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <br />

              <div className="flex gap-3 hover:shadow-md transition-all duration-300 group">
                <div className="bg-[#e6eef8] p-2 rounded-full inline-flex items-center justify-center w-10 h-10">
                  <Image
                    src="/Heart.png"
                    alt="Heart-icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p>Salim Ibrahim</p>
                  <p>₦50,000</p>
                </div>
                <div>
                  <p className="bg-[#f2eaf4] text-[#7d568a] text-xs font-semibold p-1 rounded-md">
                    Recent Transaction
                  </p>
                </div>
                <div className="p-2 rounded-full inline-flex items-center justify-center w-10 h-10 ml-auto bg-transparent group-hover:bg-[#e6eef8] transition-colors duration-300">
                  <Image
                    src="/Applause.png"
                    alt="Applause-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <br />

              <div className="flex justify-center items-center gap-9">
                <button className="px-[7.20px] py-3 border border-[#2b2829] rounded-sm flex items-center gap-2 hover:bg-[#e6eef8] transition-colors duration-300">
                  SEE ALL
                  <Image
                    src={"/Eye.png"}
                    alt="See All"
                    width={30}
                    height={30}
                  />
                </button>
                <button className="px-[7.20px] py-3 border border-[#2b2829] rounded-sm flex items-center gap-2 hover:bg-[#e6eef8] transition-colors duration-300">
                  SEE TOP
                  <Image
                    src={"/Star.png"}
                    alt="See Top"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
