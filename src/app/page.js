import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
    <div className="w-full max-w-[1650px]">
      <Herosection />
    </div>
  </div>
  );
}
