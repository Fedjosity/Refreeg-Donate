import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="px-5 py-10 flex flex-wrap gap-10 justify-between">
        {/* Subscribe Section */}
        <div className="flex flex-col gap-5 w-full md:w-[300px]">
          <h1 className="text-black text-2xl font-semibold font-['Montserrat']">
            Subscribe
          </h1>
          <p className="text-neutral-700 text-lg font-normal font-['Montserrat']">
            Join our newsletter to stay up to date on features and releases
          </p>
          <span>
            <form className="flex gap-2 items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-fit">
              <div className="p-2">
                <Image src="/mail-1.svg" alt="Mail" width={20} height={20} />
              </div>
              <input
                type="email"
                className="w-full md:w-[200px] p-2 outline-none border-none"
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

        {/* Quick Links */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="text-black text-lg font-semibold font-['Montserrat']">
            Quick Links
          </h1>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            Home
          </p>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            About Us
          </p>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            Who we are
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="text-black text-lg font-semibold font-['Montserrat']">
            Contact Us
          </h1>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            refreegcorrespondence@gmail.com
          </p>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            Phone: +234- 090-174-6760
          </p>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            Abuja, Nigeria
          </p>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="text-black text-lg font-semibold font-['Montserrat']">
            Legal
          </h1>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            Privacy Policy
          </p>
          <p className="text-[#333333] text-base font-normal font-['Montserrat'] underline">
            Terms of service
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-5 py-5 text-center border-t border-gray-300">
        <p className="text-sm">
          Copyright © 2024{" "}
          <span className="text-[#003366] font-bold underline">
            Eiza Innovations.
          </span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
