import Image from "next/image";

export default function Solution() {
  return (
    <div className="px-[142px] py-[83px]">
      <div className="px-[197px] py-[53px] bg-[#183251] rounded-3xl text-white flex flex-col gap-2 justify-center items-center">
        <h1 className="text-4xl font-bold">
          Ready to be part of the solution?
        </h1>
        <p>
          Join the RefreeG community and become a RefreeGerian today! By joining
          us, you contribute to empowering less privileged individuals in
          African communities, supporting causes that foster socio-economic
          growth, and promoting sustainable development. Together, we can make a
          significant impact and create a brighter future for all.
        </p>
        <button className="flex bg-white p-2 text-black rounded">
          Join our community
          <Image
            src={"arrow-right 1.svg"}
            alt="Join the community"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
