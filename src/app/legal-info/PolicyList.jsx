import { FileText } from "lucide-react";

export default function PolicyList() {
  const policies = [
    { title: "AML policy" },
    { title: "Cookie policy" },
    { title: "Risk disclosure" },
    { title: "Personal data deletion" },
    { title: "Credit Bonus Terms & Conditions" },
    { title: "Complaints Handling Policy" },
    { title: "Privacy Policy" },
    { title: "Terms and Conditions" },
    { title: "Customer complaints" },
  ];

  // Split into 2 columns
  const leftCol = policies.slice(0, 5);
  const rightCol = policies.slice(5);

  return (
    <section className="bg-[#f9fafb] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {leftCol.map((policy, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#f2f4f8] rounded-2xl px-6 py-5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <FileText className="text-[#0057ff]" size={22} />
                </div>
                <h3 className="text-[17px] font-semibold text-[#0a1633]">
                  {policy.title}
                </h3>
              </div>
              <button className="bg-[#0057ff] text-white font-medium px-5 py-2 rounded-lg hover:bg-[#0046cc] transition">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {rightCol.map((policy, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#f2f4f8] rounded-2xl px-6 py-5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <FileText className="text-[#0057ff]" size={22} />
                </div>
                <h3 className="text-[17px] font-semibold text-[#0a1633]">
                  {policy.title}
                </h3>
              </div>
              <button className="bg-[#0057ff] text-white font-medium px-5 py-2 rounded-lg hover:bg-[#0046cc] transition">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
