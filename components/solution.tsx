import Image from "next/image";

export default function Solution() {
  return (
    <div className="px-4 py-10 md:px-8 lg:px-36 lg:py-20">
      <div className="px-6 py-8 md:px-10 lg:px-20 lg:py-14 bg-[#183251] rounded-3xl text-white flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Ready to be part of the solution?
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          Join the RefreeG community and become a RefreeGerian today! By joining
          us, you contribute to empowering less privileged individuals in
          African communities, supporting causes that foster socio-economic
          growth, and promoting sustainable development. Together, we can make a
          significant impact and create a brighter future for all.
        </p>
        <button className="flex items-center bg-white px-4 py-2 text-black rounded mt-4 hover:bg-gray-200 transition-colors duration-300">
          Join our community
          <Image
            src="/arrow-right 1.svg"
            alt="Join the community"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
