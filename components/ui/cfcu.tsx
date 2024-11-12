/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZJvlsVBy8KF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

export default function Component() {
  return (
    <Tabs defaultValue="comment" className="w-full px-4 md:px-10 py-6 md:py-10">
      <hr />
      <br />
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        {/* Tabs List */}
        <TabsList className="flex flex-wrap md:flex-nowrap justify-start gap-4 md:gap-10 items-center">
          <TabsTrigger
            value="comment"
            className="relative text-black text-lg md:text-2xl font-medium font-['Montserrat'] leading-9 pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out data-[state=active]:border-b-[#003366]"
          >
            Comments
            <span className="absolute -top-2 -right-3 md:-top-3 md:-right-6 rounded-full px-1.5 py-0.5 md:px-2 md:py-0.5 text-[#003366] text-xs md:text-sm font-medium font-['Montserrat'] leading-5 md:leading-9">
              20
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="faq"
            className="uppercase text-black text-lg md:text-2xl font-medium font-['Montserrat'] leading-9 pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out data-[state=active]:border-b-[#003366]"
          >
            faq
          </TabsTrigger>
          <TabsTrigger
            value="community"
            className="text-black text-lg md:text-2xl font-medium font-['Montserrat'] leading-9 pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out data-[state=active]:border-b-[#003366]"
          >
            Community
          </TabsTrigger>
          <TabsTrigger
            value="updates"
            className="text-black text-lg md:text-2xl font-medium font-['Montserrat'] leading-9 pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out data-[state=active]:border-b-[#003366]"
          >
            Updates
          </TabsTrigger>
        </TabsList>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <button className="w-full md:w-auto bg-[#005CB8] p-3 rounded-md flex gap-2 items-center h-12 text-neutral-50 text-lg md:text-xl font-medium font-['Montserrat'] leading-normal hover:bg-blue-900">
            Donate
            <Image
              src={"/chevron-right 2.png"}
              alt="Donate"
              width={20}
              height={20}
            />
          </button>
          <button className="w-full md:w-auto px-4 py-4 flex gap-2 items-center text-black text-lg md:text-xl font-medium font-['Montserrat'] leading-normal">
            Remind Me
            <Image src={"/Remind.png"} alt="Remind me" width={20} height={20} />
          </button>
        </div>
      </div>
      <br />
      <hr />

      <TabsContent value="comment">
        <div className="mt-6">
          <h3 className="text-black text-lg md:text-2xl font-medium font-['Montserrat'] leading-9 mb-6">
            Please drop supportive comments even if you don’t want to donate :)
          </h3>
          <div className="flex flex-col items-center justify-center text-center p-6 md:p-[250px] h-full gap-6">
            <h3 className="text-[#0a0a0b] text-lg md:text-2xl font-semibold font-['Montserrat'] leading-9">
              There are no comments on this cause yet, be the first to comment?
            </h3>
            <button className="flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 rounded-md border border-[#0a0a0b] text-[#0a0a0b] text-base md:text-xl font-semibold font-['Montserrat'] leading-8 hover:bg-black hover:text-white transition-all duration-300 group">
              Donate
              <Image
                src="/arrow-right 1.svg"
                alt="donate"
                width={18} // Adjusted to match the smaller button size
                height={18}
                className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:invert"
              />
            </button>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="faq">
        <div className="p-4">
          <h3 className="text-lg font-medium">Content for faq</h3>
          <p className="text-gray-500">
            This is the content for the second tab.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="community">
        <div className="p-4">
          <h3 className="text-lg font-medium">Content for community</h3>
          <p className="text-gray-500">
            This is the content for the third tab.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="updates">
        <div className="p-4">
          <h3 className="text-lg font-medium">Content for updates</h3>
          <p className="text-gray-500">
            This is the content for the fourth tab.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
