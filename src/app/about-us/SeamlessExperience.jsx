import Image from "next/image";

export default function SeamlessExperienceSection() {
  return (
    <section className="bg-white py-20 px-6 mx-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-6 ml-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0b132a]">
          <span className="text-[#0063F7]">Seamless</span> trading experience
        </h2>

        {/* Paragraph */}
        <p className="text-gray-500 leading-relaxed">
          Navigating the world of trading is often complex and challenging. From
          managing investments to exploring innovative copy trading, nomo is on
          a mission to simplify and empower your trading journey.
        </p>

        {/* Vision */}
        <p className="text-gray-500 leading-relaxed">
          <span className="font-semibold text-[#0b132a]">Our vision</span> is to
          create a seamless and intuitive platform that eliminates the barriers
          and frustrations associated with trading, making{" "}
          <span className="text-[#0063F7] font-medium">nomo</span> the go-to
          solution for all your trading needs.
        </p>

        {/* Tag Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <span className="bg-[#dcd1fb] text-[#3f3d56] text-sm font-medium px-5 py-2 rounded-full">
            Demo mode for practice
          </span>
          <span className="bg-[#b8ecfb] text-[#0063F7] text-sm font-medium px-5 py-2 rounded-full">
            Copytrading
          </span>
          <span className="bg-[#cfe3fe] text-[#0063F7] text-sm font-medium px-5 py-2 rounded-full">
            All trading essentials
          </span>
          <span className="bg-[#fee5b7] text-[#ff6600] text-sm font-medium px-5 py-2 rounded-full">
            Smart trading
          </span>
          <span className="bg-[#e9ebf6] text-[#3f3d56] text-sm font-medium px-5 py-2 rounded-full">
            Education
          </span>
          <span className="bg-[#d7f6cf] text-[#3f3d56] text-sm font-medium px-5 py-2 rounded-full">
            Latest market insights
          </span>
          <span className="bg-[#dbe2fc] text-[#3f3d56] text-sm font-medium px-5 py-2 rounded-full">
            Favorite asset monitoring
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        {/* Floating Icons */}
        <div className="absolute top-10 left-16 bg-green-400 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
          💼
        </div>
        <div className="absolute top-32 left-4 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
          📊
        </div>
        <div className="absolute bottom-20 left-20 bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
          💲
        </div>
        <div className="absolute top-10 right-20 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
          %
        </div>
        <div className="absolute bottom-20 right-12 bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
          💳
        </div>

        {/* Phone Mockup */}
        <Image
          src="/https://upload.wikimedia.org/wikipedia/commons/3/3f/IPhone_14_Pro_Mockup.png"
          alt="Trading App"
          width={340}
          height={700}
          className="rounded-[3rem] border border-gray-200 shadow-xl"
        />
      </div>
    </section>
  );
}
