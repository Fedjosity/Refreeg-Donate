import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function Hnu() {
  return (
    <div className="px-10 py-10">
      <div className="flex flex-col md:justify-between">
        <span>
          <h1 className="text-black text-[32px] font-medium font-['Montserrat'] leading-[38.40px">
            Happening near you
          </h1>
          <h4 className="text-[#726c6c] text-lg font-normal font-['Montserrat'] leading-[27px]">
            This cause are happening close to your current location
          </h4>
        </span>
        <button className="flex text-[#005cb8] text-2xl font-normal font-['Montserrat'] leading-9">
          View all
          <Image
            src={"chevron-right 5.svg"}
            alt="View ALL"
            width={30}
            height={30}
          />
        </button>
      </div>

      <br />
      <div className="flex gap-5 md:gap-8 pb-5 overflow-x-auto whitespace-nowrap">
        <div className="w-[300px] min-w-[300px] md:w-[380px] md:min-w-[380px] flex-shrink-0">
          <span>
            <Image
              src={"/nearyou1.png"}
              alt="nearyou1"
              width={380}
              height={380}
            />
          </span>
          <br />

          <span>
            <div>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src="/Ellipse 35.svg"
                    alt="Heart-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <p>Maiduguri Flood</p>
                  <p className="flex gap-2">
                    <Image
                      src={"clock 1.svg"}
                      alt="time-left"
                      width={10}
                      height={10}
                    />{" "}
                    15 days left{" "}
                    <Image
                      src={"Ellipse 36.svg"}
                      alt="time-left"
                      width={5}
                      height={5}
                    />
                    <span>80% Funded</span>
                  </p>
                </div>
                <button className="inline-flex items-center justify-center w-10 h-10 ml-auto">
                  <Image
                    src="/bookmark 1.svg"
                    alt="Bookmark-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Progress
                value={50}
                trackColor="bg-gray-300"
                fillColor="bg-[#0070e0]"
              />
              <div>
                <h4>₦1,700,000 raised</h4>
                <p>Goal: ₦2,000,000</p>
              </div>
              <button className="w-[150] bg-[#0070E0] p-[15px] text-white rounded-sm flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Donate now
                <Image
                  src={"chevron-right 2.svg"}
                  alt="Donate now"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </span>
        </div>

        <div className="w-[300px] min-w-[300px]  md:w-[380px] md:min-w-[380px] flex-shrink-0">
          <span>
            <Image
              src={"/nearyou1.png"}
              alt="nearyou1"
              width={350}
              height={350}
            />
          </span>
          <br />

          <span>
            <div>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src="/Ellipse 35.svg"
                    alt="Heart-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <p>Maiduguri Flood</p>
                  <p className="flex gap-2">
                    <Image
                      src={"clock 1.svg"}
                      alt="time-left"
                      width={10}
                      height={10}
                    />{" "}
                    15 days left{" "}
                    <Image
                      src={"Ellipse 36.svg"}
                      alt="time-left"
                      width={5}
                      height={5}
                    />
                    <span>80% Funded</span>
                  </p>
                </div>
                <button className="inline-flex items-center justify-center w-10 h-10 ml-auto">
                  <Image
                    src="/bookmark 1.svg"
                    alt="Bookmark-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Progress
                value={50}
                trackColor="bg-gray-300"
                fillColor="bg-[#0070e0]"
              />
              <div>
                <h4>₦1,700,000 raised</h4>
                <p>Goal: ₦2,000,000</p>
              </div>
              <button className="w-[150] bg-[#0070E0] p-[15px] text-white rounded-sm flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Donate now
                <Image
                  src={"chevron-right 2.svg"}
                  alt="Donate now"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </span>
        </div>

        <div className="w-[300px] min-w-[300px]  md:w-[380px] md:min-w-[380px] flex-shrink-0">
          <span>
            <Image
              src={"/nearyou1.png"}
              alt="nearyou1"
              width={350}
              height={350}
            />
          </span>
          <br />

          <span>
            <div>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src="/Ellipse 35.svg"
                    alt="Heart-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <p>Maiduguri Flood</p>
                  <p className="flex gap-2">
                    <Image
                      src={"clock 1.svg"}
                      alt="time-left"
                      width={10}
                      height={10}
                    />{" "}
                    15 days left{" "}
                    <Image
                      src={"Ellipse 36.svg"}
                      alt="time-left"
                      width={5}
                      height={5}
                    />
                    <span>80% Funded</span>
                  </p>
                </div>
                <button className="inline-flex items-center justify-center w-10 h-10 ml-auto">
                  <Image
                    src="/bookmark 1.svg"
                    alt="Bookmark-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Progress
                value={50}
                trackColor="bg-gray-300"
                fillColor="bg-[#0070e0]"
              />
              <div>
                <h4>₦1,700,000 raised</h4>
                <p>Goal: ₦2,000,000</p>
              </div>
              <button className="w-[150] bg-[#0070E0] p-[15px] text-white rounded-sm flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Donate now
                <Image
                  src={"chevron-right 2.svg"}
                  alt="Donate now"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </span>
        </div>

        <div className="w-[300px] min-w-[300px]  md:w-[380px] md:min-w-[380px] flex-shrink-0">
          <span>
            <Image
              src={"/nearyou1.png"}
              alt="nearyou1"
              width={350}
              height={350}
            />
          </span>
          <br />

          <span>
            <div>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src="/Ellipse 35.svg"
                    alt="Heart-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <p>Maiduguri Flood</p>
                  <p className="flex gap-2">
                    <Image
                      src={"clock 1.svg"}
                      alt="time-left"
                      width={10}
                      height={10}
                    />{" "}
                    15 days left{" "}
                    <Image
                      src={"Ellipse 36.svg"}
                      alt="time-left"
                      width={5}
                      height={5}
                    />
                    <span>80% Funded</span>
                  </p>
                </div>
                <button className="inline-flex items-center justify-center w-10 h-10 ml-auto">
                  <Image
                    src="/bookmark 1.svg"
                    alt="Bookmark-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Progress
                value={50}
                trackColor="bg-gray-300"
                fillColor="bg-[#0070e0]"
              />
              <div>
                <h4>₦1,700,000 raised</h4>
                <p>Goal: ₦2,000,000</p>
              </div>
              <button className="w-[150] bg-[#0070E0] p-[15px] text-white rounded-sm flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Donate now
                <Image
                  src={"chevron-right 2.svg"}
                  alt="Donate now"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </span>
        </div>

        <div className="w-[300px] min-w-[300px]  md:w-[380px] md:min-w-[380px] flex-shrink-0">
          <span>
            <Image
              src={"/nearyou1.png"}
              alt="nearyou1"
              width={350}
              height={350}
            />
          </span>
          <br />

          <span>
            <div>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src="/Ellipse 35.svg"
                    alt="Heart-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <p>Maiduguri Flood</p>
                  <p className="flex gap-2">
                    <Image
                      src={"clock 1.svg"}
                      alt="time-left"
                      width={10}
                      height={10}
                    />{" "}
                    15 days left{" "}
                    <Image
                      src={"Ellipse 36.svg"}
                      alt="time-left"
                      width={5}
                      height={5}
                    />
                    <span>80% Funded</span>
                  </p>
                </div>
                <button className="inline-flex items-center justify-center w-10 h-10 ml-auto">
                  <Image
                    src="/bookmark 1.svg"
                    alt="Bookmark-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Progress
                value={50}
                trackColor="bg-gray-300"
                fillColor="bg-[#0070e0]"
              />
              <div>
                <h4>₦1,700,000 raised</h4>
                <p>Goal: ₦2,000,000</p>
              </div>
              <button className="w-[150] bg-[#0070E0] p-[15px] text-white rounded-sm flex items-center gap-2 hover:bg-[#0070e0] hover:text-white transition-colors duration-300">
                Donate now
                <Image
                  src={"chevron-right 2.svg"}
                  alt="Donate now"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
