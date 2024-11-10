import Image from "next/image";
import Navbar from "@/components/navbar";
import Paragraph from "@/components/paragraph";
import Cfcu from "@/components/ui/cfcu";
import Crowdfunding from "@/components/ui/crowdfunding";
import Hnu from "@/components/ui/hnu";
import Solution from "@/components/solution";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Paragraph />
      <Cfcu />
      <Crowdfunding />
      <Hnu />
      <Solution />
      <Footer />
    </>
  );
}
