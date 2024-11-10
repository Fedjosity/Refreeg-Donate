import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="px-10 py-10 flex flex-wrap gap-5 justify-between">
        <div className="flex flex-col gap-5 max-w-[300px]">
          <h1 className="text-black text-[28px] font-semibold font-['Montserrat'] leading-[33.60px]">
            Subscribe
          </h1>
          <p className="text-neutral-700 text-2xl font-normal font-['Montserrat'] leading-9">
            Join our newsletter to stay up to date on features and releases
          </p>
          <span>
            <form className="flex gap-2 items-center border border-gray-300 rounded-full overflow-hidden w-fit">
              <div className="p-2">
                <Image src="mail-1.svg" alt="Mail" width={20} height={20} />
              </div>
              <input
                type="email"
                className="w-[200px] p-2 outline-none border-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#003366] text-white rounded-full hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </span>
          <p>
            By Subscribing you agree with our{" "}
            <span className="text-[#003366] text-sm font-bold font-['Open Sans'] underline">
              Privacy policy
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="text-black text-[22px] font-semibold font-['Montserrat'] leading-relaxed">
            Quick Links
          </h1>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            Home
          </p>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            About Us
          </p>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            Who we are
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="text-black text-[22px] font-semibold font-['Montserrat'] leading-relaxed">
            Contact Us
          </h1>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            refreegcorrespondence@gmail.com
          </p>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            Phone: +234- 090-174-6760{" "}
          </p>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            Abuja, Nigeria
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="text-black text-[22px] font-semibold font-['Montserrat'] leading-relaxed">
            Legal
          </h1>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            Privacy Policy
          </p>
          <p className="text-[#333333] text-xl font-normal font-['Montserrat'] underline leading-normal">
            Terms of service
          </p>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <div className="p-10">
        <div>
          Copyright © 2024{" "}
          <span className="text-[#003366] text-base font-bold font-['Open Sans'] underline">
            Eiza Innovations.
          </span>{" "}
          All Rights Reserved.
        </div>
        <div></div>
      </div>
    </div>
  );
}
