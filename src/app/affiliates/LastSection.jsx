import Image from "next/image";

export default function ReadyToStartSection() {
  return (
    <section className="flex flex-col mx-40 md:flex-row items-center justify-between bg-[#13275C] rounded-3xl px-8 md:px-20 py-16 mt-16 text-white overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 text-left mb-10 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          Ready to start <br /> trading with{" "}
          <span className="text-[#0059FF]">nomo?</span>
        </h2>

        <button className="bg-white text-[#0059FF] font-semibold rounded-xl px-6 py-3 flex items-center shadow-md hover:shadow-lg transition">
          <Image
            src="/images/nomo-icon.png"
            alt="nomo"
            width={20}
            height={20}
            className="mr-2"
          />
          Create an Account
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 h-full flex justify-center relative">
        <Image
          src="https://nomotrade.com/_next/image?url=%2Fimages%2Findex%2Fhero%2FheroPoster.avif&w=1920&q=75"
          alt="Trading Illustration"
          width={650}
          height={500}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
