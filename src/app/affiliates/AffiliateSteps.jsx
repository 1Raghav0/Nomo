import Image from "next/image";

export default function AffiliateSteps() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] mb-12">
        How does the nomo Affiliate Program work?
      </h2>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Step 1 */}
        <div className="relative bg-[#F8FAFF] p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <Image
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fcontact-us%2FphoneLines-img.avif&w=256&q=75"
              alt="Sign up"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
            Sign up and apply
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            Join our affiliate program by submitting your application. Our team
            will assess your eligibility and ensure you meet our criteria.
          </p>
          <span className="absolute top-6 right-6 bg-[#0059FF] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
            1
          </span>
        </div>

        {/* Step 2 */}
        <div className="relative bg-[#F8FAFF] p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <Image
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Faffiliates%2Faffiliate-program%2Faffiliate.avif&w=256&q=75"
              alt="Affiliate link"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
            Create and share your Affiliate Link
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            Share your unique affiliate link with your audience and grow your
            community.
          </p>
          <span className="absolute top-6 right-6 bg-[#0059FF] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Step 3 */}
        <div className="relative bg-[#F8FAFF] p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <Image
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Faffiliates%2Faffiliate-program%2Fcommissions.avif&w=256&q=75"
              alt="Earn"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
            Earn up to 70% or $500 CPA
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            Receive up to 70% commission or up to $500 for each user who signs
            up through your affiliate link and completes the required actions.
          </p>
          <span className="absolute top-6 right-6 bg-[#0059FF] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
            3
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-4 bg-[#0059FF] hover:bg-[#0047D9] text-white font-semibold px-8 py-3 rounded-xl shadow transition">
        <span className="inline-flex items-center space-x-2">
          <Image
            src="/images/nomo-icon.png"
            alt="nomo"
            width={20}
            height={20}
          />
          <span>Become an affiliate</span>
        </span>
      </button>
    </section>
  );
}
