import Image from "next/image";

export default function Crowdfunding() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-10">
        We are crowdfunding at its best!
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/** First Block */}
        <div className="flex flex-col items-center max-w-xs p-5 shadow-lg rounded-lg">
          <Image src="/cf1.svg" alt="cf1" width={100} height={100} />
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Transparency Through Blockchain
          </h3>
          <p className="text-gray-600 mb-4">
            At RefreeG, every donation is securely recorded on the blockchain,
            ensuring complete transparency in how funds are allocated and used.
            Donors can track their contributions in real-time, knowing exactly
            where their money goes and how it’s making a difference.
          </p>
          <button className="flex items-center gap-1 hover:underline">
            Read More
            <Image
              src="/arrow-right 1.svg"
              alt="Read more"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/** Second Block */}
        <div className="flex flex-col items-center max-w-xs p-5 shadow-lg rounded-lg">
          <Image src="/cf1.svg" alt="cf1" width={100} height={100} />
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Transparency Through Blockchain
          </h3>
          <p className="text-gray-600 mb-4">
            At RefreeG, every donation is securely recorded on the blockchain,
            ensuring complete transparency in how funds are allocated and used.
            Donors can track their contributions in real-time, knowing exactly
            where their money goes and how it’s making a difference.
          </p>
          <button className="flex items-center gap-1 hover:underline">
            Read More
            <Image
              src="/arrow-right 1.svg"
              alt="Read more"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/** Third Block */}
        <div className="flex flex-col items-center  max-w-xs p-5 shadow-lg rounded-lg">
          <Image src="/cf1.svg" alt="cf1" width={100} height={100} />
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Transparency Through Blockchain
          </h3>
          <p className="text-gray-600 mb-4">
            At RefreeG, every donation is securely recorded on the blockchain,
            ensuring complete transparency in how funds are allocated and used.
            Donors can track their contributions in real-time, knowing exactly
            where their money goes and how it’s making a difference.
          </p>
          <button className="flex items-center gap-1 hover:underline">
            Read More
            <Image
              src="/arrow-right 1.svg"
              alt="Read more"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
